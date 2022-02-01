<script lang="ts">
	import Boop from '../animations/boop.svelte';
	import Hamburger from './hamburger-menu.svelte';
	import MediaQuery from '../lib/media-query.svelte';

	export let openMobileMenu: boolean = false;

	// Mobile menu click event handler
	const handleMobileIconClick = () => {
		openMobileMenu = !openMobileMenu;
	};
</script>

<div>
	<MediaQuery query="(max-width: 767px)" let:matches>
		{#if matches}
			<Hamburger bind:open={openMobileMenu}>
				<a class="pt-12 text-base hover:text-teal" on:click={handleMobileIconClick} href="/about"
					><b>About Me</b></a
				>
				<a class="pt-12 text-base hover:text-teal" on:click={handleMobileIconClick} href="/work"
					><b>Work</b></a
				>
				<a class="pt-12 text-base  hover:text-teal" on:click={handleMobileIconClick} href="/blog"
					><b>Blog</b></a
				>
				<a
					class="pt-12 text-base hover:text-teal"
					on:click={handleMobileIconClick}
					href="/contact-me"><b>Contact</b></a
				>
			</Hamburger>
		{:else}
			<ul class="flex list-none p-2 overflow-hidden text-base justify-between items-center">
				<li class="float-right ml-8 font-extralight text-sm font-small">
					<Boop boopParams={{ scale: 1.1, timing: 200 }}
						><a class="hover:text-teal" href="/about"><b>About Me</b></a></Boop
					>
				</li>
				<li class="float-right ml-8 font-extralight text-sm font-small">
					<Boop boopParams={{ scale: 1.1, timing: 200 }}
						><a class="hover:text-teal" href="/work"><b>Work</b></a></Boop
					>
				</li>
				<li class="float-right ml-8 font-extralight text-sm font-small">
					<Boop boopParams={{ scale: 1.1, timing: 200 }}
						><a class="hover:text-teal" href="/blog"><b>Blog</b></a></Boop
					>
				</li>
				<li class="float-right ml-8 font-extralight text-sm font-small">
					<Boop boopParams={{ scale: 1.1, timing: 200 }}
						><a class="hover:text-teal" href="/contact-me"><b>Contact</b></a></Boop
					>
				</li>
			</ul>
		{/if}
	</MediaQuery>
</div>
