<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { rosary } from '$lib/stores';
	import type { LiturgicalColor } from '$lib/liturgical';
	import GlassPanel from '$lib/components/GlassPanel.svelte';
	import BottomSheet from '$lib/components/BottomSheet.svelte';
	import MysteryImage from '$lib/components/MysteryImage.svelte';
	import { getLocale } from '$lib/i18n';

	// Get language from route params
	let lang = $derived($page.params.lang ?? 'en');
	let t = $derived(getLocale(lang));

	// State
	let currentDate = $state(new Date());
	let timeInterval: any;

	onMount(() => {
		// Store init moved to layout

		// Keep date live (optional, but good for midnight rollover)
		currentDate = new Date();
		timeInterval = setInterval(() => {
			currentDate = new Date();
		}, 60000);
	});

	onDestroy(() => {
		if (timeInterval) clearInterval(timeInterval);
	});

	// Derived from Store
	import { getLiturgicalTheme } from '$lib/liturgical';
	// Fallback to current date calculation if store is empty (rare but possible during init)
	let theme = $derived($rosary.theme || getLiturgicalTheme(currentDate));
	let mode = $derived($rosary.mode);

	// Formatting Date: "MONDAY, OCTOBER 24"
	let dateString = $derived.by(() => {
		const d = currentDate;

		if (lang === 'la' || lang === 'la-va') {
			const days = [
				'DOMINICA',
				'FERIA SECUNDA',
				'FERIA TERTIA',
				'FERIA QUARTA',
				'FERIA QUINTA',
				'FERIA SEXTA',
				'SABBATO'
			];
			const months = [
				'IANUARII',
				'FEBRUARII',
				'MARTII',
				'APRILIS',
				'MAII',
				'IUNII',
				'IULII',
				'AUGUSTI',
				'SEPTEMBRIS',
				'OCTOBRIS',
				'NOVEMBRIS',
				'DECEMBRIS'
			];
			return `${days[d.getDay()]}, ${months[d.getMonth()]} ${d.getDate()}`;
		}

		const locale = lang === 'en' ? 'en-US' : lang;
		const weekday = d.toLocaleDateString(locale, { weekday: 'long' }).toUpperCase();
		const month = d.toLocaleDateString(locale, { month: 'long' }).toUpperCase();
		const dayNum = d.getDate();
		return `${weekday}, ${month} ${dayNum}`;
	});

	// Mystery Logic
	function getMysteryForDay(date: Date): string {
		const day = date.getDay(); // 0=Sun
		if (day === 1 || day === 6) return 'joyful';
		if (day === 2 || day === 5) return 'sorrowful';
		if (day === 4) return 'luminous';
		return 'glorious'; // 0, 3 (Sun/Wed)
	}

	let recommendedMystery = $derived(getMysteryForDay(currentDate));
	let mysteryName = $derived.by(() => {
		return t.mysteries[recommendedMystery]?.name || 'Mystery';
	});

	// Menus
	let themeMenuOpen = $state(false);
	let mysteryMenuOpen = $state(false);
	let langMenuOpen = $state(false);
	let modeMenuOpen = $state(false);

	// Selection State for Navigation
	let selectedMysteryForMode = $state('joyful'); // Default init, will be overwritten

	// Helper Actions
	function handleThemeSelect(color: LiturgicalColor) {
		const url = new URL($page.url);
		url.searchParams.set('theme', color);
		goto(url.toString(), { replaceState: true, noScroll: true });
		themeMenuOpen = false;
	}

	function switchLang(newLang: string) {
		const url = new URL($page.url);
		url.pathname = `${base}/${newLang}`;
		// params preserved automatically
		goto(url.toString(), { replaceState: true });
		langMenuOpen = false;
	}

	function initiatePrayer(mysteryKey: string) {
		selectedMysteryForMode = mysteryKey;
		modeMenuOpen = true; // Open mode select
	}

	function selectMode(m: 'digital' | 'physical') {
		const url = new URL($page.url);
		url.pathname = `${base}/${lang}/pray`;
		url.searchParams.set('mystery', selectedMysteryForMode);
		url.searchParams.set('mode', m);
		// Theme param preserved from current URL
		goto(url.toString());
		modeMenuOpen = false;
	}

	const flags: Record<string, string> = {
		en: '🇺🇸',
		'en-us': '🇺🇸',
		pt: '🇧🇷',
		'pt-br': '🇧🇷',
		es: '🇲🇽',
		'es-mx': '🇲🇽',
		la: '🇻🇦',
		'la-va': '🇻🇦'
	};
	let currentFlag = $derived(flags[lang.toLowerCase()] || '🌐');

	// Theme Emojis
	const themeEmojis: Record<string, string> = {
		ordinary: '🌿',
		advent_lent: '✝️',
		christmas_easter: '🕊️',
		pentecost: '🔥',
		gaudete: '🌸',
		gold: '✨',
		silver: '🩶',
		requiem: '🕯️'
	};

	let currentThemeEmoji = $derived.by(() => {
		// Robust matching based on COLOR if available, or fallback to season string
		// Using color is safer because strings are localized and might vary
		// Green->Ordinary, Purple->Advent/Lent, White->Xmas/Easter, Red->Pentecost, Rose->Gaudete, Black->Requiem

		const c = theme.color;
		if (c === 'green') return themeEmojis.ordinary;
		if (c === 'purple') return themeEmojis.advent_lent;
		if (c === 'white') return themeEmojis.christmas_easter;
		if (c === 'red') return themeEmojis.pentecost;
		if (c === 'rose') return themeEmojis.gaudete;
		if (c === 'gold') return themeEmojis.gold;
		if (c === 'silver') return themeEmojis.silver;
		if (c === 'black') return themeEmojis.requiem;

		return '🎨';
	});

	// Mystery Emojis
	const mysteryEmojis: Record<string, string> = {
		joyful: '🌱',
		luminous: '☀️',
		sorrowful: '🍷',
		glorious: '🦋'
	};
	// Image Refresh
	let mysteryImageComponent: any;

	function handleImageClick() {
		if (mysteryImageComponent) mysteryImageComponent.refresh();
	}

	function formatThemeLabel(s: string) {
		if (s.includes(' / ')) return s.replace(' / ', ' /<br>');
		return s.replace(' ', '<br>');
	}
</script>

<div
	class="relative z-10 flex h-dvh w-full flex-col items-center overflow-x-hidden overflow-y-auto"
>
	<div class="absolute top-6 left-6 z-50">
		<button
			class="text-3xl drop-shadow-md transition-transform hover:scale-110 active:scale-95"
			onclick={() => (themeMenuOpen = true)}
			title={t.ui.menus.theme}
		>
			<!-- Dynamic Emoji Matching -->
			{currentThemeEmoji}
		</button>
	</div>

	<div class="absolute top-6 right-6 z-50">
		<button
			class="text-3xl drop-shadow-md transition-transform hover:scale-110 active:scale-95"
			onclick={() => (langMenuOpen = true)}
			title={t.ui.menus.language}
		>
			{currentFlag}
		</button>
	</div>

	<!-- Main Content Area: Centered Vertically and Horizontally -->
	<main
		class="mx-auto flex w-full max-w-md flex-1 flex-col items-center justify-center gap-6 px-6 py-6 pb-10"
	>
		<!-- Language button REMOVED - already exists in top right corner -->

		<!-- 2. Date & 3. Liturgical Time -->
		<div class="flex flex-col items-center gap-2">
			<h2 class="text-xs font-bold tracking-[0.2em] text-white/60 uppercase">{dateString}</h2>
			<h1
				class="text-center text-4xl leading-tight font-black tracking-wider uppercase drop-shadow-lg md:text-5xl"
			>
				{(theme?.key && t.ui.liturgical?.[theme.key]) || theme?.season}
			</h1>
		</div>

		<!-- 3. Change Theme (REMOVED Button per request, moved to top left) -->
		<!-- Keeping structure if needed, but removing element -->

		<!-- 4. Image (Same size/ratio as prayer page) -->
		<!-- Using w-full and consistent bevels/radius -->
		<!-- 4. Image (Same size/ratio as prayer page) -->
		<button
			class="relative z-0 aspect-video w-full max-w-lg items-center justify-center overflow-hidden rounded-[32px] transition-transform active:scale-[0.98]"
			onclick={handleImageClick}
		>
			<MysteryImage bind:this={mysteryImageComponent} />
		</button>

		<!-- 5. Recommended Mystery Label & 6. Name -->
		<div class="flex flex-col items-center gap-1">
			<span class="text-[10px] tracking-widest text-white/40 uppercase"
				>{t.ui.recommended_mystery}</span
			>
			<h2 class="text-2xl font-bold text-white drop-shadow-md">{mysteryName}</h2>
		</div>

		<!-- 7. Pray Recommended Button & 8. Change Mystery Button -->
		<div class="flex w-full flex-col gap-4">
			<button
				class="w-full rounded-[32px] border border-white/10 bg-white/5 py-4 font-bold text-white shadow-lg backdrop-blur-md transition-all hover:bg-white/10 active:scale-[0.98]"
				onclick={() => initiatePrayer(recommendedMystery)}
			>
				{t.ui.pray_button_prefix || 'Pray Recommended'}
			</button>

			<button
				class="w-full rounded-[32px] border border-white/10 bg-white/5 py-4 font-medium text-white/70 backdrop-blur-md transition-all hover:bg-white/10 hover:text-white active:scale-[0.98]"
				onclick={() => (mysteryMenuOpen = true)}
			>
				{t.ui.pick_mystery}
			</button>
		</div>
	</main>

	<!-- Footer -->
	<footer class="mt-4 py-4 text-center">
		<p class="text-[10px] tracking-wider text-white/20 uppercase">
			OPEN ROSARY • 2025 • {t.ui.footer_made_by || 'MADE BY'}
			<a
				href="https://guidrezza.com"
				target="_blank"
				rel="noopener noreferrer"
				class="hover:text-white/60 hover:underline">GUIDREZZA</a
			>
		</p>
	</footer>

	<!-- Bottom Sheets -->

	<!-- Language -->
	<BottomSheet
		isOpen={langMenuOpen}
		title={t.ui.menus.language}
		onClose={() => (langMenuOpen = false)}
	>
		<div class="flex max-h-[60vh] flex-col gap-2 overflow-y-auto">
			{#each [{ code: 'en-us', label: 'English (US)' }, { code: 'es-mx', label: 'Español (MX)' }, { code: 'la-va', label: 'Lingua Latina' }, { code: 'pt-br', label: 'Português (BR)' }].sort( (a, b) => a.label.localeCompare(b.label) ) as langItem}
				<button
					class="flex w-full items-center rounded-[32px] bg-white/5 p-4 text-left text-lg font-medium transition-colors hover:bg-white/10"
					onclick={() => switchLang(langItem.code)}
				>
					<span class="mr-3 text-2xl">{flags[langItem.code] || '🌐'}</span>
					<span class="text-lg font-medium">{langItem.label}</span>
				</button>
			{/each}
		</div>
	</BottomSheet>

	<!-- Theme Picker -->
	<BottomSheet
		isOpen={themeMenuOpen}
		title={t.ui.menus.theme}
		onClose={() => (themeMenuOpen = false)}
	>
		<p class="mb-4 px-1 text-center text-xs text-white/40">
			{t.ui.themes.description ||
				'Customize your visual experience. This does not affect the liturgical date.'}
		</p>
		<div class="grid grid-cols-4 gap-3">
			{#each [{ c: 'green', l: t.ui.themes.ordinary, hex: '#10b981', emoji: '🌿' }, { c: 'purple', l: t.ui.themes.advent_lent, hex: '#8b5cf6', emoji: '✝️' }, { c: 'white', l: t.ui.themes.christmas_easter, hex: '#e2e8f0', emoji: '🕊️' }, { c: 'red', l: t.ui.themes.pentecost, hex: '#ef4444', emoji: '🔥' }, { c: 'rose', l: t.ui.themes.gaudete, hex: '#e11d48', emoji: '🌸' }, { c: 'gold', l: t.ui.themes.gold, hex: '#f59e0b', emoji: '✨' }, { c: 'silver', l: t.ui.themes.silver, hex: '#94a3b8', emoji: '🩶' }, { c: 'black', l: t.ui.themes.requiem, hex: '#404040', emoji: '🕯️' }] as item}
				<button
					class="relative flex aspect-square flex-col items-center justify-center overflow-hidden rounded-[24px] border border-white/10 p-2 shadow-lg transition-transform active:scale-95"
					style="background-color: {item.hex}CC;"
					onclick={() => handleThemeSelect(item.c as LiturgicalColor)}
				>
					<!-- Centered Large Emoji -->
					<div
						class="absolute inset-0 flex items-center justify-center pb-4 text-4xl drop-shadow-sm filter"
					>
						{item.emoji}
					</div>
					<!-- Text at Bottom, over emoji -->
					<div class="absolute inset-x-0 bottom-2 flex justify-center">
						<span
							class="text-center text-[8px] leading-tight font-bold tracking-wider text-white uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
						>
							{@html formatThemeLabel(item.l)}
						</span>
					</div>
				</button>
			{/each}
		</div>
	</BottomSheet>

	<!-- Mystery Select -->
	<BottomSheet
		isOpen={mysteryMenuOpen}
		title={t.ui.menus.mystery}
		onClose={() => (mysteryMenuOpen = false)}
	>
		<div class="flex flex-col gap-2">
			{#each ['joyful', 'luminous', 'sorrowful', 'glorious'] as m}
				<button
					class="flex w-full items-center rounded-[32px] bg-white/5 p-4 text-left text-lg font-medium capitalize transition-colors hover:bg-white/10"
					onclick={() => {
						mysteryMenuOpen = false;
						initiatePrayer(m);
					}}
				>
					<span class="mr-3 text-2xl">{mysteryEmojis[m]}</span>
					{t.mysteries[m].name}
				</button>
			{/each}
		</div>
	</BottomSheet>

	<!-- Mode Select -->
	<BottomSheet isOpen={modeMenuOpen} title={t.ui.menus.mode} onClose={() => (modeMenuOpen = false)}>
		<div class="flex flex-col gap-4">
			<button
				class="group flex w-full items-start gap-4 rounded-[32px] bg-white/5 p-4 text-left transition-colors hover:bg-white/10"
				onclick={() => selectMode('digital')}
			>
				<div class="text-3xl grayscale transition-all group-hover:grayscale-0">📱</div>
				<div>
					<div class="font-bold text-white">{t.ui.modes.digital.title}</div>
					<div class="text-sm text-white/60">{t.ui.modes.digital.desc}</div>
				</div>
			</button>
			<button
				class="group flex w-full items-start gap-4 rounded-[32px] bg-white/5 p-4 text-left transition-colors hover:bg-white/10"
				onclick={() => selectMode('physical')}
			>
				<div class="text-3xl grayscale transition-all group-hover:grayscale-0">📿</div>
				<div>
					<div class="font-bold text-white">{t.ui.modes.physical.title}</div>
					<div class="text-sm text-white/60">{t.ui.modes.physical.desc}</div>
				</div>
			</button>
		</div>
	</BottomSheet>
</div>

<style>
</style>
