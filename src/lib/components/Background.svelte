<script lang="ts">
	import { rosary } from '$lib/stores';
	import { onMount } from 'svelte';
	import { PALETTES } from '$lib/liturgical';

	let theme = $derived($rosary.theme || { color: 'green', cssVars: PALETTES.green });

	// Theme colors for the glowing orbs
	let colorPrimary = $derived(theme?.cssVars?.colorTop || PALETTES.green.colorTop || '#34d399');
	let colorSecondary = $derived(
		theme?.cssVars?.colorBottom || PALETTES.green.colorBottom || '#064e3b'
	);

	// Orb configuration for soft, ambient lighting effect
	interface LightOrb {
		id: number;
		x: number;
		y: number;
		endX: number;
		endY: number;
		size: number;
		moveDuration: number;
		moveDelay: number;
		baseOpacity: number;
		flickerDuration: number;
		flickerDelay: number;
		blurAmount: number;
		colorMix: number; // 0 = primary, 1 = secondary
	}

	let orbs: LightOrb[] = $state([]);

	onMount(() => {
		// Create many orbs of varying sizes for ambient effect
		const orbCount = 40;
		orbs = Array.from({ length: orbCount }, (_, i) => {
			const startX = Math.random() * 120 - 10; // Allow some to start off-screen
			const startY = Math.random() * 120 - 10;
			const endX = Math.random() * 120 - 10;
			const endY = Math.random() * 120 - 10;

			// Varied sizes: small ambient (40-100), medium glow (100-200), large soft (200-400)
			const sizeCategory = Math.random();
			let size: number;
			if (sizeCategory < 0.5) {
				size = Math.random() * 60 + 40; // Small: 40-100px
			} else if (sizeCategory < 0.85) {
				size = Math.random() * 100 + 100; // Medium: 100-200px
			} else {
				size = Math.random() * 200 + 200; // Large: 200-400px
			}

			return {
				id: i,
				x: startX,
				y: startY,
				endX: endX,
				endY: endY,
				size: size,
				moveDuration: Math.random() * 40 + 30, // 30s - 70s (very slow)
				moveDelay: Math.random() * -60,
				baseOpacity: Math.random() * 0.27 + 0.18, // 0.18 - 0.45 (brighter)
				flickerDuration: Math.random() * 6 + 6, // 6s - 12s (much slower flicker)
				flickerDelay: Math.random() * -12,
				blurAmount: size < 100 ? 30 : size < 200 ? 50 : 70, // More blur for larger orbs
				colorMix: Math.random() // Mix between primary and secondary colors
			};
		});
	});

	// Generate the orb color based on colorMix value
	function getOrbColor(mix: number): string {
		if (mix < 0.6) {
			return colorPrimary;
		} else {
			return colorSecondary;
		}
	}
</script>

<div class="fixed inset-0 -z-10 overflow-hidden" style="background: #0d0d0d;">
	<!-- Very subtle base tint -->
	<div
		class="absolute inset-0 transition-colors duration-1000"
		style="
			background: radial-gradient(ellipse at 50% 100%, {colorSecondary}20 0%, transparent 70%);
		"
	></div>

	<!-- Ambient light orbs -->
	{#each orbs as orb (orb.id)}
		<div
			class="orb absolute rounded-full transition-colors duration-1000"
			style="
				width: {orb.size}px;
				height: {orb.size}px;
				left: 0;
				top: 0;
				filter: blur({orb.blurAmount}px);
				--x-start: {orb.x}vw;
				--y-start: {orb.y}vh;
				--x-end: {orb.endX}vw;
				--y-end: {orb.endY}vh;
				--move-duration: {orb.moveDuration}s;
				--flicker-duration: {orb.flickerDuration}s;
				--opacity-min: {orb.baseOpacity * 0.8};
				--opacity-max: {orb.baseOpacity};
				--move-delay: {orb.moveDelay}s;
				--flicker-delay: {orb.flickerDelay}s;
				background: radial-gradient(circle at center, {getOrbColor(orb.colorMix)} 0%, transparent 70%);
			"
		></div>
	{/each}

	<!-- Soft vignette for depth -->
	<div
		class="pointer-events-none absolute inset-0"
		style="
		background: radial-gradient(ellipse at center, transparent 40%, rgba(0, 0, 0, 0.35) 100%);
	"
	></div>
</div>

<style>
	.orb {
		animation:
			orbFloat var(--move-duration) var(--move-delay) infinite alternate ease-in-out,
			orbFlicker var(--flicker-duration) var(--flicker-delay) infinite ease-in-out;
		will-change: transform, opacity;
	}

	@keyframes orbFloat {
		0% {
			transform: translate(var(--x-start), var(--y-start));
		}
		100% {
			transform: translate(var(--x-end), var(--y-end));
		}
	}

	@keyframes orbFlicker {
		0%,
		100% {
			opacity: var(--opacity-min);
		}
		50% {
			opacity: var(--opacity-max);
		}
	}
</style>
