<script lang="ts">
    import Nav from "../components/nav.svelte";
</script>

<svelte:head>
    <link rel='icon' type='image/svg' href='/assets/favicon.svg'>
</svelte:head>

<Nav/>
<slot></slot>

<style global>
    * {
        font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
        color: white;
    }
    body {
        background-color: rgba(0,0,0,0.8);
    }
</style>
