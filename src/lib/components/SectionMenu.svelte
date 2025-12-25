<script lang="ts">
    import { fade, fly } from 'svelte/transition';
    import GlassPanel from './GlassPanel.svelte';
    import type { RosarySection } from '../types';

    interface Props {
        isOpen: boolean;
        currentSection: RosarySection;
        onSelect: (section: RosarySection) => void;
        onClose: () => void;
    }

    let { isOpen, currentSection, onSelect, onClose }: Props = $props();

    const sections: { id: RosarySection; label: string }[] = [
        { id: 'intro', label: 'Introduction' },
        { id: 'decade-1', label: 'First Decade' },
        { id: 'decade-2', label: 'Second Decade' },
        { id: 'decade-3', label: 'Third Decade' },
        { id: 'decade-4', label: 'Fourth Decade' },
        { id: 'decade-5', label: 'Fifth Decade' },
        { id: 'conclusion', label: 'Conclusion' }
    ];
</script>

{#if isOpen}
    <div 
        class="fixed inset-0 z-50 flex items-end justify-center sm:items-center bg-black/60 backdrop-blur-sm"
        onclick={onClose}
        transition:fade={{ duration: 200 }}
    >
        <div 
            class="w-full max-w-md p-4"
            transition:fly={{ y: 100, duration: 300 }}
            onclick={(e) => e.stopPropagation()}
        >
            <GlassPanel class="flex flex-col gap-2 p-4 max-h-[70vh] overflow-y-auto">
                <div class="flex justify-between items-center mb-2 px-2">
                    <h3 class="text-white font-bold text-lg">Jump to Section</h3>
                    <button class="text-white/50 hover:text-white" onclick={onClose}>
                        ✕
                    </button>
                </div>
                
                <div class="flex flex-col gap-2">
                    {#each sections as section}
                        <button
                            class="w-full text-left p-4 rounded-xl transition-all duration-200 
                            {currentSection === section.id 
                                ? 'bg-white/20 text-white font-bold border border-white/20' 
                                : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'}"
                            onclick={() => onSelect(section.id)}
                        >
                            {section.label}
                        </button>
                    {/each}
                </div>
            </GlassPanel>
        </div>
    </div>
{/if}
