<script lang="ts">
	import GlassPanel from './GlassPanel.svelte';
	import { fade, fly } from 'svelte/transition';

	let { title, content, isOpen = false, onClose } = $props();
</script>

{#if isOpen}
	<div 
		class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm focus:outline-none" 
		transition:fade={{ duration: 200 }}
		onclick={onClose}
        onkeydown={(e) => e.key === 'Escape' && onClose()}
		role="button"
		tabindex="0"
	>
		<div 
			class="w-full max-w-lg cursor-default" 
			onclick={(e) => e.stopPropagation()}
            onkeydown={(e) => e.key === 'Escape' && onClose()}
			role="document"
            tabindex="-1"
			transition:fly={{ y: 20, duration: 300 }}
		>
			<GlassPanel class="relative max-h-[80vh] overflow-y-auto p-8">
				<button 
					class="absolute top-4 right-4 text-white/50 hover:text-white transition-colors" 
					onclick={onClose}
					aria-label="Close"
				>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
				<h2 class="text-2xl font-bold mb-6 text-white text-center">{title}</h2>
				<p class="text-lg leading-relaxed text-white/90 whitespace-pre-wrap">{content}</p>
			</GlassPanel>
		</div>
	</div>
{/if}
