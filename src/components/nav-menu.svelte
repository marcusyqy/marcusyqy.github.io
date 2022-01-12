<script lang="ts">
	import { onMount } from 'svelte';
	import Boop from '../animations/boop.svelte';
	import Hamburger from './hamburger-menu.svelte';
	import MediaQuery from '../helpers/media-query.svelte';

	let showNormalMenu: boolean = false;
	let openMobileMenu: boolean = false;

	// Mobile menu click event handler
	const handleMobileIconClick = () => {
		openMobileMenu = !openMobileMenu;
	};

	// Media match query handler
	const mediaQueryHandler = (e: MediaQueryListEvent) => {
		// Reset mobile state
		if (!e.matches) {
			showNormalMenu = true;
			openMobileMenu = false;
		} else {
			showNormalMenu = false;
		}
	};

	onMount(() => {
		const mediaListener = window.matchMedia('(max-width: 767px)');
		mediaListener.addListener(mediaQueryHandler);
	});
</script>

<div>
	<MediaQuery query="(max-width: 767px)" let:matches>
		{#if matches}
			<Hamburger bind:open={openMobileMenu}>
				<a style="padding-top:50px;font-size=1rem;" on:click={handleMobileIconClick} href="/about"
					><b>About Me</b></a
				>
				<a style="padding-top:50px;font-size=1rem;" on:click={handleMobileIconClick} href="/work"
					><b>Work</b></a
				>
				<a style="padding-top:50px;font-size=1rem;" on:click={handleMobileIconClick} href="/blog"
					><b>Blog</b></a
				>
				<a
					style="padding-top:50px;font-size=1rem;"
					on:click={handleMobileIconClick}
					href="/contact-me"><b>Contact</b></a
				>
			</Hamburger>
		{:else}
			<ul class="nav-menu">
				<li class="letters">
					<Boop boopParams={{ scale: 1.1, timing: 200 }}><a href="/about"><b>About Me</b></a></Boop>
				</li>
				<li class="letters">
					<Boop boopParams={{ scale: 1.1, timing: 200 }}><a href="/work"><b>Work</b></a></Boop>
				</li>
				<li class="letters">
					<Boop boopParams={{ scale: 1.1, timing: 200 }}><a href="/blog"><b>Blog</b></a></Boop>
				</li>
				<li class="letters">
					<Boop boopParams={{ scale: 1.1, timing: 200 }}
						><a href="/contact-me"><b>Contact</b></a></Boop
					>
				</li>
			</ul>
		{/if}
	</MediaQuery>
</div>

<style>
	.nav-menu {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.bar {
		display: block;
		width: 25px;
		height: 3px;
		margin: 5px auto;
		-webkit-transition: all 0.3s ease-in-out;
		transition: all 0.3s ease-in-out;
		background-color: #101010;
	}

	ul {
		list-style-type: none;
		margin: 0px;
		padding: 0.5rem;
		overflow: hidden;
		font-size: 1rem;
		color: inherit;
	}

	li {
		float: left;
		color: inherit;
	}

	.letters {
		margin-left: 2rem;
		/* padding: 0.4rem; */
		/* padding-right: 2rem; */
		color: white;
		font-weight: 200;
		font-size: 0.8rem;
		font-family: var(--small-font);
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	a:hover {
		color: var(--teal);
	}

	@media only screen and (max-width: 768px) {
		/* .nav-menu { */
		/*     position: fixed; */
		/*     left: -100%; */
		/*     top: 5rem; */
		/*     flex-direction: column; */
		/*     background-color: #fff; */
		/*     width: 100%; */
		/*     border-radius: 10px; */
		/*     text-align: center; */
		/*     transition: 0.3s; */
		/*     box-shadow: */
		/*         0 10px 27px rgba(0, 0, 0, 0.05); */
		/* } */

		.letters {
			margin: 2.5rem 0;
		}
	}
</style>
