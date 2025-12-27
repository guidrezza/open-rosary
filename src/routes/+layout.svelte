<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { getLiturgicalTheme, type LiturgicalColor } from '$lib/liturgical';
	import { rosary } from '$lib/stores';
	import Background from '$lib/components/Background.svelte';

	let { children } = $props();

	// We want to trigger reactivity when $rosary.theme changes
	let theme = $derived($rosary.theme || getLiturgicalTheme(new Date()));

	onMount(() => {
		// Initialize Store (Recalc date)
		rosary.init();
	});

	// Sync URL Params -> Store
	$effect(() => {
		const p = $page.url.searchParams;
		const urlTheme = p.get('theme');
		const urlMode = p.get('mode');

		// Sync Mode
		if (urlMode && (urlMode === 'digital' || urlMode === 'physical') && urlMode !== $rosary.mode) {
			rosary.setMode(urlMode);
		}

		// Sync Theme
		// Validate against known colors to prevent junk
		const validColors = ['green', 'purple', 'white', 'red', 'rose', 'gold', 'silver', 'black'];
		if (urlTheme && validColors.includes(urlTheme) && $rosary.theme?.color !== urlTheme) {
			rosary.setTheme(urlTheme as LiturgicalColor);
		}
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Open Rosary</title>
	<meta
		name="description"
		content="A beautiful, modern, and open-source web application for praying the Rosary. Designed with a focus on aesthetics, simplicity, and accessibility."
	/>
</svelte:head>

<div
	class="relative min-h-screen overflow-hidden transition-colors duration-1000 ease-in-out"
	style="
        --theme-color: {theme.cssVars['--theme-color']};
        --glass-bg: {theme.cssVars['--glass-bg']};
        --glass-border: {theme.cssVars['--glass-border']};
        --text-highlight: {theme.cssVars['--text-highlight']};
    "
>
	<!-- Global Background -->
	<Background />

	<div class="relative z-10 h-full w-full overflow-hidden">
		{@render children()}
	</div>
</div>

<style>
	:global(body) {
		overflow: hidden;
		margin: 0;
		padding: 0;
		background-color: #000;
	}
</style>
