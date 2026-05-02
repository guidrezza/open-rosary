<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { 
		MYSTERY_IMAGES, 
		getNextRandomFromDeck, 
		getNextSequentialImage, 
		type MysteryImageDef 
	} from '$lib/mysteryImages';

	let {
		mystery,
		decade,
		rotate = false,
		pool = 'random', // 'random' | 'mystery'
		speed = 5000
	}: {
		mystery?: string;
		decade?: number;
		rotate?: boolean;
		pool?: 'random' | 'mystery';
		speed?: number;
	} = $props();

	let image = $state<MysteryImageDef | null>(null);
	let interval: ReturnType<typeof setInterval> | undefined;
	let canAutoRotate = $state(false);
	
	// Deck for random pool
	let deck: MysteryImageDef[] = [];

	function selectInitialImage() {
		if (mystery && decade) {
			const list = MYSTERY_IMAGES[mystery];
			if (list && list[decade - 1]) {
				image = list[decade - 1];
			}
		} else if (!image) {
			// Init if nothing set
			if (pool === 'mystery' && mystery) {
				const list = MYSTERY_IMAGES[mystery];
				if (list && list.length > 0) image = list[0];
			} else {
				// Random deck
				const result = getNextRandomFromDeck(deck);
				image = result.image;
				deck = result.deck;
			}
		}
	}

	function rotateImage() {
		if (pool === 'mystery' && mystery) {
			// Sequential
			if (image) {
				image = getNextSequentialImage(image, mystery) || image;
			} else {
				// Fallback start
				const list = MYSTERY_IMAGES[mystery];
				if (list && list.length > 0) image = list[0];
			}
		} else {
			// Random Deck
			const result = getNextRandomFromDeck(deck);
			image = result.image;
			deck = result.deck;
		}
	}

	$effect(() => {
		selectInitialImage();
	});

	onMount(() => {
		const shouldReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		const isTouch = window.matchMedia('(pointer: coarse)').matches;
		canAutoRotate = rotate && !shouldReduceMotion && !isTouch;
	});

	$effect(() => {
		if (interval) {
			clearInterval(interval);
			interval = undefined;
		}

		if (canAutoRotate) {
			interval = setInterval(rotateImage, speed);
		}
	});

	onDestroy(() => {
		if (interval) clearInterval(interval);
	});

	export function refresh() {
		rotateImage();
		if (canAutoRotate) {
			if (interval) clearInterval(interval);
			interval = setInterval(rotateImage, speed);
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
			loading="eager"
			decoding="async"
			class="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
		/>
		<div class="absolute inset-0 bg-black/20"></div>
	{:else}
		<div class="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-blue-900/20"></div>
	{/if}
</div>
