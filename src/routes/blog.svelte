<script lang="ts">
	import { slide } from 'svelte/transition';

</script>

<svelte:head>
	<title>Marcus Blog</title>
</svelte:head>

<div transition:slide class="about-me">
	<h1>Marcus Blog</h1>
    <p class="warning">Thoughts are my own.</p>
	<p class="description">Tech · Life · Food</p>
</div>

<style>

    .about-me {
        width:50%;
		display: flex;
		flex-direction: column;
		margin: auto;
		align-items: center;
		justify-content: center;
    }

    h1 {
        margin:0.2rem;
    }

	.description {
		font-size: 1.0rem;
        font-weight:lighter;
        padding:0rem;
        font-family: var(--small-font);
        text-decoration:underline;
    }

	.warning {
        font-family: var(--small-font);
		font-size: 0.8rem;
        color: var(--teal);
        font-weight:bold;
        margin:0.1rem;
        padding:0rem;
	}


</style>
