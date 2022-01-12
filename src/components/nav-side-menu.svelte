<script>
    export let open;
    export let duration;
    export let width;
    export let padding;
    export let paddingTop;
</script>

<style>
    #container {
        position: absolute;
        /* height: 100vh; */
        top: 5rem;
        overflow-y: auto;
        background-color: var(--grey);
        color: white;
        box-shadow: var(--box-shadow-prominent);
        border-radius: 10px;
        padding-bottom:5rem;
    }

    #menu {
        text-align: center;
        display:flex;
        flex-direction:column;
        justify-content:center;
    }

</style>

<div id="container" style="width: {width}; left: {open ? '0px' : ('-' + width)}; transition: left {duration}s ease-in-out">
    <div id="menu" style="padding: {padding}; padding-top: {paddingTop};">
        <slot></slot>
    </div>
</div>

