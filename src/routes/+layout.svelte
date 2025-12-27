<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { onMount } from 'svelte';
	import { getLiturgicalTheme } from '$lib/liturgical';
	import { rosary } from '$lib/stores';
	import Background from '$lib/components/Background.svelte';

	let { children } = $props();

	// We want to trigger reactivity when $rosary.theme changes
	let theme = $derived($rosary.theme || getLiturgicalTheme(new Date()));

	onMount(() => {
		// Initialize if empty, but respect existing override logic if we want persistence
		if (!$rosary.theme) {
			rosary.update((s) => ({ ...s, theme: getLiturgicalTheme(new Date()) }));
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
