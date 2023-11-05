<script>
	import '../app.css';
	import { browser } from '$app/environment';
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
	import { SvelteQueryDevtools } from '@tanstack/svelte-query-devtools';
	import Navbar from '../lib/Navbar.svelte';

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				enabled: browser
			}
		}
	});
</script>

<svelte:head>
	<title>Kollektiv Irrelevant</title>
</svelte:head>

<QueryClientProvider>
	<Navbar />
	<main class="p-6 pt-36">
		<slot />
	</main>
	<footer class="footer fixed bottom-0 items-center p-4 text-neutral-content">
		<!-- <aside class="items-center grid-flow-col">
			<p>Copyright © 2023 - All right reserved</p>
		</aside> -->
		<nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
			<p>insta</p>
			<p>tiktok</p>
			<p>youtube</p>
		</nav>
	</footer>
	<SvelteQueryDevtools />
</QueryClientProvider>
