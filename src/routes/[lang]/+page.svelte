<script lang="ts">
	import { page } from '$app/stores';
	import { getLocale } from '$lib/i18n';
	import { rosary } from '$lib/stores';
	import type { Weekday } from '$lib/types';
	import GlassPanel from '$lib/components/GlassPanel.svelte';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';

	// Get language from route params
	let lang = $derived($page.params.lang);
	let t = $derived(getLocale(lang));

	// Determine today's mystery
	const today = new Date();
	const dayOfWeek = today.getDay() as Weekday;
	
	function getMysteryForDay(day: Weekday) {
		const mysteries = Object.values(t.mysteries);
		return mysteries.find(m => m.days.includes(day)) || mysteries[0];
	}

	let recommendedMystery = $derived(getMysteryForDay(dayOfWeek));

	// Mode selection handling
	let showModeSelection = $state(false);

	function startPraying(mode: 'digital' | 'physical') {
		rosary.setMode(mode);
		// Navigate to pray page with the recommended mystery (can be changed later if we add query param or store)
		// For now just go to pray page
		goto(`${base}/${lang}/pray?mystery=${recommendedMystery.id}`);
	}

	const flags: Record<string, string> = {
		'en': '🇺🇸',
		'en-us': '🇺🇸',
		'pt': '🇧🇷',
		'pt-br': '🇧🇷'
	};

	let currentFlag = $derived(flags[lang.toLowerCase()] || '🌐');
    let showLangMenu = $state(false);

    function switchLang(newLang: string) {
        goto(`${base}/${newLang}`, { replaceState: true });
        showLangMenu = false;
    }
</script>

<svelte:head>
	<title>{t.seo.title}</title>
	<meta name="description" content={t.seo.description} />
</svelte:head>

<div class="min-h-screen flex flex-col items-center justify-between p-6 bg-black relative overflow-hidden">
	<!-- Background Elements -->
	<div class="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/20 blur-[100px] rounded-full pointer-events-none"></div>
	<div class="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-900/20 blur-[100px] rounded-full pointer-events-none"></div>

	<!-- Header -->
	<header class="w-full flex justify-between items-center z-10">
		<h1 class="text-xl font-light tracking-wide text-white/80">Open Rosary</h1>
		
        <div class="relative">
            <button class="text-2xl hover:scale-110 transition-transform" onclick={() => showLangMenu = !showLangMenu}>
                {currentFlag}
            </button>
            {#if showLangMenu}
             <div class="absolute right-0 top-10 z-50">
                <GlassPanel class="p-2 space-y-2 flex flex-col min-w-[100px]">
                     <button class="flex items-center gap-2 hover:bg-white/10 p-2 rounded transition-colors w-full text-left" onclick={() => switchLang('en-us')}>
                        <span>🇺🇸</span> English
                     </button>
                     <button class="flex items-center gap-2 hover:bg-white/10 p-2 rounded transition-colors w-full text-left" onclick={() => switchLang('pt-br')}>
                        <span>🇧🇷</span> Português
                     </button>
                </GlassPanel>
             </div>
            {/if}
        </div>
	</header>

	<!-- Hero -->
	<main class="flex-1 flex flex-col items-center justify-center w-full max-w-md gap-8 z-10">
		<div class="text-center space-y-2">
			<p class="text-white/60 text-sm uppercase tracking-widest">{today.toLocaleDateString(lang, { weekday: 'long', month: 'long', day: 'numeric' })}</p>
			<h2 class="text-3xl font-bold text-white leading-tight">
				{t.ui.start_button} <br />
				<span class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
					{recommendedMystery.name}
				</span>
			</h2>
		</div>

		<button 
			class="w-full py-4 px-6 rounded-full bg-white text-black font-semibold text-lg shadow-lg shadow-white/10 hover:scale-[1.02] active:scale-[0.98] transition-all"
			onclick={() => showModeSelection = true}
		>
			{t.ui.start_button}
		</button>
		
		<button class="text-white/50 text-sm hover:text-white transition-colors underline decoration-white/30 underline-offset-4">
			{t.ui.pick_mystery}
		</button>
	</main>

	<!-- Footer -->
	<footer class="w-full text-center py-4 z-10">
		<p class="text-white/30 text-xs">
			{t.ui.made_by} <a href="https://guidrezza.com" class="hover:text-white transition-colors">guidrezza.com</a>
		</p>
	</footer>

	<!-- Mode Selection Bottom Sheet -->
	{#if showModeSelection}
		<div class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end justify-center" onclick={() => showModeSelection = false}>
			<div class="w-full max-w-lg p-4" onclick={(e) => e.stopPropagation()}>
				<GlassPanel class="space-y-4">
					<div class="w-12 h-1 bg-white/20 rounded-full mx-auto mb-4"></div>
					<h3 class="text-center text-white text-lg font-medium mb-4">Choose Mode</h3>
					
					<button 
						class="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors text-left group"
						onclick={() => startPraying('digital')}
					>
						<div class="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/30 transition-colors">
							📱
						</div>
						<div>
							<div class="font-semibold text-white">{t.ui.modes.digital.title}</div>
							<div class="text-sm text-white/50">{t.ui.modes.digital.desc}</div>
						</div>
					</button>

					<div class="h-px w-full bg-white/10"></div>

					<button 
						class="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors text-left group"
						onclick={() => startPraying('physical')}
					>
						<div class="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/30 transition-colors">
							📿
						</div>
						<div>
							<div class="font-semibold text-white">{t.ui.modes.physical.title}</div>
							<div class="text-sm text-white/50">{t.ui.modes.physical.desc}</div>
						</div>
					</button>
				</GlassPanel>
			</div>
		</div>
	{/if}
</div>
