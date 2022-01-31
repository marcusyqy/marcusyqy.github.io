<script lang="ts">
    import "../app.css";
	import Nav from '../components/nav.svelte';
    import { onMount } from 'svelte';
    import { slide } from 'svelte/transition';

	let ready = false;
	onMount(() => (ready = true));
</script>

<svelte:head>
	<link rel="icon" type="image/svg" href="/assets/favicon.svg" />
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark-dimmed.min.css"
	/>
	<link rel="icon" href="/assets/favicon.svg" />
</svelte:head>

<Nav />
<div class="pt-[2rem]"/>
{#if ready}
<div class="mx-auto w-1/2 justify-center content-center mobile:w-full" transition:slide>
    <slot />
</div>
{/if}


<style global>
	:root {
		--teal: #01d8b7;
		--grey: #1a1a1a;
		--small-font: 'Fira Code', monospace;
		--big-font: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
		--box-shadow-shade: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
		--box-shadow-prominent: 0 2px 4px 0 rgba(255, 255, 255, 0.2);
	}
	body {
		background-color: #1a1a1a;
		font-family: var(--big-font);
		color: white;
	}

	h1 {
		color: white;
		text-decoration: underline;
		text-decoration-color: var(--teal);
	}
</style>
