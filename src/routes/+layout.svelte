<script>
	// import '../app.css';
	import '../lib/scss/global.scss';
	import Navbar from './_components/Navbar.svelte';
	import InstagramLogo from 'phosphor-svelte/lib/InstagramLogo';
	import TiktokLogo from 'phosphor-svelte/lib/TiktokLogo';
	import YoutubeLogo from 'phosphor-svelte/lib/YoutubeLogo';
</script>

<svelte:head>
	<title>Kollektiv Irrelevant</title>
</svelte:head>

<div class="main-container">
	<Navbar />
	<main class="">
		<slot />
	</main>
	<footer>
		<!-- <aside class="items-center grid-flow-col">
			<p>Copyright © 2023 - All right reserved</p>
		</aside> -->
		<nav class="">
			<a
				href="https://instagram.com/kollektiv_irrelevant"
				class="btn--sm btn--outline btn--outline--blur"
			>
				<InstagramLogo />Insta
			</a>
			<a
				href="https://instagram.com/kollektiv_irrelevant"
				class="btn--sm btn--outline btn--outline--blur"><TiktokLogo />Tiktok</a
			>
			<a
				href="https://instagram.com/kollektiv_irrelevant"
				class="btn--sm btn--outline btn--outline--blur"><YoutubeLogo />Youtube</a
			>
		</nav>
	</footer>
</div>

<style>
</style>
