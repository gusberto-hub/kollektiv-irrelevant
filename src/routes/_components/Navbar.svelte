<script>
	const navbarItems = [
		{ name: 'Events', href: '/events' },
		{ name: 'Artists', href: '/artists' },
		{ name: 'About', href: '/about' }
	];

	import logo from '$lib/assets/logo-img.png';
	import typeLogo from '$lib/assets/schriftlogo.svg';
	import { DotsSixVertical } from 'phosphor-svelte';

	let isOpen = false;
</script>

<header
	class="navbar justify-between z-10 fixed top-0 h-20 max-w-maxTotalWidth left-1/2 -translate-x-1/2"
>
	<nav class="px-4 py-2 z-10">
		<a class="" href="/">
			<img
				src={logo}
				alt="kollektiv irrelevant logo"
				class="h-12 w-12 mr-2 inline animate-spin-slow"
			/>
			<img src={typeLogo} alt="kollektiv irrelevant logo" class="h-12 inline" />
		</a>
	</nav>
	<nav class="hidden sm:flex">
		<ul class="menu menu-horizontal menu-lg uppercase px-1">
			{#each navbarItems as item}
				<li><a href={item.href}>{item.name}</a></li>
			{/each}
		</ul>
	</nav>

	<button on:click={() => (isOpen = !isOpen)} class="absolute top-4 right-4 z-20 sm:hidden"
		><DotsSixVertical weight="bold" class="w-8 h-8" /></button
	>
	<div
		class={`sm:hidden bg-base-100/80 backdrop-blur-lg absolute transition-all w-screen h-screen top-0 left-0 text-base-content flex flex-col ${
			isOpen ? 'opacity-100 menu-open' : 'opacity-0 pointer-events-none duration-300'
		}`}
	>
		<div class="text-3xl p-4 flex flex-col w-full font-heading gap-4 font-bold pt-28 ml-[8.4rem]">
			{#each navbarItems as item, i}
				<a
					on:click={() => (isOpen = false)}
					href={item.href}
					style={`animation-delay: ${i * 100}ms`}>{item.name}</a
				>
			{/each}
		</div>
	</div>
</header>

<style>
	.menu-open a {
		animation: fadeIn 200ms ease-out backwards;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateX(-2em);
		}
	}
</style>
