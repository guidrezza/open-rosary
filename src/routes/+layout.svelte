<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
    import { onMount } from 'svelte';
    import { getLiturgicalTheme } from '$lib/liturgical';
    import { rosary } from '$lib/stores';

	let { children } = $props();
    
    let theme = $state(getLiturgicalTheme(new Date()));

    onMount(() => {
        // Recalculate on client to match local time exactly if needed, 
        // or allow an "override" param later.
        theme = getLiturgicalTheme(new Date());
        rosary.update(s => ({ ...s, theme }));
    });
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div 
    class="min-h-screen transition-colors duration-1000 ease-in-out"
    style="
        background-color: {theme.cssVars['--theme-color']};
        --theme-color: {theme.cssVars['--theme-color']};
        --glass-bg: {theme.cssVars['--glass-bg']};
        --glass-border: {theme.cssVars['--glass-border']};
        --text-highlight: {theme.cssVars['--text-highlight']};
    "
>
    <!-- Background Gradient/Noise Overlay could go here for "heavily blurred" effect -->
    <div class="fixed inset-0 bg-gradient-to-br from-black/20 to-transparent pointer-events-none z-0"></div>
    <div class="relative z-10">
        {@render children()}
    </div>
</div>
