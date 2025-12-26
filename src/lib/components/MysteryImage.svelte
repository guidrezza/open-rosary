<script lang="ts">
	import { MYSTERY_IMAGES, getRandomImage, type MysteryImageDef } from '$lib/mysteryImages';

	let { mystery, decade }: { mystery?: string; decade?: number } = $props();

	let image = $state<MysteryImageDef | null>(null);

	$effect(() => {
		if (mystery && decade) {
			// Specific: 1-based decade index
			const list = MYSTERY_IMAGES[mystery];
			if (list && list[decade - 1]) {
				image = list[decade - 1];
			}
		} else if (!image) {
			// Random (Home Page or Fallback) - Only set once to avoid jitter if props are missing
			// But for Home Page, we want it random on mount.
			image = getRandomImage();
		}
	});

	// React to prop changes specifically for navigation
	$effect(() => {
		// If mystery/decade CHANGE, update.
		if (mystery && decade) {
			const list = MYSTERY_IMAGES[mystery];
			if (list && list[decade - 1]) {
				image = list[decade - 1];
			}
		}
	});
	export function refresh() {
		// Only works if NOT driven by props
		if (!mystery && !decade) {
			image = getRandomImage();
		}
	}
</script>

<div
	class="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[32px] border border-white/10 bg-white/5"
>
	{#if image}
		<img
			src={image.path}
			alt={image.alt}
			class="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
		/>
		<div class="absolute inset-0 bg-black/20"></div>
	{:else}
		<div class="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-blue-900/20"></div>
	{/if}
</div>
