<script lang="ts">
	import Boop from '../animations/boop.svelte';
    import NavMenu from './nav-menu.svelte'
    let openMobileMenu : boolean;
</script>


<nav>
	<div class="flexibox">
		<div>
            <Boop boopParams={{ scale: 1.2, timing: 200 }}>
                <a href="/" on:click={() => openMobileMenu = false}><img src="/../assets/favicon-dark.png" alt="Home" class="logo" /></a></Boop
                >
		</div>
        <NavMenu bind:openMobileMenu/>
	</div>
</nav>

<style>
	nav {
		position: -webkit-sticky; /*[> Safari <]*/
		position: sticky;
		top: 0;
		width: 100%-4rem;
		padding-left: 2rem;
		padding-right: 2rem;
		padding-top: 1rem;
		padding-bottom: 1rem;
		margin: 0rem;
		height: 3rem;
        box-shadow: var(--box-shadow-shade);
		background-color: var(--grey);
	}

	.flexibox {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.logo {
		width: 2rem;
		height: 2rem;
	}

    @media only screen and (max-width : 767px) {
        nav {
            padding-right:40px;
            padding-left:40px;
        }
    }
</style>
