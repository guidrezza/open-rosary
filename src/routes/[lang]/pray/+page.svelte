<script lang="ts">
	import { page } from '$app/stores';
	import { getLocale } from '$lib/i18n';
	import { rosary } from '$lib/stores';
	import type { RosarySection, Mystery } from '$lib/types';
	import GlassPanel from '$lib/components/GlassPanel.svelte';
	import PrayerModal from '$lib/components/PrayerModal.svelte';
	import MysteryImage from '$lib/components/MysteryImage.svelte';
    import SectionMenu from '$lib/components/SectionMenu.svelte';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { onMount, tick } from 'svelte';
    import { fade } from 'svelte/transition';
    import { browser } from '$app/environment';

	let lang = $derived($page.params.lang);
	let t = $derived(getLocale(lang));

	// Initialize state
	let currentSection = $state<RosarySection>('intro');
    // We no longer track 'stepIndex' for navigation purposes, only for visual or modal context if needed.
    // Actually, we show all steps at once now.
	
	// Get mystery from query param (safe for prerender)
	let mysteryId = $derived(browser ? $page.url.searchParams.get('mystery') || 'joyful' : 'joyful');
	let mystery = $derived(t.mysteries[mysteryId] || t.mysteries['joyful']);

	// Computed Steps for current section
	function getStepsForSection(sec: RosarySection, mys: Mystery) {
		if (sec === 'intro') {
			return [
				{ prayerId: 'sign_of_cross', label: 'S' },
				{ prayerId: 'creed', label: 'C' },
				{ prayerId: 'our_father', label: 'P' },
				{ prayerId: 'hail_mary', label: 'A' },
				{ prayerId: 'hail_mary', label: 'A' },
				{ prayerId: 'hail_mary', label: 'A' },
				{ prayerId: 'glory_be', label: 'G' },
                { prayerId: 'personal_intentions', label: 'V' }
			];
		} else if (sec === 'conclusion') {
			return [
				{ prayerId: 'hail_holy_queen', label: 'R' },
				{ prayerId: 'closing_prayer', label: 'O' },
				{ prayerId: 'sign_of_cross', label: 'S' }
			];
		} else {
			// Decade 1-5
			const decadeNum = parseInt(sec.split('-')[1]);
			const passage = mys.passages[decadeNum - 1];
			
			return [
				{ prayerId: 'announce', label: 'M', passage }, 
				{ prayerId: 'our_father', label: 'P' },
				...Array(10).fill({ prayerId: 'hail_mary', label: 'A' }),
				{ prayerId: 'glory_be', label: 'G' },
				{ prayerId: 'fatima', label: 'J' }
			];
		}
	}

	let steps = $derived(getStepsForSection(currentSection, mystery));
    
    // Header Logic
    let exitState = $state(false);
    let sectionMenuOpen = $state(false);

    function handleMysteryClick() {
        if (!exitState) {
            exitState = true;
            setTimeout(() => exitState = false, 3000); // Reset after 3s if not clicked
        } else {
            goto(`${base}/`);
        }
    }

    // Navigation
    function goToNextSection() {
        const order: RosarySection[] = ['intro', 'decade-1', 'decade-2', 'decade-3', 'decade-4', 'decade-5', 'conclusion'];
        const idx = order.indexOf(currentSection);
        if (idx < order.length - 1) {
            currentSection = order[idx + 1];
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            // Finished
            goto(`${base}/${lang}`);
        }
    }

    function goToPrevSection() {
        const order: RosarySection[] = ['intro', 'decade-1', 'decade-2', 'decade-3', 'decade-4', 'decade-5', 'conclusion'];
        const idx = order.indexOf(currentSection);
        if (idx > 0) {
            currentSection = order[idx - 1];
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    // Modal Logic
    let modalOpen = $state(false);
    let modalContent = $state({ title: '', content: '' });

    function openPrayer(step: any) {
        if (step.prayerId === 'announce') {
            const decadeNum = parseInt(currentSection.split('-')[1]);
             modalContent = {
                title: `${mystery.name} - ${decadeNum}`,
                content: step.passage || ''
            };
        } else {
            const prayer = t.prayers[step.prayerId];
            modalContent = {
                title: prayer.title,
                content: prayer.content
            };
        }
        modalOpen = true;
    }
    
    // Resolve Text for UI
    let sectionTitle = $derived.by(() => {
        if (currentSection === 'intro') return 'Introduction';
        if (currentSection === 'conclusion') return 'Conclusion';
        const num = currentSection.split('-')[1];
        // Simple manual mapping for 1-5 to ordinals if needed, or just "Decade X"
        const ordinals = ['1st', '2nd', '3rd', '4th', '5th'];
        return `${ordinals[parseInt(num) - 1]} Decade`;
    });

    let mysteryMessage = $derived.by(() => {
        if (currentSection.startsWith('decade')) {
             const decadeNum = parseInt(currentSection.split('-')[1]);
             // Passage format: "Title: 'Quote' (Ref)"
             // We want to split title and quote if possible, but for now just showing it.
             // User said: "Mystery messages are the title and description... like for example: 'The Annunciation: ...'"
             // We can just display the passage string as is, it contains both.
             return mystery.passages[decadeNum - 1];
        }
        return '';
    });

</script>

<div class="min-h-screen bg-black text-white flex flex-col relative pb-32">
    <!-- Header -->
    <header class="sticky top-0 z-30 p-4">
        <GlassPanel class="flex justify-between items-center py-3 px-4">
             <button 
                class="text-sm font-medium transition-colors duration-200 {exitState ? 'text-red-400 font-bold' : 'text-white/60'}"
                onclick={handleMysteryClick}
             >
                {exitState ? 'EXIT?' : mystery.name}
             </button>
             
             <button 
                class="text-white font-bold hover:text-white/80 transition-colors"
                onclick={() => sectionMenuOpen = true}
             >
                {sectionTitle} ▾
             </button>
        </GlassPanel>
    </header>

    <!-- Main Content -->
    <main class="flex-1 px-4 flex flex-col gap-6 w-full max-w-lg mx-auto">
        <!-- Mystery Image (Smaller) -->
        <div class="w-1/2 mx-auto aspect-square max-w-[200px]">
             <MysteryImage />
        </div>
        
        <!-- Mystery Message (Decades only) -->
        {#if mysteryMessage}
            <div class="text-center px-2">
                <p class="text-white/90 italic text-sm leading-relaxed">{mysteryMessage}</p>
            </div>
        {/if}

        <!-- Step Counter / Beads -->
        <!-- Split by 7s using grid/flex wrap logic -->
        <div class="w-full px-2">
            <div class="flex flex-wrap justify-center gap-1.5">
               {#each steps as step, i}
                    <!-- Force line break every 7 items? Flex wrap handles it naturally if width is constrained, 
                         but to enforce strictly 7 per line we might need a grid or specific container width. 
                         Let's try a grid with 7 columns. -->
                {/each}
            </div>
             <!-- Better approach: Grid with centered content, max 7 cols -->
             <div class="grid grid-cols-7 gap-y-2 gap-x-1 justify-items-center max-w-[280px] mx-auto">
                {#each steps as step, i}
                     <div class="w-8 h-8 rounded-full bg-white/10 text-white/40 flex items-center justify-center text-xs font-bold border border-white/5">
                        {step.label}
                     </div>
                {/each}
             </div>
        </div>
        
        <!-- Prayer List -->
        <div class="flex-1 flex flex-col gap-2 mt-2">
            {#each steps as step, i}
                 <button 
                    class="w-full flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 active:scale-[0.98] transition-all border border-white/5 text-left group"
                    onclick={() => openPrayer(step)}
                >
                    <div class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold text-white/70 group-hover:bg-white/20 group-hover:text-white transition-colors">
                        {step.label}
                    </div>
                    <div class="flex-1">
                        {#if step.prayerId === 'announce'}
                            <span class="font-bold text-white block">Announce Mystery</span>
                        {:else}
                             <span class="font-medium text-white/80 group-hover:text-white transition-colors">
                                {t.prayers[step.prayerId].title}
                             </span>
                        {/if}
                    </div>
                    <div class="text-white/20 text-lg">›</div>
                 </button>
            {/each}
        </div>
    </main>

    <!-- Navigation Controls -->
    <div class="fixed bottom-0 left-0 right-0 p-6 z-40 bg-gradient-to-t from-black via-black/95 to-transparent pt-12 flex justify-between max-w-lg mx-auto w-full">
        <button 
           class="h-14 px-6 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium backdrop-blur-md border border-white/10 transition-all flex items-center gap-2"
           onclick={goToPrevSection}
           disabled={currentSection === 'intro'}
           title="Previous Section"
        >
           <span>←</span>
           <span class="text-sm uppercase tracking-wider">Back</span>
        </button>

        <button 
           class="h-14 px-8 rounded-full bg-white text-black font-bold hover:scale-105 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
           onclick={goToNextSection}
           title="Next Section"
        >
           <span class="text-sm uppercase tracking-wider">Next</span>
           <span>→</span>
        </button>
    </div>

    <!-- Modals -->
    <PrayerModal 
        isOpen={modalOpen} 
        title={modalContent.title} 
        content={modalContent.content} 
        onClose={() => modalOpen = false} 
    />
    
    <SectionMenu
        isOpen={sectionMenuOpen}
        {currentSection}
        onSelect={(sec) => {
            currentSection = sec;
            sectionMenuOpen = false;
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onClose={() => sectionMenuOpen = false}
    />
</div>
