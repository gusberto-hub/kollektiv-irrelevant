<script>
	import '../app.css';
	import Navbar from './_components/Navbar.svelte';
	import InstagramLogo from 'phosphor-svelte/lib/InstagramLogo';
	import TiktokLogo from 'phosphor-svelte/lib/TiktokLogo';
	import YoutubeLogo from 'phosphor-svelte/lib/YoutubeLogo';
</script>

<svelte:head>
	<title>Kollektiv Irrelevant</title>
</svelte:head>

<div
	class="max-w-maxTotalWidth mx-auto border-white 2xl:border-x-8 transition-[border] bg-base-100"
>
	<Navbar />
	<main class="px-8">
		<slot />
	</main>
	<footer
		class="max-w-maxTotalWidth mx-auto footer fixed bottom-0 left-0 right-0 items-center py-4 px-10 text-neutral-content"
	>
		<!-- <aside class="items-center grid-flow-col">
			<p>Copyright © 2023 - All right reserved</p>
		</aside> -->
		<nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
			<a href="https://instagram.com/kollektiv_irrelevant" class="btn btn-sm btn-primary"
				><InstagramLogo />Insta</a
			>
			<a href="https://instagram.com/kollektiv_irrelevant" class="btn btn-sm btn-primary"
				><TiktokLogo />Tiktok</a
			>
			<a href="https://instagram.com/kollektiv_irrelevant" class="btn btn-sm btn-primary"
				><YoutubeLogo />Youtube</a
			>
		</nav>
	</footer>
</div>
