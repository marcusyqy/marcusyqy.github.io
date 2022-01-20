<script context="module">
  export async function load({ params, fetch }) {
    const post = await fetch(`${params.post}.json`)
        .then((r) => r.json());
    return {
      props: { post }
    };
  }
</script>

<script>
  // post will have metadata and content
  export let post;
</script>

<!--show the post html with @html-->
{@html post.content}
