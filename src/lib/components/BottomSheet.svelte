<script lang="ts">
    import { fade, fly } from 'svelte/transition';
    import GlassPanel from './GlassPanel.svelte';

    interface Props {
        isOpen: boolean;
        title?: string;
        children: any;
        onClose: () => void;
    }

    let { isOpen, title, children, onClose }: Props = $props();
</script>

{#if isOpen}
    <div 
        class="fixed inset-0 z-50 flex items-end justify-center sm:items-center focus:outline-none"
        onclick={onClose}
        transition:fade={{ duration: 150 }}
        role="button"
        tabindex="0"
        onkeydown={(e) => e.key === 'Escape' && onClose()}
    >
        <div 
            class="w-full max-w-md p-4"
            transition:fly={{ y: 0, duration: 250, opacity: 0, start: 50 }}
            onclick={(e) => e.stopPropagation()}
            role="none"
        >
            <GlassPanel class="flex flex-col gap-2 p-6 max-h-[70vh] overflow-y-auto rounded-3xl">
                <!-- Handle Bar for mobile feel -->
                <div class="w-12 h-1.5 bg-white/20 rounded-full mx-auto mb-4"></div>
                
                {#if title}
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-white font-bold text-xl">{title}</h3>
                        <button class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/50 hover:bg-white/20 hover:text-white transition-colors" onclick={onClose}>
                            ✕
                        </button>
                    </div>
                {/if}
                
                {@render children()}
            </GlassPanel>
        </div>
    </div>
{/if}
