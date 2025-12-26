<script lang="ts">
	let { children, class: className = '', onclick }: { children: any, class?: string, onclick?: (e: MouseEvent) => void } = $props();
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<div 
    class="glass-standard {className}"
    role="button"
    tabindex={onclick ? 0 : -1}  
    onclick={onclick}
>
	{@render children()}
</div>
