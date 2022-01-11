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

<style>
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
		font-family: var(--small-font);
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	a:hover {
		color: var(--teal);
	}
</style>

