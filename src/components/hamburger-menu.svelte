<script>
	import BurgerButton from './hamburger-button.svelte';
	import SideMenu from './nav-side-menu.svelte';

	export let open = false;
</script>

<BurgerButton bind:open />

{#if open}
	<SideMenu>
		<slot />
	</SideMenu>
{/if}
