<script lang="ts">
	import { slide } from 'svelte/transition';
</script>

<svelte:head>
	<title>About Marcus</title>
</svelte:head>
<div transition:slide class="box">
	<h1 transition:slide>About Me</h1>
	<div class="box" style="flex-direction:row;">
		<p>
			I'm an aspiring
			<span style="color:var(--teal); font-weight:bold">software engineer</span>
		</p>
		<div class="box">
		</div>
	</div>
</div>

<style>
	.box {
		display: flex;
		flex-direction: column;
		margin: auto;
		align-items: center;
		justify-content: center;
	}
</style>
