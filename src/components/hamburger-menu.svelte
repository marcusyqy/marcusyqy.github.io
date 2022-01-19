<script>
    import BurgerButton from './hamburger-button.svelte';
    import SideMenu from './nav-side-menu.svelte';

    export let open = false;
    export let duration = 0.4;
    export let width = '300px';
    export let padding = '25px';
    export let paddingTop = '50px';

    let burgerProps = {
        duration: duration,
    }
    let menuProps = {
        duration: duration,
        width: width,
        padding: padding,
        paddingTop: paddingTop
    }
</script>

<BurgerButton {...burgerProps} bind:open={open}/>

{#if open}
    <SideMenu {...menuProps} bind:open={open}>
        <slot></slot>
    </SideMenu>
{/if}
