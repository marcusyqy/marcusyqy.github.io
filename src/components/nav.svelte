<script lang="ts">
	import { onMount } from 'svelte';
	import Boop from '../animations/boop.svelte';

	/* let showMobileMenu: Boolean = false; */
	/* // Mobile menu click event handler */
	/* const handleMobileIconClick = () => (showMobileMenu = !showMobileMenu); */
	/*  */
	/* // Media match query handler */
	/* const mediaQueryHandler = (e) => { */
	/*     // Reset mobile state */
	/*     if (!e.matches) { */
	/*         showMobileMenu = false; */
	/*     } */
	/* }; */
	/*  */
	/* onMount(() => { */
	/*     const mediaListener = window.matchMedia('(max-width: 767px)'); */
	/*     mediaListener.addListener(mediaQueryHandler); */
	/* }); */
</script>

<nav>
	<div class="flexibox">
		<div>
			<ul>
				<li style=":0.1rem;">
					<Boop boopParams={{ scale: 1.2, timing: 200 }}>
						<a href="/"><img src="assets/favicon-dark.png" alt="Home" class="logo" /></a></Boop
					>
				</li>
			</ul>
		</div>
		<div>
			<ul>
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
		</div>
	</div>
</nav>

<style>
	nav {
		position: -webkit-sticky; /*[> Safari <]*/
		position: sticky;
		top: 0;
		width: 100%-4rem;
		padding-left: 2rem;
		padding-right: 2rem;
		padding-top: 1rem;
		padding-bottom: 1rem;
		margin: 0rem;
		height: 3rem;
		/* border-bottom: 0.1rem solid rgba(0.8,0.8,0.8,1.0); */
		/* border-bottom: 0.1rem solid rgba(0, 0, 0, 0.4); */
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
		background-color: var(--grey);
	}

	.flexibox {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	a {
		color: inherit;
		text-decoration: none;
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
		padding: 0.4rem;
		padding-right: 2rem;
		color: white;
		font-weight: 200;
		font-size: 0.8rem;
		/* font-family: 'Fira Code', monospace; */
		font-family: var(--small-font);
	}

	a:hover {
		color: var(--teal);
	}

	.logo {
		width: 2rem;
		height: 2rem;
	}
</style>
