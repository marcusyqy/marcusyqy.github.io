<!-- Hamburger.svelte -->
<script lang="ts">
	export let open: boolean = false;
</script>

<!-- defines a CSS class `.open` when `open == true` -->
<button class:open on:click={() => (open = !open)}>
	<!-- svg with 3 lines -->
	<svg width="32" height="24">
		<line id="top" x1="0" y1="2" x2="32" y2="2" />
		<line id="middle" x1="0" y1="12" x2="32" y2="12" />
		<line id="bottom" x1="0" y1="22" x2="32" y2="22" />
	</svg>
</button>

<!-- keeping the styles in because unable to change transition without(not good enough at css :( ) -->
<style>
	svg {
		min-height: 24px;
		transition: transform 0.3s ease-in-out;
	}

	button:hover > svg line {
		stroke: var(--teal);
	}

	svg line {
		/* `currentColor` means inherit color from the text color */
		stroke: white;
		stroke-width: 3;
		transition: transform 0.3s ease-in-out;
		border-style: none;
	}

	/* adjust the Z-index, so that the icon is on top of the sidebar */
	button {
		position: sticky;
		position: -webkit-sticky;
		border-style: none;
		background-color: inherit;
		margin: 5px;
	}

	.open svg {
		transform: scale(0.7);
	}

	/* rotate the top line */
	.open #top {
		transform: translate(6px, 0px) rotate(45deg);
	}

	/* hide the middle */
	.open #middle {
		opacity: 0;
	}

	/* rotate the bottom line */
	.open #bottom {
		transform: translate(-12px, 9px) rotate(-45deg);
	}
</style>
