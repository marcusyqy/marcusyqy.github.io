<script lang="ts">
	import Icon from 'svelte-awesome';
	import { github, linkedin, instagram } from 'svelte-awesome/icons';
	import { fade } from 'svelte/transition';
</script>

<svelte:head>
	<title>Contact Marcus Yong</title>
</svelte:head>

<div>
	<h1 transition:fade><u>Contact Me</u></h1>
	<ul transition:fade>
		<li>
			<a href="https://github.com/marcusyqy">
				<Icon data={github} style="width:2.4rem; height:2.4rem;" />
				Github
			</a>
		</li>
		<li>
			<a href="https://www.linkedin.com/in/marcus-yqy/"
				><Icon data={linkedin} style="width:2.4rem; height:2.4rem;" />LinkedIn</a
			>
		</li>
		<li>
			<a href="https://www.instagram.com/marcusyqy/"
				><Icon data={instagram} style="width:2.4rem; height:2.4rem;" />Instagram</a
			>
		</li>
	</ul>
</div>

<style>
	a {
		color: white;
	}

	h1 {
		color: white;
		text-align: center;
	}

	ul {
		list-style-type: none;
		margin: 0px;
		padding: 0px;
		/* padding-bottom: .5rem; */
		/* padding-top: .5rem; */
		/* padding-left:0rem; */
		/* padding-right:0rem; */
		overflow: hidden;
		font-size: 1rem;
		color: white;
		text-align: center;
	}
</style>
