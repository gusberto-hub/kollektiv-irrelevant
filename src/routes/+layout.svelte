<script>
	import '../lib/scss/global.scss';
	import Footer from './_components/Footer.svelte';
	import Navbar from './_components/Navbar.svelte';
</script>

<svelte:head>
	<title>Kollektiv Irrelevant</title>
</svelte:head>

<div class="main-container">
	<Navbar />
	<main class="">
		<slot />
	</main>
	<div class="main-footer">
		<Footer />
	</div>
</div>

<style>
</style>
