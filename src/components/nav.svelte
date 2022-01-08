<script lang="ts">
	import { onMount } from 'svelte';
	import Icon from 'svelte-awesome';
	import { github, linkedin, instagram } from 'svelte-awesome/icons';
	/* let showMobileType: Boolean = false; */
</script>

<nav>
	<ul class="left-side">
		<li><a href="/"><img src="assets/favicon.png" alt="Home" class="logo" /></a></li>
		<li><a href="/about"><b>About</b></a></li>
	</ul>
	<ul class="right-side">
		<li>
			<a href="https://github.com/marcusyqy"
				><Icon data={github} style="width:2.4rem; height:2.4rem;" /></a
			>
		</li>
		<li>
			<a href="https://www.linkedin.com/in/marcus-yqy/"
				><Icon data={linkedin} style="width:2.4rem; height:2.4rem;" /></a
			>
		</li>
		<li>
			<a href="https://www.instagram.com/marcusyqy/"
				><Icon data={instagram} style="width:2.4rem; height:2.4rem;" /></a
			>
		</li>
	</ul>
</nav>

<style>
    nav {
        display:box;
    }

	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		overflow: hidden;
		/* background-color: #333333; */
        font-size: 2rem;
	}

    li {
      float: left;
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
