<script lang="ts">
    import Nav from "../components/nav.svelte";
</script>

<svelte:head>
    <link rel='icon' type='image/svg' href='/assets/favicon.svg'>
</svelte:head>

<Nav/>
<div style="max-width:500px; margin:auto;">
<slot></slot>
</div>

<style global>
    :root {
        --teal: #01D8B7;
        --grey: #1a1a1a;
        --small-font: 'Fira Code', monospace;
        --big-font: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
    }
    body {
        background-color: #1a1a1a;
        font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
        color:white;
    }
</style>
