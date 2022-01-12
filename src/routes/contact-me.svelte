<script lang="ts">
	import Icon from 'svelte-awesome';
	import { github, linkedin, instagram, twitter, twitch} from 'svelte-awesome/icons';
	import { fade } from 'svelte/transition';
	import BoopAction from '../animations/boop.svelte';
</script>

<svelte:head>
	<title>Contact Marcus Yong</title>
</svelte:head>

<div transition:fade class="overall">
	<h1>Contact Me</h1>
    <div style="display:flex; flex-direction:column; justify-content:center;">
        <div style="text-align:center;">
            <a href="https://github.com/marcusyqy">
                <Icon data={github} style="width:2.4rem; height:2.4rem;" />
            </a>
            <a href="https://www.linkedin.com/in/marcus-yqy/"
                ><Icon data={linkedin} style="width:2.4rem; height:2.4rem;" /></a
            >
        </div>
        <div style="text-align:center;">
            <a href="https://www.instagram.com/marcusyqy/"
                ><Icon data={instagram} style="width:2.4rem; height:2.4rem;" /></a
            >
            <a href="https://twitter.com/marcusyqy/"
                ><Icon data={twitter} style="width:2.4rem; height:2.4rem;" /></a
            >
            <a href="https://twitch.tv/marcusyqy/"
                ><Icon data={twitch} style="width:2.4rem; height:2.4rem;" /></a
            >
        </div>
    </div>
</div>

<style>
    .overall {
        width: 50%;
        margin:auto;
    }

	a {
        padding: 0.2rem;
        font-size: 0.4rem;
		margin: 0px;
		overflow: hidden;
        color:white;
	}

    a:hover {
        color: var(--teal);
    }

    h1 {
        text-align:center;
    }
</style>
