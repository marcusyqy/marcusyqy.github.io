<script context="module">
    export async function load({fetch, params}) {
      // request post from [post].json.js endpoint
      const post = await fetch(`/posts/${params.post}.json`).then((r) => r.json());

      return {
          props: {post}
      }
    }
</script>

<style>
    :global(article) {
        padding: 4vw;
    }
</style>

<script>
    export let post;
</script>

<article>
    <h1 class="section-header">{post.attributes.title}</h1>
    {@html post.html}
</article>
