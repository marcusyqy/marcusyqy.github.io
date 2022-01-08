<script lang="ts">
	import { onMount } from 'svelte';
	import Icon from 'svelte-awesome';
	import { github, linkedin, instagram } from 'svelte-awesome/icons';
	/* let showMobileType: Boolean = false; */
</script>

<nav>
	<ul class="left-side">
		<li><a href="/"><img src="assets/favicon.svg" alt="Home" class="logo" /></a></li>
	</ul>
	<ul class="right-side">
		<li class="letters"><a href="/about"><b>About Me</b></a></li>
		<li class="letters"><a href="/work"><b>Work</b></a></li>
		<li class="letters"><a href="/blog"><b>Blog</b></a></li>
		<li class="letters"><a href="/contact-me"><b>Contact Me</b></a></li>
	</ul>
</nav>

<style>
	nav {
		height: 2.4rem;
		width: 100%;
		padding: 0rem;
		margin: 0rem;
		height: 3rem;
	}

    a {
        color : white;
    }

	ul {
		list-style-type: none;
        margin: 0px;
		padding: .5rem;
		overflow: hidden;
        font-size: 1rem;
        color: white;
		/* background-color: #333333; */
	}

	li {
		float: left;
	}

	.letters {
        padding: .4rem;
	}

	.logo {
		width: 2.4rem;
		height: 2rem;
	}

	.left-side {
		float: left;
	}

	.right-side {
		float: right;
	}
</style>
