<script>
	import '../app.css';
	// import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
	import { SvelteQueryDevtools } from '@tanstack/svelte-query-devtools';
	import Navbar from './_components/Navbar.svelte';
	import InstagramLogo from 'phosphor-svelte/lib/InstagramLogo';
	import TiktokLogo from 'phosphor-svelte/lib/TiktokLogo';
	import YoutubeLogo from 'phosphor-svelte/lib/YoutubeLogo';

	// const queryClient = new QueryClient({
	// 	defaultOptions: {
	// 		queries: {
	// 			enabled: browser
	// 		}
	// 	}
	// });
</script>

<svelte:head>
	<title>Kollektiv Irrelevant</title>
</svelte:head>

<!-- <QueryClientProvider> -->
<Navbar />
<main class="p-6 pt-36 pb-24 max-w-7xl mx-auto">
	<slot />
</main>
<footer class="footer fixed bottom-0 items-center p-4 text-neutral-content">
	<!-- <aside class="items-center grid-flow-col">
			<p>Copyright © 2023 - All right reserved</p>
		</aside> -->
	<nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
		<a href="https://instagram.com/kollektiv_irrelevant" class="btn btn-outline"
			><InstagramLogo />Insta</a
		>
		<a href="https://instagram.com/kollektiv_irrelevant" class="btn btn-outline"
			><TiktokLogo />Tiktok</a
		>
		<a href="https://instagram.com/kollektiv_irrelevant" class="btn btn-outline"
			><YoutubeLogo />Youtube</a
		>
	</nav>
</footer>
<!-- <SvelteQueryDevtools /> -->
<!-- </QueryClientProvider> -->
