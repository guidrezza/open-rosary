<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';

	import { detectLocale } from '$lib/localeDetector';

	onMount(() => {
		const lang = detectLocale(navigator.language);
		goto(`${base}/${lang}`, { replaceState: true });
	});
</script>

<div class="flex min-h-screen items-center justify-center bg-black text-white/50">
	<!-- Redirecting... -->
</div>
