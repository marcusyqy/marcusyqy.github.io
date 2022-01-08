<script lang="ts">
    import {slide} from 'svelte/transition'
</script>


<svelte:head>
    <title>
        Landing Page
    </title>
</svelte:head>

<div transition:slide>
<h1>Welcome to SvelteKit Hello</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
</div>

<style>
    div {
        display:box;
    }

</style>
