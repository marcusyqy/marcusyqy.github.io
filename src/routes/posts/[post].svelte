<script context="module">
	export async function load({ params, fetch }) {
		const post = await fetch(`${params.post}.json`).then((r) => r.json());
		return {
			props: { post }
		};
	}
</script>

<script>
	// post will have metadata and content
	export let post;
</script>

<div class="post">
	<h1 class="section-header">
		{post.metadata.title} <span style="font-size:1rem">({post.metadata.date})</span>
	</h1>
	<!--show the post html with @html-->
	{@html post.content}
</div>

<style>
	.post {
		display: flex;
		justify-content: center;
		margin: auto;
		flex-direction: column;
		width: 50%;
	}
</style>
