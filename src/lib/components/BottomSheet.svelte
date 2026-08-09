<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { quartOut } from 'svelte/easing';
	import { tick } from 'svelte';

	interface Props {
		isOpen: boolean;
		title?: string;
		children: any;
		onClose: () => void;
	}

	let { isOpen, title, children, onClose }: Props = $props();

	let touchStartY = 0;
	let animationComplete = $state(false);
	let dialogElement = $state<HTMLDivElement>();
	let previousFocus: HTMLElement | null = null;

	$effect(() => {
		if (!isOpen) return;

		previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
		tick().then(() => {
			const firstControl = dialogElement?.querySelector<HTMLElement>(
				'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
			);
			(firstControl || dialogElement)?.focus();
		});
	});

	async function closeSheet() {
		onClose();
		await tick();
		previousFocus?.focus();
	}

	function handleDialogKeydown(event: KeyboardEvent) {
		if (!dialogElement) return;
		if (event.key === 'Escape') {
			closeSheet();
			return;
		}

		if (event.key !== 'Tab') return;
		const controls = Array.from(
			dialogElement.querySelectorAll<HTMLElement>(
				'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
			)
		);
		if (controls.length === 0) return;

		const first = controls[0];
		const last = controls[controls.length - 1];
		if (event.shiftKey && document.activeElement === first) {
			event.preventDefault();
			last.focus();
		} else if (!event.shiftKey && document.activeElement === last) {
			event.preventDefault();
			first.focus();
		}
	}

	// iOS-like duration
	const ANIM_DURATION = 450;
	// Use quartOut for that "heavy" friction feel common in iOS
	const ANIM_EASING = quartOut;

	// Handle animation end to enable blur
	function onIntroEnd() {
		animationComplete = true;
	}

	function onOutroStart() {
		animationComplete = false;
	}
</script>

{#if isOpen}
	<!-- Backdrop overlay with fade -->
	<div
		class="fixed inset-0 z-50 bg-black/40"
		transition:fade={{ duration: ANIM_DURATION / 2 }}
		onclick={closeSheet}
		role="button"
		tabindex="0"
		onkeydown={(e) => e.key === 'Escape' && closeSheet()}
	></div>

	<!-- Sheet Container - positioned at bottom, clips content -->
	<div class="fixed right-0 bottom-0 left-0 z-50 flex justify-center overflow-hidden">
		<div
			class="w-full max-w-md"
			transition:fly={{
				y: '100%',
				duration: ANIM_DURATION,
				opacity: 1,
				easing: ANIM_EASING
			}}
			onintroend={onIntroEnd}
			onoutrostart={onOutroStart}
		>
			<!-- Glass panel with themed border -->
			<div
				bind:this={dialogElement}
				class="sheet-panel"
				class:sheet-panel-ready={animationComplete}
				onclick={(e) => e.stopPropagation()}
				onkeydown={handleDialogKeydown}
				role="dialog"
				aria-modal="true"
				aria-label={title || 'Menu'}
				tabindex="-1"
			>
				<!-- Touch handling for swipe-to-close -->
				<div>
					<!-- Draggable Header Area -->
					<div
						class="pb-2"
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
						<!-- Mobile Handle -->
						<div class="mx-auto mb-6 h-1.5 w-12 rounded-full bg-white/20"></div>

						{#if title}
							<div class="mb-6 flex items-center justify-between">
								<h3 class="text-xl font-bold tracking-tight text-white">{title}</h3>
								<button
									class="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
									onclick={closeSheet}
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
					</div>

					<!-- Content Area (Not draggable) -->
					{@render children()}
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	.sheet-panel {
		/* Semi-opaque during animation - visible but not solid */
		background-color: rgba(20, 20, 20, 0.7) !important;

		/* Themed border with low opacity variation */
		border: 1px solid color-mix(in srgb, var(--theme-color, #2d4a3e) 60%, transparent);
		border-top: 2px solid
			color-mix(in srgb, var(--theme-color, #2d4a3e) 40%, rgba(255, 255, 255, 0.2));
		border-bottom: none;

		border-radius: 32px 32px 0 0;
		box-shadow:
			0 8px 32px 0 rgba(0, 0, 0, 0.4),
			inset 0 1px 0 0 color-mix(in srgb, var(--theme-color, #2d4a3e) 20%, transparent);

		/* No blur during animation */
		backdrop-filter: none;
		-webkit-backdrop-filter: none;

		max-height: 90vh;
		overflow-y: auto;
		padding: 2rem;
		padding-bottom: 3rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		touch-action: none;

		/* Smooth transition for blur activation */
		transition:
			backdrop-filter 0.2s ease,
			-webkit-backdrop-filter 0.2s ease,
			background-color 0.3s ease;
	}

	/* After animation completes: very transparent + blur */
	.sheet-panel-ready {
		background-color: rgba(15, 15, 15, 0.25) !important;
		backdrop-filter: blur(40px) saturate(180%);
		-webkit-backdrop-filter: blur(40px) saturate(180%);
	}

	@media (pointer: coarse), (max-width: 768px) {
		.sheet-panel,
		.sheet-panel-ready {
			background-color: rgba(15, 15, 15, 0.88) !important;
			backdrop-filter: none;
			-webkit-backdrop-filter: none;
			transition: background-color 0.15s ease;
		}
	}
</style>
