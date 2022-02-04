<script>
	import dayjs from 'dayjs';
	import { fade } from 'svelte/transition';
	export let title;
	export let date;
	$: dateChange = dayjs(date).format('MMM D, YYYY');
</script>

<div in:fade class="m-4">
	<h1 class="font-bold underline text-justify text-2xl font-small">
		{title} <span style="font-size:1rem">({dateChange})</span>
	</h1>
	<!--show the post html with @html-->
	<div class="dummy p-4">
		<slot />
	</div>
</div>

<style>
	.dummy :global(h1) {
		@apply pt-3 pb-2 font-bold underline text-justify text-2xl font-big;
	}
	.dummy :global(h2) {
		@apply pt-2 pb-1 font-bold text-justify text-teal text-xl font-small;
	}
	.dummy :global(h3) {
		@apply pt-1 pb-1 underline text-justify text-lg font-small;
	}
	.dummy :global(pre) {
		@apply p-4 text-justify font-small items-center justify-center;
	}
	.dummy :global(ul) {
		@apply m-4;
	}
	.dummy :global(li) {
		@apply list-disc;
	}
	.dummy :global(p) {
		@apply text-justify text-base font-big;
	}
	.dummy :global(code) {
		@apply font-small;
	}
</style>
