<script lang="ts">
	let { children, class: className = '' } = $props();
</script>

<div class="glass-panel p-6 {className}">
	{@render children()}
</div>
