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
	<!-- Outer Container: Catches clicks outside (Backdrop), but NO visual style (dim/blur) per request -->
	<div
		class="fixed inset-0 z-50 flex items-end justify-center focus:outline-none sm:items-center"
		onclick={onClose}
		role="button"
		tabindex="0"
		onkeydown={(e) => e.key === 'Escape' && onClose()}
	>
		<!-- Modal Content -->
		<div
			class="mb-4 w-full max-w-sm p-4 sm:mb-0"
			transition:fly={{ y: 20, duration: 300, opacity: 0 }}
			onclick={(e) => e.stopPropagation()}
			role="none"
			style="will-change: transform, opacity; transform: translateZ(0);"
		>
			<!-- 
                Using GlassPanel with standard class overrides if needed, 
                but layout.css now enforces .glass-panel to use --glass-radius (32px) etc.
                We ensure explicit class mapping here just in case.
            -->
			<GlassPanel class="flex max-h-[70vh] flex-col gap-2 overflow-y-auto p-6">
				<!-- Mobile Handle (Subtle) -->
				<div class="mx-auto mb-6 h-1 w-10 rounded-full bg-white/20"></div>

				{#if title}
					<div class="mb-6 flex items-center justify-between">
						<h3 class="text-xl font-bold tracking-tight text-white">{title}</h3>
						<!-- Close Button (Subtle, large touch target) -->
						<button
							class="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
							onclick={onClose}
							aria-label="Close"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="12"
								height="12"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="3"
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
