<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { getLiturgicalTheme, PALETTES } from '$lib/liturgical';
	import type { LiturgicalColor } from '$lib/liturgical';
	import { rosary } from '$lib/stores';
	import GlassPanel from '$lib/components/GlassPanel.svelte';
	import BottomSheet from '$lib/components/BottomSheet.svelte';

	// Get language from route params
	let lang = $derived($page.params.lang);

	// Initial Theme Logic (Client-side mainly for Date)
	// Initial Theme Logic (Client-side mainly for Date)
	let currentDate = $state(new Date());

	onMount(() => {
		// Ensure we rely on browser time on mount to avoid hydration mismatch if SSR differs
		currentDate = new Date();
	});

	let initialTheme = getLiturgicalTheme(currentDate);

	// We rely on the store 'theme' if manual override happens.
	// If store theme not set or default, we might update it?
	// Ideally layout handles global theme state, but specific page logic here.
	// Let's use the local theme derived from store if present, else calc.
	let theme = $derived($rosary.theme?.season ? $rosary.theme : initialTheme);

	// Formatting Date: "<WEEKDAY>, <MONTH>, <2-LETTER YEAR>"
	let dateString = $derived.by(() => {
		const d = currentDate;
		const weekday = d.toLocaleDateString('en-US', { weekday: 'long' }).toUpperCase();
		const month = d.toLocaleDateString('en-US', { month: 'long' }).toUpperCase();
		const year = d.getFullYear().toString().slice(-2);
		return `${weekday}, ${month}, ${year}`;
	});

	let seasonString = $derived(theme.season.toUpperCase());

	// Mystery Logic
	function getMysteryForDay(date: Date): string {
		const day = date.getDay(); // 0=Sun
		if (day === 1 || day === 6) return 'joyful';
		if (day === 2 || day === 5) return 'sorrowful';
		if (day === 4) return 'luminous';
		return 'glorious'; // 0, 3
	}

	let recommendedMystery = $derived(getMysteryForDay(currentDate));
	let mysteryName = $derived.by(() => {
		const names: Record<string, string> = {
			joyful: 'Joyful Mysteries',
			luminous: 'Luminous Mysteries',
			sorrowful: 'Sorrowful Mysteries',
			glorious: 'Glorious Mysteries'
		};
		return names[recommendedMystery];
	});

	// Menus
	let themeMenuOpen = $state(false);
	let mysteryMenuOpen = $state(false);
	let langMenuOpen = $state(false);
	let modeMenuOpen = $state(false);

	// Selection State
	let selectedMysteryForMode = $state(getMysteryForDay(currentDate)); // Track which mystery triggered mode selection

	function changeTheme(color: LiturgicalColor, seasonName: string) {
		const palette = PALETTES[color];
		rosary.update((s) => ({
			...s,
			theme: {
				color,
				season: seasonName,
				cssVars: palette
			}
		}));
		themeMenuOpen = false;
	}

	// Language
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

	function switchLang(newLang: string) {
		goto(`${base}/${newLang}`, { replaceState: true });
		langMenuOpen = false;
	}

	// Start Prayer Flow
	function initiatePrayer(mysteryKey: string) {
		selectedMysteryForMode = mysteryKey;
		modeMenuOpen = true;
	}

	function selectMode(mode: 'digital' | 'physical') {
		rosary.setMode(mode);
		modeMenuOpen = false;
		goto(`${base}/${lang}/pray?mystery=${selectedMysteryForMode}`);
	}
</script>

<div
	class="relative z-10 flex min-h-screen flex-col items-center justify-center overflow-hidden p-6"
>
	<!-- Lang Switcher (Top Right) -->
	<div class="absolute top-6 right-6 z-20">
		<button
			class="text-2xl drop-shadow-md transition-transform hover:scale-110"
			onclick={() => (langMenuOpen = true)}
		>
			{currentFlag}
		</button>
	</div>

	<!-- Header -->
	<div class="animate-fade-in-down mb-12 space-y-2 text-center">
		<h2 class="text-sm font-bold tracking-widest text-white/60">{dateString}</h2>
		<h1
			class="text-2xl font-bold tracking-wider uppercase drop-shadow-sm"
			style="color: var(--text-highlight, white);"
		>
			{seasonString}
		</h1>
	</div>

	<!-- Main Content -->
	<div class="animate-fade-in mb-8 flex w-full max-w-sm flex-col items-center gap-6">
		<div class="text-xs tracking-widest text-white/50 uppercase">Recommended Mystery</div>

		<h2 class="text-center text-3xl leading-tight font-bold drop-shadow-md">
			{mysteryName}
		</h2>

		<button
			class="w-full max-w-sm rounded-xl border py-4 font-medium text-white/80 shadow-lg backdrop-blur-md transition-all active:scale-[0.98]"
			style="
                background-color: var(--glass-bg, rgba(255,255,255,0.1));
                border-color: var(--glass-border, rgba(255,255,255,0.2));
            "
			onclick={() => initiatePrayer(recommendedMystery)}
		>
			Pray {mysteryName}
		</button>
	</div>

	<!-- Secondary Actions -->
	<button
		class="mb-12 w-full max-w-sm rounded-xl border py-4 font-medium text-white/80 shadow-lg backdrop-blur-md transition-all active:scale-[0.98]"
		style="
            background-color: var(--glass-bg, rgba(255,255,255,0.1));
            border-color: var(--glass-border, rgba(255,255,255,0.2));
        "
		onclick={() => (mysteryMenuOpen = true)}
	>
		Pick a Different Mystery
	</button>

	<button
		class="text-xs tracking-widest text-white/30 uppercase transition-colors hover:text-white/60"
		onclick={() => (themeMenuOpen = true)}
	>
		Change theme
	</button>

	<!-- Footer -->
	<div class="absolute bottom-4 text-[10px] text-white/20">
		made by <a
			href="https://guidrezza.com"
			target="_blank"
			rel="noopener noreferrer"
			class="transition-colors hover:text-white/40">guidrezza</a
		>
	</div>

	<!-- Modals -->
	<!-- Language Menu -->
	<BottomSheet isOpen={langMenuOpen} title="Select Language" onClose={() => (langMenuOpen = false)}>
		<div class="flex flex-col gap-2">
			<button
				class="flex w-full items-center gap-3 rounded-xl bg-white/5 p-4 text-left transition-colors hover:bg-white/10"
				onclick={() => switchLang('en-us')}
			>
				<span class="text-2xl">🇺🇸</span> <span class="text-lg font-medium">English (US)</span>
			</button>
			<button
				class="flex w-full items-center gap-3 rounded-xl bg-white/5 p-4 text-left transition-colors hover:bg-white/10"
				onclick={() => switchLang('es-mx')}
			>
				<span class="text-2xl">🇲🇽</span> <span class="text-lg font-medium">Español (MX)</span>
			</button>
			<button
				class="flex w-full items-center gap-3 rounded-xl bg-white/5 p-4 text-left transition-colors hover:bg-white/10"
				onclick={() => switchLang('la-va')}
			>
				<span class="text-2xl">🇻🇦</span>
				<span class="text-lg font-medium">Lingua Latina (Vatican)</span>
			</button>
			<button
				class="flex w-full items-center gap-3 rounded-xl bg-white/5 p-4 text-left transition-colors hover:bg-white/10"
				onclick={() => switchLang('pt-br')}
			>
				<span class="text-2xl">🇧🇷</span> <span class="text-lg font-medium">Português (BR)</span>
			</button>
		</div>
	</BottomSheet>

	<!-- Mystery Menu -->
	<BottomSheet
		isOpen={mysteryMenuOpen}
		title="Select Mystery"
		onClose={() => (mysteryMenuOpen = false)}
	>
		<div class="flex flex-col gap-2">
			{#each ['joyful', 'luminous', 'sorrowful', 'glorious'] as m}
				<button
					class="w-full rounded-xl bg-white/5 p-4 text-left text-lg font-medium capitalize transition-colors hover:bg-white/10"
					onclick={() => {
						mysteryMenuOpen = false;
						initiatePrayer(m);
					}}
				>
					{m} Mysteries
				</button>
			{/each}
		</div>
	</BottomSheet>

	<!-- Mode Menu -->
	<BottomSheet isOpen={modeMenuOpen} title="Select Mode" onClose={() => (modeMenuOpen = false)}>
		<div class="flex flex-col gap-4">
			<button
				class="group flex w-full items-start gap-4 rounded-xl bg-white/5 p-4 text-left transition-colors hover:bg-white/10"
				onclick={() => selectMode('digital')}
			>
				<div class="text-3xl grayscale transition-all group-hover:grayscale-0">📱</div>
				<div>
					<div class="text-lg font-bold text-white">Digital Beads</div>
					<div class="text-sm text-white/60">Track your progress on screen using the app.</div>
				</div>
			</button>

			<button
				class="group flex w-full items-start gap-4 rounded-xl bg-white/5 p-4 text-left transition-colors hover:bg-white/10"
				onclick={() => selectMode('physical')}
			>
				<div class="text-3xl grayscale transition-all group-hover:grayscale-0">📿</div>
				<div>
					<div class="text-lg font-bold text-white">Physical Beads</div>
					<div class="text-sm text-white/60">I have my own Rosary. Just show me the prayers.</div>
				</div>
			</button>
		</div>
	</BottomSheet>

	<!-- Theme Menu -->
	<BottomSheet isOpen={themeMenuOpen} title="Select Theme" onClose={() => (themeMenuOpen = false)}>
		<div class="grid grid-cols-2 gap-3">
			<button
				class="rounded-xl border border-white/10 bg-[#10b981]/80 p-4 font-medium text-white shadow-lg"
				onclick={() => changeTheme('green', 'Ordinary Time')}>Ordinary Time</button
			>
			<button
				class="rounded-xl border border-white/10 bg-[#f3f4f6]/50 p-4 font-medium text-white shadow-lg"
				onclick={() => changeTheme('white', 'Christmas / Easter')}>Christmas / Easter</button
			>
			<button
				class="rounded-xl border border-white/10 bg-[#8b5cf6]/80 p-4 font-medium text-white shadow-lg"
				onclick={() => changeTheme('purple', 'Advent / Lent')}>Advent / Lent</button
			>
			<button
				class="rounded-xl border border-white/10 bg-[#ef4444]/80 p-4 font-medium text-white shadow-lg"
				onclick={() => changeTheme('red', 'Pentecost')}>Pentecost</button
			>
			<button
				class="rounded-xl border border-white/10 bg-[#f43f5e]/80 p-4 font-medium text-white shadow-lg"
				onclick={() => changeTheme('rose', 'Gaudete')}>Gaudete</button
			>
			<button
				class="rounded-xl border border-white/10 bg-[#2e2e2e]/80 p-4 font-medium text-white shadow-lg"
				onclick={() => changeTheme('black', 'Requiem')}>Requiem</button
			>
		</div>
	</BottomSheet>
</div>

<style>
	:global(body) {
		overflow: hidden; /* Global no-scroll per request */
	}
	.animate-fade-in-down {
		animation: fadeInDown 0.8s ease-out;
	}
	.animate-fade-in {
		animation: fadeIn 1s ease-out 0.2s backwards;
	}
	@keyframes fadeInDown {
		from {
			opacity: 0;
			transform: translateY(-20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
