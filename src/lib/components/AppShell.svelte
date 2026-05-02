<script lang="ts">
	import '../../styles/layout.css';
	import { onMount } from 'svelte';
	import { getLiturgicalTheme, type LiturgicalColor } from '$lib/liturgical';
	import { rosary } from '$lib/stores';
	import Background from '$lib/components/Background.svelte';

	interface Props {
		children: any;
	}

	let { children }: Props = $props();

	let theme = $derived($rosary.theme || getLiturgicalTheme(new Date()));

	onMount(() => {
		rosary.init();
		syncStoreFromUrl();

		const onPopState = () => syncStoreFromUrl();
		window.addEventListener('popstate', onPopState);

		return () => {
			window.removeEventListener('popstate', onPopState);
		};
	});

	function syncStoreFromUrl() {
		const p = new URL(window.location.href).searchParams;
		const urlTheme = p.get('theme');
		const urlMode = p.get('mode');

		if (urlMode && (urlMode === 'digital' || urlMode === 'physical') && urlMode !== $rosary.mode) {
			rosary.setMode(urlMode);
		}

		const validColors = ['green', 'purple', 'white', 'red', 'rose', 'gold', 'silver', 'black'];
		if (urlTheme && validColors.includes(urlTheme) && $rosary.theme?.color !== urlTheme) {
			rosary.setTheme(urlTheme as LiturgicalColor);
		}
	}
</script>

<div
	class="relative min-h-screen overflow-hidden transition-colors duration-1000 ease-in-out"
	style="
        --theme-color: {theme.cssVars['--theme-color']};
        --glass-bg: {theme.cssVars['--glass-bg']};
        --glass-border: {theme.cssVars['--glass-border']};
        --text-highlight: {theme.cssVars['--text-highlight']};
    "
>
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
