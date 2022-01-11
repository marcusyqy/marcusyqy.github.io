<script lang="ts">
	import { slide } from 'svelte/transition';
</script>

<svelte:head>
	<title>Marcus Yong Portfolio</title>
</svelte:head>

<div class="box" transition:slide>
	<div class="words">
		<p class="ini-para">Hello, I am</p>
		<p class="name">Marcus Yong.</p>
		<p class="desc">I am a software developer/engineer, game developer and hobby artist.</p>
		<div style="padding-top:2rem;">
			<a href="docs/resume.pdf" download="marcus-resume"> Resume</a>
		</div>
	</div>
	<div style="width:4rem; flex-shrink:none;" />
	<div class="profile-pic">
		<!-- svelte-ignore a11y-img-redundant-alt -->
		<img src="assets/profile.jpg" alt="profile picture here." />
	</div>
</div>

<style>
	.box {
		width: 50%;
		display: flex;
		flex-direction: row;
		/* padding-right:20rem; */
		margin: auto;
		align-items: center;
		justify-content: center;
	}

	.profile-pic {
		float: right;
	}

	img {
		width: 20rem;
		height: 20rem;
		/* height: 20rem; */
		border-radius: 50%;
		border-style: solid;
		border-color: var(--teal);
		object-fit: cover;
		object-position: 0 60%;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}

	* {
		margin: 0px;
		padding: 0px;
		text-align: left;
	}

	.words {
		width: 40%;
		min-width: 25rem;
		max-width: 50%;
		display: block;
		float: left;
	}

	.ini-para {
		padding-top: 2rem;
		font-family: var(--small-font);
		font-size: 0.8rem;
		color: var(--teal);
	}

	.name {
		font-family: var(--big-font);
		font-size: 2.5rem;
		color: white;
	}

	.desc {
		font-family: var(--big-font);
		font-size: 0.9rem;
		color: white;
		text-decoration: underline;
		text-decoration-color: var(--teal);
	}

	a {
		border: 0.1rem solid var(--teal);
		border-color: var(--teal);
		background-color: var(--grey);
		font-family: var(--small-font);
		font-size: 0.7rem;
		padding: 1rem;
		padding-left: 3rem;
		border-radius: 1rem;
		padding-right: 3rem;
		text-decoration: none;
		color: white;
	}

    @media only screen and (max-width : 767px) {
        .box{
            flex-direction: column;
        }
        .words {
            display:flex;
            justify-content:center;
        }

        .desc {
            padding-right:1rem;
            padding-left:1rem;
        }

        .profile-pic {
            padding-top:2rem;
        }

        * {
            text-align: center;
        }

    }
</style>
