<script lang="ts">
	import { onDestroy } from 'svelte';
	import { 
		MYSTERY_IMAGES, 
		getRandomImage, 
		getNextRandomFromDeck, 
		getNextSequentialImage, 
		createDeck,
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
	let interval: any;
	
	// Deck for random pool
	let deck: MysteryImageDef[] = [];

	function setNewImage() {
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

		if (rotate) {
			if (interval) clearInterval(interval);
			interval = setInterval(() => {
				rotateImage();
			}, speed);
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
		// React to props
		if (mystery && decade && !rotate) {
			// Static Mode (Decades)
			const list = MYSTERY_IMAGES[mystery];
			if (list && list[decade - 1]) {
				image = list[decade - 1];
			}
			if (interval) clearInterval(interval);
		} else {
			// Rotating Mode
			setNewImage();
		}
	});

	onDestroy(() => {
		if (interval) clearInterval(interval);
	});

	export function refresh() {
		rotateImage();
		if (rotate) {
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
			class="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
		/>
		<div class="absolute inset-0 bg-black/20"></div>
	{:else}
		<div class="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-blue-900/20"></div>
	{/if}
</div>
