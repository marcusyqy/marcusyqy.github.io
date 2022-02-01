<script>
	import { fly } from 'svelte/transition';
</script>

<div
	class="fixed h-screen top-4 overflow-y-auto rounded-xl text-center right-0 shadow shadow-2xl w-80"
	transition:fly={{ x: 250, opacity: 1 }}
>
	<div class="pt-12 p-6 text-center flex flex-col justify-center">
		<slot />
	</div>
</div>
