<script lang="ts">
	let { children, class: className = '', onclick }: { children: any, class?: string, onclick?: (e: MouseEvent) => void } = $props();
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<div 
    class="backdrop-blur-xl rounded-2xl border shadow-xl {className}"
    style="
        background-color: var(--glass-bg, rgba(255, 255, 255, 0.15));
        border-color: var(--glass-border, rgba(255, 255, 255, 0.2));
        transition: background-color 1s, border-color 1s;
    "
    role="button"
    tabindex={onclick ? 0 : -1}  
    onclick={onclick}
>
	{@render children()}
</div>
