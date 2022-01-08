<script lang="ts">
	import Icon from 'svelte-awesome';
	import { github, linkedin, instagram } from 'svelte-awesome/icons';
	import { fade } from 'svelte/transition';
	import BoopAction from '../components/boop.svelte';
</script>

<svelte:head>
	<title>Contact Marcus Yong</title>
</svelte:head>

<div transition:fade>
	<h1><u>Contact Me</u></h1>
    <div style="text-align:center;">
        <BoopAction boopParams={{ y: 5, timing: 200}}>
            <a href="https://github.com/marcusyqy">
                <Icon data={github} style="width:2.4rem; height:2.4rem;" />
            </a>
        </BoopAction>
        <BoopAction boopParams={{ y: 5, timing: 200}}>
            <a href="https://www.linkedin.com/in/marcus-yqy/"
                ><Icon data={linkedin} style="width:2.4rem; height:2.4rem;" /></a
            >
        </BoopAction>
        <BoopAction boopParams={{ y: 5, timing: 200}}>
            <a href="https://www.instagram.com/marcusyqy/"
                ><Icon data={instagram} style="width:2.4rem; height:2.4rem;" /></a
            >
        </BoopAction>
    </div>
</div>

<style>
	a {
        padding: 0.2rem;
        font-size: 0.4rem;
		margin: 0px;
		overflow: hidden;
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
