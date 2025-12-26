<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
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
	<!-- Outer Container: Catches clicks outside (Backdrop), but NO visual style (dim/blur) per request -->
	<div
		class="fixed inset-0 z-50 flex items-end justify-center focus:outline-none"
		onclick={onClose}
		role="button"
		tabindex="0"
		onkeydown={(e) => e.key === 'Escape' && onClose()}
	>
		<!-- Modal Content: Bottom Sheet Style (No bottom margin, slide from 100% height) -->
		<div
			class="w-full max-w-md"
			transition:fly={{ y: 800, duration: 300, opacity: 1, easing: cubicOut }}
			onclick={(e) => e.stopPropagation()}
			role="none"
		>
			<GlassPanel
				class="flex max-h-[90vh] flex-col gap-2 overflow-y-auto rounded-t-[32px] !rounded-b-none !border-b-0 p-8 pb-32"
			>
				<!-- Mobile Handle (Subtle) -->
				<div class="mx-auto mb-6 h-1.5 w-12 rounded-full bg-white/20"></div>

				{#if title}
					<div class="mb-6 flex items-center justify-between">
						<h3 class="text-xl font-bold tracking-tight text-white">{title}</h3>
						<!-- Close Button (Subtle, large touch target) -->
						<button
							class="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
							onclick={onClose}
							aria-label="Close"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="4"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<line x1="18" y1="6" x2="6" y2="18"></line>
								<line x1="6" y1="6" x2="18" y2="18"></line>
							</svg>
						</button>
					</div>
				{/if}

				{@render children()}
			</GlassPanel>
		</div>
	</div>
{/if}
