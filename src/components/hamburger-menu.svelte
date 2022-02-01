<script>
	import BurgerButton from './hamburger-button.svelte';
	import SideMenu from './nav-side-menu.svelte';

	export let open = false;
	export let duration = 0.4;

	let burgerProps = {
		duration: duration
	};
</script>

<BurgerButton {...burgerProps} bind:open />

{#if open}
	<SideMenu>
		<slot />
	</SideMenu>
{/if}
