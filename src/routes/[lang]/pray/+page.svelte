<script lang="ts">
	import { page } from '$app/stores';
	import { getLocale } from '$lib/i18n';
	import { rosary } from '$lib/stores';
	import type { RosarySection, Mystery } from '$lib/types';
	import GlassPanel from '$lib/components/GlassPanel.svelte';
	import PrayerModal from '$lib/components/PrayerModal.svelte';
	import MysteryImage from '$lib/components/MysteryImage.svelte';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { onMount, tick } from 'svelte';
    import { fade } from 'svelte/transition';
    import { browser } from '$app/environment';

	let lang = $derived($page.params.lang);
	let t = $derived(getLocale(lang));

	// Initialize state
	let currentSection = $state<RosarySection>('intro');
	let stepIndex = $state(0);
	
	// Get mystery from query param (safe for prerender)
	let mysteryId = $derived(browser ? $page.url.searchParams.get('mystery') || 'joyful' : 'joyful');
	let mystery = $derived(t.mysteries[mysteryId] || t.mysteries['joyful']);

	// Computed Steps for current section
	// Define step structure: { label: string, prayerId: string, count?: number }
	// We map the numbers to prayer IDs.
	
	function getStepsForSection(sec: RosarySection, mys: Mystery) {
		if (sec === 'intro') {
			return [
				{ prayerId: 'sign_of_cross', label: '1' },
				{ prayerId: 'creed', label: '2' },
				{ prayerId: 'our_father', label: '3' },
				{ prayerId: 'hail_mary', label: '4' },
				{ prayerId: 'hail_mary', label: '4' },
				{ prayerId: 'hail_mary', label: '4' },
				{ prayerId: 'glory_be', label: '5' }
			];
		} else if (sec === 'conclusion') {
			return [
				{ prayerId: 'hail_holy_queen', label: '7' },
				{ prayerId: 'closing_prayer', label: '8' },
				{ prayerId: 'sign_of_cross', label: '1' }
			];
		} else {
			// Decade 1-5
			const decadeNum = parseInt(sec.split('-')[1]);
			const passage = mys.passages[decadeNum - 1];
			
			return [
				{ prayerId: 'announce', label: '9', passage }, 
				{ prayerId: 'our_father', label: '3' },
				...Array(10).fill({ prayerId: 'hail_mary', label: '4' }),
				{ prayerId: 'glory_be', label: '5' },
				{ prayerId: 'fatima', label: '6' }
			];
		}
	}

	let steps = $derived(getStepsForSection(currentSection, mystery));
    let currentStep = $derived(steps[stepIndex]);
    
    // Auto-scroll logic if list gets long (simple version)
    
    // Navigation
    function next() {
        if (stepIndex < steps.length - 1) {
             stepIndex++;
        } else {
            // Move to next section
            goToNextSection();
        }
    }

    function back() {
        if (stepIndex > 0) {
            stepIndex--;
        } else {
             // Move to prev section (simple logic: just reset or go back logic if critical, but simplified: assume user stays or restarts)
             // Implementing "Back" across sections is complex, let's just stay at 0 or warn.
        }
    }

    function goToNextSection() {
        const order: RosarySection[] = ['intro', 'decade-1', 'decade-2', 'decade-3', 'decade-4', 'decade-5', 'conclusion'];
        const idx = order.indexOf(currentSection);
        if (idx < order.length - 1) {
            currentSection = order[idx + 1];
            stepIndex = 0;
             // Scroll to top or reset view
        } else {
            // Finished
            goto(`${base}/${lang}`);
        }
    }

    // Modal Logic
    let modalOpen = $state(false);
    let modalContent = $state({ title: '', content: '' });

    function openPrayer(prayerId: string, passage?: string) {
        if (prayerId === 'announce') {
            const decadeNum = parseInt(currentSection.split('-')[1]);
             modalContent = {
                title: `${mystery.name} - ${decadeNum}`,
                content: passage || ''
            };
        } else {
            const prayer = t.prayers[prayerId];
            modalContent = {
                title: prayer.title,
                content: prayer.content
            };
        }
        modalOpen = true;
    }
    
    // Handle physical mode skipping
    function handleNext() {
        if ($rosary.mode === 'physical') {
            // Skip directly to next section if it was a decade? 
            // The plan says: "Next ignores the numbers and skips directly to the next page/section."
            // But intro has multiple prayers. Does physical mode skip ALL intro prayers?
            // "Physical Beads" - "I have my own Rosary. Just show me the prayers."
            // Probably means show the text for the section, but don't force clicking 10 times for Hail Mary.
            // But if user clicks Next, they might want to move to next *Instruction*.
            // Wait, "Numbers are visible but static; no individual step highlighting."
            // "Next ignores the numbers and skips directly to the next page/section."
            // This implies: Showing Intro -> Click Next -> Decade 1 -> Click Next -> Decade 2...
            goToNextSection();
        } else {
            next();
        }
    }
    
    // Resolve Text for UI
    let sectionTitle = $derived.by(() => {
        if (currentSection === 'intro') return 'Introduction';
        if (currentSection === 'conclusion') return 'Conclusion';
        const num = currentSection.split('-')[1];
        return `${num}ª Decade`; // TODO: i18n this properly if needed, kept simple
    });

</script>

<div class="min-h-screen bg-black text-white flex flex-col relative pb-24">
    <!-- Header -->
    <header class="sticky top-0 z-30 p-4">
        <GlassPanel class="flex justify-between items-center py-3 px-4">
             <div class="text-sm font-medium text-white/60">{mystery.name}</div>
             <div class="text-white font-bold">{sectionTitle}</div>
        </GlassPanel>
    </header>

    <!-- Main Content -->
    <main class="flex-1 px-4 flex flex-col gap-6 w-full max-w-lg mx-auto">
        <!-- Mystery Image -->
        <MysteryImage />
        
        <!-- Step Counter (Digital Only active state) -->
        <div class="flex flex-wrap justify-center gap-1.5 px-2">
            {#each steps as step, i}
                <div 
                    class="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold transition-all duration-300
                    {i === stepIndex && $rosary.mode === 'digital' ? 'bg-white text-black scale-110 shadow-[0_0_10px_rgba(255,255,255,0.5)]' : 'bg-white/10 text-white/40'}
                    {$rosary.mode === 'physical' ? 'opacity-50' : ''}"
                >
                    {step.label}
                </div>
            {/each}
        </div>
        
        <!-- Current Prayer / Intention -->
        <div class="flex-1 flex flex-col justify-center min-h-[200px]" key={currentStep}>
            {#if currentStep.prayerId === 'announce'}
                 <div class="text-center space-y-4">
                    <h2 class="text-2xl font-bold text-white mb-2">{mystery.name}</h2>
                    <p class="text-white/80 italic leading-relaxed">"{currentStep.passage}"</p>
                 </div>
            {:else}
                <div class="text-center space-y-4">
                    <h2 class="text-3xl font-bold text-white">{t.prayers[currentStep.prayerId].title}</h2>
                    <p class="text-white/60 line-clamp-3">{t.prayers[currentStep.prayerId].content}</p>
                    <button class="text-sm text-blue-400 font-medium hover:text-blue-300 transition-colors" onclick={() => openPrayer(currentStep.prayerId, currentStep.passage)}>
                        Read Full Prayer
                    </button>
                </div>
            {/if}
        </div>
    </main>

    <!-- Navigation Controls -->
    <div class="fixed bottom-0 left-0 right-0 p-6 z-40 bg-gradient-to-t from-black via-black/80 to-transparent pt-12 flex justify-between max-w-lg mx-auto w-full">
        <!-- Transparent huge tap areas technically, but using visible buttons for clarity first as per glassmorphism usually implies buttons -->
        <!-- Plan says "Large transparent tap areas at bottom-left and bottom-right" -->
        
        <button 
           class="h-16 w-1/3 flex items-center justify-start pl-4 text-white/50 hover:text-white transition-colors"
           onclick={back}
        >
           <span class="text-lg font-medium tracking-widest uppercase">Back</span>
        </button>

        <button 
           class="h-16 w-1/3 flex items-center justify-end pr-4 text-white font-bold hover:scale-105 transition-transform"
           onclick={handleNext}
        >
           <span class="text-2xl tracking-widest uppercase">Next</span>
        </button>
    </div>

    <!-- Modal -->
    <PrayerModal 
        isOpen={modalOpen} 
        title={modalContent.title} 
        content={modalContent.content} 
        onClose={() => modalOpen = false} 
    />
</div>
