<script lang="ts">
	import { typewriter } from '../animations/typewriter';
</script>

<svelte:head>
	<title>Marcus Yong Portfolio</title>
</svelte:head>

<div class="flex flex-row content-center mobile:flex-col-reverse m-0 p-0">
    <div class="text-left block float-left m-3 mobile:text-center mobile:flex mobile:content-center mobile:items-center mobile:flex-col">
        <p class="pt-8 font-small text-sm text-teal">Hello, I am</p>
        <p class="font-big text-4xl text-white" transition:typewriter>Marcus Yong.</p>
        <p class="decoration-teal font-big text-sm text-white underline">I am a software developer/engineer, game developer and hobby artist.</p>
        <div class="pt-8">
            <a class="border-teal bg-grey font-small text-sm p-4 pr-12 pl-12" href="docs/resume.pdf" download="marcus-resume">Resume</a>
        </div>
    </div>
    <div class="w-24 flex-shrink-0" />
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img class="flex-shrink-0 w-80 h-80 mobile:w-60 block mobile:h-60 shadow-sm rounded-full object-cover border-teal border-solid mobile:justify-center mobile:m-auto mobile:flex-shrink" src="assets/profile.jpg" alt="profile picture here." />
</div>

<style>
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
</style>
