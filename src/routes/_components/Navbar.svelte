<script>
	import logo from '$lib/assets/logo-img.png';
	import typeLogo from '$lib/assets/schriftlogo.svg';
	import { DotsSixVertical } from 'phosphor-svelte';
	import { page } from '$app/stores';

	const navbarItems = [
		{ name: 'Events', href: '/events' },
		{ name: 'Artists', href: '/artists' },
		{ name: 'About', href: '/about' }
	];

	let isOpen = false;

	const closeMenu = () => {
		setTimeout(() => (isOpen = false), 200);
	};

	let path;
	$: path = $page.url.pathname;
</script>

<header class="navbar">
	<a class="logo-wrapper" href="/">
		<img src={logo} alt="kollektiv irrelevant logo" class="logo-image" />
		<img src={typeLogo} alt="kollektiv irrelevant logo" class="logo-typo" />
	</a>
	<nav class="desktop-nav">
		<div class="nav-items__wrapper">
			{#each navbarItems as item, i}
				<a
					on:click={() => (isOpen = false)}
					href={item.href}
					style={`animation-delay: ${i * 100}ms`}
					class:mobile-active={path.includes(item.href)}
					class="nav-items__wrapper__item"
				>
					{item.name}
				</a>
			{/each}
		</div>
	</nav>
	<nav class={`mobile-nav ${isOpen && 'menu-open'}`}>
		<div class="mobile-nav__bg" />
		<ul class="">
			{#each navbarItems as item}
				<li>
					<a on:click={closeMenu} href={item.href} class:active={path.includes(item.href)}
						>{item.name}</a
					>
				</li>
			{/each}
		</ul>
	</nav>
	<button
		on:click={() => (isOpen = !isOpen)}
		class="absolute top-4 right-4 z-20 sm:hidden mobile-nav-toggle"
	>
		<DotsSixVertical weight="bold" class="w-8 h-8" />
	</button>
</header>
