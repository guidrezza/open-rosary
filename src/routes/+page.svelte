<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';

	onMount(() => {
		const lang = navigator.language.toLowerCase();
		const target = lang.startsWith('pt') ? 'pt-br' : 'en';
		goto(`${base}/${target}`, { replaceState: true });
	});
</script>

<div class="flex h-screen w-full items-center justify-center bg-black text-white">
	<p class="animate-pulse">Loading...</p>
</div>
