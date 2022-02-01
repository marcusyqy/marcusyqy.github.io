<script lang="ts">
	import { fade, slide } from 'svelte/transition';
</script>

<svelte:head>
	<title>Works</title>
</svelte:head>

<div
	in:slide
	out:fade
	class="w-1/2 flex flex-col m-auto items-center justify-center text-center mobile:w-full"
>
	<h1 class="m-1 text-4xl font-big">Work</h1>
	<p>Work in Progress...</p>
</div>
