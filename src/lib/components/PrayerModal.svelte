<script lang="ts">
	import GlassPanel from './GlassPanel.svelte';
	import { fade, fly } from 'svelte/transition';

	let { title, content, isOpen = false, onClose } = $props();
</script>

{#if isOpen}
	<!-- Main Container -->
	<div
		class="fixed inset-0 z-50 flex items-center justify-center p-4 focus:outline-none"
		role="dialog"
		aria-modal="true"
	>
		<!-- Backdrop (Fades in/out) -->
		<button
			class="absolute inset-0 h-full w-full cursor-default bg-black/80 backdrop-blur-sm"
			transition:fade={{ duration: 100 }}
			onclick={onClose}
			aria-label="Close Modal"
		></button>

		<!-- Content (Flies in/out) -->
		<div class="relative z-10 w-full max-w-lg" transition:fly={{ y: 20, duration: 100 }}>
			<div
				class="w-full cursor-default"
				onclick={(e) => e.stopPropagation()}
				onkeydown={(e) => e.key === 'Escape' && onClose()}
				role="button"
				tabindex="-1"
			>
				<GlassPanel class="relative max-h-[80vh] overflow-y-auto p-8">
					<button
						class="absolute top-4 right-4 text-white/50 transition-colors hover:text-white"
						onclick={onClose}
						aria-label="Close"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
					<h2 class="mb-6 text-center text-2xl font-bold text-white">{title}</h2>
					<p class="text-lg leading-relaxed whitespace-pre-wrap text-white/90">{content}</p>
				</GlassPanel>
			</div>
		</div>
	</div>
{/if}
