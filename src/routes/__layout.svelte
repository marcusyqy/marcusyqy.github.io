<script lang="ts">
    import Nav from "../components/nav.svelte";
</script>

<svelte:head>
    <link rel='icon' type='image/svg' href='/assets/favicon.svg'>
</svelte:head>

<Nav/>
<div style="padding-top:2rem;"></div>
<slot></slot>

<style global>
    :root {
        --teal: #01D8B7;
        --grey: #1a1a1a;
        --small-font: 'Fira Code', monospace;
        --big-font: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
        --box-shadow-shade: 0 2px 4px 0 rgba(0,0,0,.2);
        --box-shadow-prominent: 0 2px 4px 0 rgba(255,255,255,.2);
    }
    body {
        background-color: #1a1a1a;
        font-family: var(--big-font);
        color:white;
    }

	h1 {
		color: white;
        text-decoration: underline;
        text-decoration-color: var(--teal);
	}

</style>
