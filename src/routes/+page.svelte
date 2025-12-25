<script lang="ts">
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { base } from '$app/paths';

    onMount(() => {
        goto(`${base}/en`, { replaceState: true });
    });
</script>

<div class="min-h-screen bg-black flex items-center justify-center text-white/50">
    <!-- Redirecting... -->
</div>
