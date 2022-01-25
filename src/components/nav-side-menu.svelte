<script>
	export let width;
	export let padding;
	export let paddingTop;

	import { fly } from 'svelte/transition';
</script>

<div id="container" style="width: {width};" transition:fly={{ x: 250, opacity: 1 }}>
	<div id="menu" style="padding: {padding}; padding-top: {paddingTop};">
		<slot />
	</div>
</div>

<style>
	#container {
		position: fixed;
		height: 100vh;
		top: 5rem;
		overflow-y: auto;
		background-color: var(--grey);
		color: white;
		box-shadow: var(--box-shadow-prominent);
		border-radius: 10px;
		text-align: center;
		height: 100%;
		right: 0;
		overflow-y: auto;
	}

	#menu {
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	/* left: {open ? '0px' : ('-' + width)}; transition: left {duration}s ease-in-out */
</style>
