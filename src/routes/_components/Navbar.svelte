<script>
	import logo from '$lib/assets/logo-img.png';
	import typeLogo from '$lib/assets/schriftlogo.svg';
	import { DotsSixVertical } from 'phosphor-svelte';
	import { page } from '$app/stores';
	import Footer from './Footer.svelte';

	const navbarItems = [
		{ name: 'Events', href: '/events' },
		{ name: 'Artists', href: '/artists' },
		{ name: 'About', href: '/about' }
	];

	let isOpen = false;

	const closeMenu = () => {
		setTimeout(() => (isOpen = false), 200);
		window.document.documentElement.classList.remove('nav-open');
	};

	const toggleMenu = () => {
		isOpen = !isOpen;
		console.log(window);
		window.document.documentElement.classList.toggle('nav-open');
	};

	let path;
	$: path = $page.url.pathname;

	let logoRotation;

	const rotateLogo = (e) => {
		const scrollPosition = e.target.documentElement.scrollTop;
		logoRotation = scrollPosition / 10;
	};
</script>

<svelte:window on:scroll={rotateLogo} />

<header class="navbar">
	<a class="logo-wrapper" href="/" class:active={isOpen}>
		<img
			src={logo}
			alt="kollektiv irrelevant logo"
			class="logo-image"
			style="transform: rotate({logoRotation}deg);"
			class:active={isOpen}
		/>
		<img src={typeLogo} alt="kollektiv irrelevant logo" class="logo-typo" />
	</a>
	<nav class="desktop-nav">
		<div class="nav-items__wrapper">
			{#each navbarItems as item, i}
				<a
					on:click={() => (isOpen = false)}
					href={item.href}
					style={`animation-delay: ${i * 100}ms`}
					class:active={path.includes(item.href)}
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
					<a on:click={closeMenu} href={item.href} class:active={path.includes(item.href)}>
						{item.name}
					</a>
				</li>
			{/each}
		</ul>
		<div class="mobile-nav-footer">
			<Footer />
		</div>
	</nav>
	<button
		on:click={toggleMenu}
		class="absolute top-4 right-4 z-20 sm:hidden mobile-nav-toggle"
		class:active={isOpen}
	>
		<DotsSixVertical weight="bold" class="w-8 h-8" />
	</button>
</header>
