<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { rosary } from '$lib/stores';
	import type { LiturgicalColor } from '$lib/liturgical';
	import GlassPanel from '$lib/components/GlassPanel.svelte';
	import BottomSheet from '$lib/components/BottomSheet.svelte';
	import { getLocale } from '$lib/i18n';

	// Get language from route params
	let lang = $derived($page.params.lang);
	let t = $derived(getLocale(lang));

	// State
	let currentDate = $state(new Date());
	let timeInterval: any;

	onMount(() => {
		// Initialize Store (Liturgical Calc + Persistence)
		rosary.init();

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
	let theme = $derived($rosary.theme);
	let mode = $derived($rosary.mode);

	// Formatting Date: "MONDAY, OCTOBER 24"
	let dateString = $derived.by(() => {
		const d = currentDate;
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
	let selectedMysteryForMode = $state(recommendedMystery);

	// Helper Actions
	function handleThemeSelect(color: LiturgicalColor) {
		rosary.setTheme(color);
		themeMenuOpen = false;
	}

	function switchLang(newLang: string) {
		goto(`${base}/${newLang}`, { replaceState: true });
		langMenuOpen = false;
	}

	function initiatePrayer(mysteryKey: string) {
		selectedMysteryForMode = mysteryKey;
		modeMenuOpen = true;
	}

	function selectMode(m: 'digital' | 'physical') {
		rosary.setMode(m);
		modeMenuOpen = false;
		goto(`${base}/${lang}/pray?mystery=${selectedMysteryForMode}`);
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
</script>

<!-- Dynamic Background Orb -->
<div class="pointer-events-none fixed inset-0 z-0 overflow-hidden">
	<div
		class="absolute top-[-20%] left-[-20%] h-[140%] w-[140%] rounded-full opacity-40 blur-[100px] transition-colors duration-1000 ease-in-out"
		style="background: radial-gradient(circle at center, {theme.cssVars[
			'--theme-color'
		]}, transparent 70%);"
	></div>
</div>

<div class="relative z-10 flex min-h-screen flex-col items-center p-6">
	<!-- Top Bar -->
	<div class="mb-8 flex w-full justify-end">
		<button
			class="text-2xl drop-shadow-md transition-transform hover:scale-110 active:scale-95"
			onclick={() => (langMenuOpen = true)}
			title={t.ui.menus.language}
		>
			{currentFlag}
		</button>
	</div>

	<!-- Hero Section -->
	<header class="mb-12 flex flex-1 flex-col items-center justify-center space-y-4 text-center">
		<!-- Date -->
		<h2 class="text-sm font-bold tracking-[0.2em] text-white/60 uppercase">{dateString}</h2>

		<!-- Liturgical Season (Text stays accurate even if color changed) -->
		<!-- Use a text-gradient or glow based on theme color -->
		<h1
			class="text-4xl leading-tight font-black tracking-wider uppercase drop-shadow-lg md:text-5xl"
		>
			<!-- If the current Season is "Ordinary Time", maybe split lines. -->
			{theme.season}
		</h1>

		<!-- Theme Indicator / Picker Trigger -->
		<button
			class="mt-4 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 transition-colors hover:bg-white/10"
			onclick={() => (themeMenuOpen = true)}
		>
			<div
				class="h-3 w-3 rounded-full shadow-[0_0_8px_currentColor]"
				style="background-color: {theme.cssVars['--text-highlight']}; color: {theme.cssVars[
					'--text-highlight'
				]};"
			></div>
			<span class="text-[10px] tracking-widest text-white/50 uppercase">{t.ui.change_theme}</span>
		</button>
	</header>

	<!-- Main Actions -->
	<div class="animate-fade-in-up mb-12 w-full max-w-sm space-y-4">
		<!-- Primary Action: Pray Today's Mystery -->
		<div class="group relative">
			<div
				class="absolute inset-0 rounded-2xl bg-white/20 opacity-0 blur-xl transition-opacity group-hover:opacity-30"
			></div>
			<GlassPanel
				class="relative flex flex-col items-center overflow-hidden !rounded-2xl border-white/20 p-1"
			>
				<button
					class="flex w-full flex-col items-center rounded-xl px-6 py-8 text-center transition-colors hover:bg-white/5"
					onclick={() => initiatePrayer(recommendedMystery)}
				>
					<span class="mb-2 text-xs tracking-widest text-white/50 uppercase"
						>{t.ui.recommended_mystery}</span
					>
					<h2 class="mb-6 text-3xl font-bold text-white drop-shadow-md">{mysteryName}</h2>

					<div
						class="transform rounded-full bg-white px-8 py-3 text-sm font-bold text-black shadow-lg transition-transform group-hover:scale-105"
					>
						{t.ui.pray_button_prefix}
					</div>
				</button>
			</GlassPanel>
		</div>

		<!-- Secondary: Manual Select -->
		<button
			class="w-full rounded-xl border border-white/10 bg-white/5 py-4 font-medium text-white/70 backdrop-blur-md transition-all hover:bg-white/10 hover:text-white active:scale-[0.98]"
			onclick={() => (mysteryMenuOpen = true)}
		>
			{t.ui.pick_mystery}
		</button>
	</div>

	<!-- Footer -->
	<footer class="mt-auto py-4 text-center">
		<p class="text-[10px] tracking-wider text-white/20">OPEN ROSARY • {new Date().getFullYear()}</p>
	</footer>

	<!-- Bottom Sheets -->

	<!-- Language -->
	<BottomSheet
		isOpen={langMenuOpen}
		title={t.ui.menus.language}
		onClose={() => (langMenuOpen = false)}
	>
		<div class="flex flex-col gap-2">
			{#each Object.entries( { 'en-us': 'English (US)', 'es-mx': 'Español (MX)', 'la-va': 'Lingua Latina', 'pt-br': 'Português (BR)' } ) as [code, label]}
				<button
					class="flex w-full items-center rounded-xl bg-white/5 p-4 text-left text-lg font-medium transition-colors hover:bg-white/10"
					onclick={() => switchLang(code)}
				>
					<span class="mr-3 text-2xl">{flags[code]}</span>
					<span class="text-lg font-medium">{label}</span>
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
		<div class="grid grid-cols-3 gap-3">
			{#each [{ c: 'green', l: t.ui.themes.ordinary, hex: '#10b981' }, { c: 'purple', l: t.ui.themes.advent_lent, hex: '#8b5cf6' }, { c: 'white', l: t.ui.themes.christmas_easter, hex: '#f3f4f6' }, { c: 'red', l: t.ui.themes.pentecost, hex: '#ef4444' }, { c: 'rose', l: t.ui.themes.gaudete, hex: '#f43f5e' }, { c: 'black', l: t.ui.themes.requiem, hex: '#2e2e2e' }] as item}
				<button
					class="flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 p-2 shadow-lg transition-transform active:scale-95"
					style="background-color: {item.hex}CC;"
					onclick={() => handleThemeSelect(item.c as LiturgicalColor)}
				>
					<div class="w-full flex-1"></div>
					<!-- spacer -->
					<span
						class="text-center text-[10px] leading-tight font-bold tracking-wider text-white uppercase drop-shadow-md"
						>{item.l}</span
					>
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
					class="flex w-full items-center rounded-xl bg-white/5 p-4 text-left text-lg font-medium capitalize transition-colors hover:bg-white/10"
					onclick={() => {
						mysteryMenuOpen = false;
						initiatePrayer(m);
					}}
				>
					{t.mysteries[m].name}
				</button>
			{/each}
		</div>
	</BottomSheet>

	<!-- Mode Select -->
	<BottomSheet isOpen={modeMenuOpen} title={t.ui.menus.mode} onClose={() => (modeMenuOpen = false)}>
		<div class="flex flex-col gap-4">
			<button
				class="group flex w-full items-start gap-4 rounded-xl bg-white/5 p-4 text-left transition-colors hover:bg-white/10"
				onclick={() => selectMode('digital')}
			>
				<div class="text-3xl grayscale transition-all group-hover:grayscale-0">📱</div>
				<div>
					<div class="font-bold text-white">{t.ui.modes.digital.title}</div>
					<div class="text-sm text-white/60">{t.ui.modes.digital.desc}</div>
				</div>
			</button>
			<button
				class="group flex w-full items-start gap-4 rounded-xl bg-white/5 p-4 text-left transition-colors hover:bg-white/10"
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
	.animate-fade-in-up {
		animation: fadeInUp 0.8s ease-out;
	}
	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
