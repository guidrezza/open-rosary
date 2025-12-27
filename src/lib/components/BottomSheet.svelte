<script lang="ts">
	import { fly, slide } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import GlassPanel from './GlassPanel.svelte';

	interface Props {
		isOpen: boolean;
		title?: string;
		children: any;
		onClose: () => void;
	}

	let { isOpen, title, children, onClose }: Props = $props();

	let touchStartY = 0;

	// Custom transition for "Stepped Blur" effect
	function steppedRise(node: Element, { duration, steps = 5, easing = cubicOut }: any) {
		return {
			duration,
			easing,
			css: (t: number) => {
				// Calculate quantized height step (0 to steps) based on PASSED thresholds
				// uses floor to ensure we only show blur for the portion already covered
				const s = Math.floor(t * steps);
				const p = (s / steps) * 100; // e.g. 0%, 20%, ... 100%
				return `height: ${p}%;`;
			}
		};
	}
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
		<!-- Wrapper to coordinate blur backing and content -->
		<div class="relative w-full max-w-md" onclick={(e) => e.stopPropagation()} role="none">
			<!-- FAKE BLUR LAYER: Animates height (sliding up) to fix transparency mid-animation -->
			<div
				class="absolute right-0 bottom-0 left-0 z-0 rounded-t-[32px]"
				style="height: 100%; backdrop-filter: blur(30px); -webkit-backdrop-filter: blur(30px);"
				transition:steppedRise={{ duration: 150, steps: 5, easing: cubicOut }}
			></div>

			<!-- Modal Content: Bottom Sheet Style (No bottom margin, slide from 100% height) -->
			<div
				class="relative z-10 w-full touch-none"
				transition:fly={{ y: 800, duration: 150, opacity: 1, easing: cubicOut }}
				ontouchstart={(e) => {
					const touch = e.changedTouches[0];
					touchStartY = touch.clientY;
				}}
				ontouchend={(e) => {
					const touch = e.changedTouches[0];
					if (touchStartY && touch.clientY - touchStartY > 75) {
						onClose();
					}
					touchStartY = 0;
				}}
			>
				<GlassPanel
					class="flex max-h-[90vh] flex-col gap-2 overflow-y-auto rounded-t-[32px] !rounded-b-none !border-b-0 p-8 pb-12"
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
	</div>
{/if}
