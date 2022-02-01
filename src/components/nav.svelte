<script lang="ts">
	import Boop from '../animations/boop.svelte';
	import NavMenu from './nav-menu.svelte';

	let openMobileMenu: boolean; // should find a better way for the components to talk to each other.
</script>

<nav
	class="sticky top-0 pl-8 pr-8 pt-8 pb-4 m-0 shadow bg-grey mobile:pr-10 mobile:pl-10 drop-shadow-2xl"
>
	<div class="flex justify-between items-center">
		<div>
			<Boop boopParams={{ scale: 1.2, timing: 200 }}>
				<a href="/" on:click={() => (openMobileMenu = false)}
					><img src="/../assets/favicon-dark.png" alt="Home" class="w-8 h-8" /></a
				></Boop
			>
		</div>
		<NavMenu bind:openMobileMenu />
	</div>
</nav>
