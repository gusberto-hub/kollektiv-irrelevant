<script>
	const navbarItems = [
		{ name: 'Events', href: '/events' },
		{ name: 'Artists', href: '/artists' },
		{ name: 'About', href: '/about' }
	];

	import logo from '$lib/assets/logo-img.png';
	import typeLogo from '$lib/assets/schriftlogo.svg';

	let isOpen = false;
</script>

<header class="navbar justify-between z-10 fixed top-0 h-20 max-w-7xl left-1/2 -translate-x-1/2">
	<nav class="px-4 py-2">
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
	<details class="dropdown dropdown-bottom dropdown-end sm:hidden">
		<summary class="btn btn-ghost sm:hidden" tabindex="0"> Menu </summary>

		<ul
			tabindex="0"
			class="dropdown-content z-[1] shadow bg-base-100 rounded-box overflow-hidden w-52"
		>
			<!-- <ul tabIndex={0} class="menu dropdown-content mt-3 z-[1] p-2 shadow bg-secondary rounded-box w-52"> -->
			{#each navbarItems as item}
				<li class="py-4 px-4 hover:bg-secondary/60">
					<a class="" href={item.href}>
						{item.name}
					</a>
				</li>
			{/each}
		</ul>
	</details>
</header>
