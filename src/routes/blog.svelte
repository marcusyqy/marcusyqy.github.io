<script context="module" lang="ts">
	export async function load({ fetch }) {
		const posts = await fetch(`/blog.json`).then((r) => r.json());
		return {
			props: { posts }
		};
	}
</script>

<script lang="ts">
	import { fade } from 'svelte/transition';
	export let posts;
</script>

<svelte:head>
	<title>Marcus Blog</title>
</svelte:head>

<div
	in:fade
	class="w-1/2 flex flex-col m-auto items-center justify-center text-center mobile:w-full"
>
	<h1 class="m-1 text-4xl font-big">Marcus Blog</h1>
	<p class="text-base font-thin p-0 font-small underline">Tech · Life · Food</p>
	<div>
		<p class="text-left underline font-semibold text-base">
			<span class="text-teal">{posts.length}</span> posts.
		</p>
		{#each posts as post}
			<a href={`/posts/${post.url}`}>
				<div class="m-2 p-2 border-teal border-b-2 border-dashed hover:border-2 rounded-lg">
					<h2 class="text-xl text-teal text-underline font-bold">{post.metadata.title}</h2>
					<p class="text-xs font-small">{post.metadata.date}</p>
					<p class="text-sm font-small italic">{post.metadata.description}</p>
				</div>
			</a>
		{/each}
	</div>
</div>
