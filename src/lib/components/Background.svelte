<script lang="ts">
	import { rosary } from '$lib/stores';
	import { fade } from 'svelte/transition';

	let cssVars = $derived($rosary.theme?.cssVars || {});
</script>

<div class="fixed inset-0 -z-10 overflow-hidden bg-neutral-900">
	<!-- Base Gradient -->
	<div
		class="absolute inset-0 opacity-40 transition-colors duration-1000"
		style="background: radial-gradient(circle at 50% 50%, {cssVars[
			'--theme-color'
		]} 0%, transparent 100%);"
	></div>

	<!-- Lava Lamp Blobs -->
	<div class="blobs relative h-full w-full opacity-50 mix-blend-screen blur-[120px] filter">
		<!-- Blob 1 -->
		<div
			class="animate-blob absolute top-0 -left-10 h-[40vh] w-[40vh] rounded-full opacity-60"
			style="background-color: {cssVars['--theme-color']};"
		></div>

		<!-- Blob 2 -->
		<div
			class="animate-blob animation-delay-2000 absolute top-1/4 right-0 h-[35vh] w-[35vh] rounded-full opacity-50"
			style="background-color: {cssVars['--theme-color']};"
		></div>

		<!-- Blob 3 -->
		<div
			class="animate-blob animation-delay-4000 absolute bottom-0 left-20 h-[45vh] w-[45vh] rounded-full opacity-60"
			style="background-color: {cssVars['--theme-color']};"
		></div>

		<!-- Blob 4 (New) -->
		<div
			class="animate-blob animation-delay-1000 absolute -right-10 bottom-1/4 h-[30vh] w-[30vh] rounded-full opacity-50"
			style="background-color: {cssVars['--theme-color']};"
		></div>

		<!-- Blob 5 (New) -->
		<div
			class="animate-blob animation-delay-3000 absolute top-1/2 left-1/4 h-[25vh] w-[25vh] rounded-full opacity-40"
			style="background-color: {cssVars['--theme-color']};"
		></div>

		<!-- Blob 6 (New) -->
		<div
			class="animate-blob animation-delay-5000 absolute top-10 left-1/2 h-[35vh] w-[35vh] rounded-full opacity-40"
			style="background-color: {cssVars['--theme-color']};"
		></div>
	</div>

	<!-- Noise/Texture Overlay -->
	<div
		class="pointer-events-none absolute inset-0 opacity-[0.04]"
		style="background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJmIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC42NSIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNmKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==');"
	></div>
</div>

<style>
	@keyframes blob {
		0% {
			transform: translate(0px, 0px) scale(1);
		}
		33% {
			transform: translate(40px, -60px) scale(1.1);
		}
		66% {
			transform: translate(-30px, 30px) scale(0.9);
		}
		100% {
			transform: translate(0px, 0px) scale(1);
		}
	}
	.animate-blob {
		animation: blob 7s infinite;
	}
	.animation-delay-1000 {
		animation-delay: 1s;
	}
	.animation-delay-2000 {
		animation-delay: 2s;
	}
	.animation-delay-3000 {
		animation-delay: 3s;
	}
	.animation-delay-4000 {
		animation-delay: 4s;
	}
	.animation-delay-5000 {
		animation-delay: 5s;
	}
</style>
