<script lang="ts">
	import { fly } from 'svelte/transition';
	import { quartOut } from 'svelte/easing';
	import GlassPanel from './GlassPanel.svelte';

	interface Props {
		isOpen: boolean;
		title?: string;
		children: any;
		onClose: () => void;
	}

	let { isOpen, title, children, onClose }: Props = $props();

	let touchStartY = 0;

	// IOS-like duration
	const ANIM_DURATION = 550;
	// Use quartOut for that "heavy" friction feel common in iOS
	const ANIM_EASING = quartOut;

	// Custom transition for "Stepped Blur" effect
	function steppedRise(node: Element, { duration, steps = 30, easing = quartOut }: any) {
		return {
			duration,
			easing,
			css: (t: number) => {
				// SAFE/RETROACTIVE: floor() ensures we never exceed the current progress.
				// On open (0->1): t=0.15 -> floor(4.5)=4 -> 13.3%. (Safe)
				// On close (1->0): t=0.95 -> floor(28.5)=28 -> 93.3%. (Safe/Proactive)
				// 30 checkpoints/frames as requested.
				const s = Math.floor(t * steps);
				const p = (s / steps) * 100;
				return `height: ${p}%;`;
			}
		};
	}
</script>

{#if isOpen}
	<!-- Outer Container: Catches clicks outside (Backdrop) -->
	<div
		class="fixed inset-0 z-50 flex items-end justify-center focus:outline-none"
		onclick={onClose}
		role="button"
		tabindex="0"
		onkeydown={(e) => e.key === 'Escape' && onClose()}
	>
		<!-- Wrapper for alignment -->
		<div class="relative w-full max-w-md" onclick={(e) => e.stopPropagation()} role="none">
			<!-- FAKE BLUR LAYER: Synchronized with content Rise/Fall -->
			<!-- We separate in/out to ensure we can tune them if needed, but using same steppedRise is symmetrical and robust -->
			<div
				class="absolute right-0 bottom-0 left-0 z-0 rounded-t-[32px]"
				style="height: 100%; backdrop-filter: blur(30px); -webkit-backdrop-filter: blur(30px);"
				transition:steppedRise={{
					duration: ANIM_DURATION,
					steps: 30,
					easing: ANIM_EASING
				}}
			></div>

			<!-- Modal Content -->
			<div
				class="relative z-10 w-full touch-none"
				transition:fly={{
					y: 800,
					duration: ANIM_DURATION,
					opacity: 1,
					easing: ANIM_EASING
				}}
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
					<!-- Mobile Handle -->
					<div class="mx-auto mb-6 h-1.5 w-12 rounded-full bg-white/20"></div>

					{#if title}
						<div class="mb-6 flex items-center justify-between">
							<h3 class="text-xl font-bold tracking-tight text-white">{title}</h3>
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
