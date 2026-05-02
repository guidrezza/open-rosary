<script lang="ts">
	import { onMount } from 'svelte';
	import { detectLocale } from '$lib/localeDetector';

	interface Props {
		basePath?: string;
	}

	let { basePath = '' }: Props = $props();
	let appBase = $derived(basePath === '/' ? '' : basePath.replace(/\/$/, ''));

	onMount(() => {
		const lang = detectLocale(navigator.language);
		window.location.replace(`${appBase}/${lang}/`);
	});
</script>

<div class="flex min-h-screen items-center justify-center bg-black text-white/50"></div>
