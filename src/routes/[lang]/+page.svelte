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
    let selectedMysteryForMode = $state(recommendedMystery); // Track which mystery triggered mode selection

    function changeTheme(color: LiturgicalColor, seasonName: string) {
        const palette = PALETTES[color];
        rosary.update(s => ({
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
        'en': '🇺🇸',
        'en-us': '🇺🇸',
        'pt': '🇧🇷',
        'pt-br': '🇧🇷'
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

<div class="min-h-screen flex flex-col items-center justify-center p-6 relative z-10 overflow-hidden">
    <!-- Lang Switcher (Top Right) -->
    <div class="absolute top-6 right-6 z-20">
         <button 
            class="text-2xl hover:scale-110 transition-transform drop-shadow-md"
            onclick={() => langMenuOpen = true}
         >
            {currentFlag}
         </button>
    </div>

    <!-- Header -->
    <div class="text-center space-y-2 mb-12 animate-fade-in-down">
        <h2 class="text-sm font-bold tracking-widest text-white/60">{dateString}</h2>
        <h1 
            class="text-2xl font-bold tracking-wider uppercase drop-shadow-sm"
            style="color: var(--text-highlight, white);"
        >
            {seasonString}
        </h1>
    </div>

    <!-- Main Content -->
     <div class="w-full max-w-sm flex flex-col items-center gap-6 mb-8 animate-fade-in">
        <div class="text-xs uppercase tracking-widest text-white/50">Recommended Mystery</div>
        
        <h2 class="text-3xl font-bold text-center leading-tight drop-shadow-md">
            {mysteryName}
        </h2>
        
        <button 
            class="w-full max-w-sm py-4 rounded-xl font-medium text-white/80 transition-all active:scale-[0.98] border shadow-lg backdrop-blur-md"
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
        class="w-full max-w-sm py-4 rounded-xl font-medium text-white/80 transition-all active:scale-[0.98] mb-12 border shadow-lg backdrop-blur-md"
        style="
            background-color: var(--glass-bg, rgba(255,255,255,0.1));
            border-color: var(--glass-border, rgba(255,255,255,0.2));
        "
        onclick={() => mysteryMenuOpen = true}
    >
        Pick a Different Mystery
    </button>

    <button 
        class="text-xs text-white/30 hover:text-white/60 transition-colors uppercase tracking-widest"
        onclick={() => themeMenuOpen = true}
    >
        Change theme
    </button>
    
    <!-- Footer -->
    <div class="absolute bottom-4 text-[10px] text-white/20">
        made by <a href="https://guidrezza.com" target="_blank" rel="noopener noreferrer" class="hover:text-white/40 transition-colors">guidrezza</a>
    </div>
    
    <!-- Modals -->
    <!-- Language Menu -->
    <BottomSheet isOpen={langMenuOpen} title="Select Language" onClose={() => langMenuOpen = false}>
        <div class="flex flex-col gap-2">
             <button class="w-full text-left p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors flex items-center gap-3" onclick={() => switchLang('en-us')}>
                <span class="text-2xl">🇺🇸</span> <span class="text-lg font-medium">English (US)</span>
             </button>
             <!-- Placeholder for other langs -->
        </div>
    </BottomSheet>

    <!-- Mystery Menu -->
    <BottomSheet isOpen={mysteryMenuOpen} title="Select Mystery" onClose={() => mysteryMenuOpen = false}>
        <div class="flex flex-col gap-2">
            {#each ['joyful', 'luminous', 'sorrowful', 'glorious'] as m}
                <button 
                    class="w-full text-left p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors capitalize text-lg font-medium"
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
    <BottomSheet isOpen={modeMenuOpen} title="Select Mode" onClose={() => modeMenuOpen = false}>
        <div class="flex flex-col gap-4">
             <button 
                class="w-full text-left p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors flex items-start gap-4 group"
                onclick={() => selectMode('digital')}
            >
                <div class="text-3xl grayscale group-hover:grayscale-0 transition-all">📱</div>
                <div>
                    <div class="font-bold text-lg text-white">Digital Beads</div>
                    <div class="text-sm text-white/60">Track your progress on screen using the app.</div>
                </div>
             </button>

             <button 
                class="w-full text-left p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors flex items-start gap-4 group"
                onclick={() => selectMode('physical')}
            >
                <div class="text-3xl grayscale group-hover:grayscale-0 transition-all">📿</div>
                <div>
                    <div class="font-bold text-lg text-white">Physical Beads</div>
                    <div class="text-sm text-white/60">I have my own Rosary. Just show me the prayers.</div>
                </div>
             </button>
        </div>
    </BottomSheet>

    <!-- Theme Menu -->
    <BottomSheet isOpen={themeMenuOpen} title="Select Theme" onClose={() => themeMenuOpen = false}>
        <div class="grid grid-cols-2 gap-3">
             <button class="p-4 rounded-xl bg-[#10b981]/80 border border-white/10 text-white font-medium shadow-lg" onclick={() => changeTheme('green', 'Ordinary Time')}>Ordinary Time</button>
             <button class="p-4 rounded-xl bg-[#f3f4f6]/50 border border-white/10 text-white font-medium shadow-lg" onclick={() => changeTheme('white', 'Christmas / Easter')}>Christmas / Easter</button>
             <button class="p-4 rounded-xl bg-[#8b5cf6]/80 border border-white/10 text-white font-medium shadow-lg" onclick={() => changeTheme('purple', 'Advent / Lent')}>Advent / Lent</button>
             <button class="p-4 rounded-xl bg-[#ef4444]/80 border border-white/10 text-white font-medium shadow-lg" onclick={() => changeTheme('red', 'Pentecost')}>Pentecost</button>
             <button class="p-4 rounded-xl bg-[#f43f5e]/80 border border-white/10 text-white font-medium shadow-lg" onclick={() => changeTheme('rose', 'Gaudete')}>Gaudete</button>
             <button class="p-4 rounded-xl bg-[#2e2e2e]/80 border border-white/10 text-white font-medium shadow-lg" onclick={() => changeTheme('black', 'Requiem')}>Requiem</button>
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
        from { opacity: 0; transform: translateY(-20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
</style>
