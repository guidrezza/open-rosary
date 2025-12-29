<script lang="ts">
	let {
		children,
		class: className = '',
		style = '',
		onclick
	}: { children: any; class?: string; style?: string; onclick?: (e: MouseEvent) => void } = $props();
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<div
	class="glass-standard !bg-white/0 {className}"
	style="backdrop-filter: blur(40px) saturate(180%); -webkit-backdrop-filter: blur(40px) saturate(180%); {style}"
	role="button"
	tabindex={onclick ? 0 : -1}
	{onclick}
>
	{@render children()}
</div>
