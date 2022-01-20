<script context="module">
    export async function load({ fetch }) {
        const posts = await fetch(`posts.json`)
            .then((r) => r.json());
        return {
          props: { posts }
        }
  }
</script>

<script lang="ts">
	import { slide } from 'svelte/transition';
    export let posts;
</script>

<svelte:head>
	<title>Marcus Blog</title>
</svelte:head>

<div transition:slide class="about-me">
	<h1>Marcus Blog</h1>
    <p class="warning">Thoughts are my own.</p>
	<p class="description">Tech · Life · Food</p>
    <div>
    <p class="info">{posts.length} posts.</p>
      {#each posts as post}
        <a href={`/${post.slug}`}>
          <h2 class="title">{post.metadata.title}</h2>
          <p>{post.metadata.excerpt}</p>
        </a>
      {/each}
    </div>
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
