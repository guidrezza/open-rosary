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
            rosary.update(s => ({ ...s, theme: getLiturgicalTheme(new Date()) }));
        }
    });
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div 
    class="min-h-screen transition-colors duration-1000 ease-in-out relative overflow-hidden"
    style="
        --theme-color: {theme.cssVars['--theme-color']};
        --glass-bg: {theme.cssVars['--glass-bg']};
        --glass-border: {theme.cssVars['--glass-border']};
        --text-highlight: {theme.cssVars['--text-highlight']};
    "
>
    <!-- Global Background -->
    <Background />
    
    <div class="relative z-10 w-full h-full overflow-hidden">
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
