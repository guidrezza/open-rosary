<script lang="ts">
	let {
		children,
		class: className = '',
		onclick
	}: { children: any; class?: string; onclick?: (e: MouseEvent) => void } = $props();
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<div
	class="glass-standard {className}"
	style="backdrop-filter: blur(40px) saturate(180%); -webkit-backdrop-filter: blur(40px) saturate(180%);"
	role="button"
	tabindex={onclick ? 0 : -1}
	{onclick}
>
	{@render children()}
</div>
