<script>
	const navbarItems = [
		{ name: 'Events', href: '/events' },
		{ name: 'Artists', href: '/artists' },
		{ name: 'About', href: '/about' }
	];

	import logo from '$lib/assets/logo.png';
	import typeLogo from '$lib/assets/schriftlogo.svg';
</script>

<header class="navbar z-10 fixed top-0">
	<nav class="navbar-start p-4">
		<div class="dropdown">
			<!-- <label tabIndex={0} class="btn btn-ghost sm:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/>
				</svg>
			</label> -->
			<ul
				tabIndex={0}
				class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
			>
				{#each navbarItems as item}
					<li>
						<a href={item.href}>
							{item.name}
						</a>
					</li>
				{/each}
			</ul>
		</div>
		<a class="text-bases font-mono font-bold mix-blend-difference" href="/">
			<img src={logo} alt="kollektiv irrelevant logo" class="h-10 w-10 inline animate-spin-slow" />
			<img src={typeLogo} alt="kollektiv irrelevant logo" class="h-10 inline" />
		</a>
	</nav>
	<nav class="navbar-end hidden sm:flex">
		<ul class="menu menu-horizontal px-1">
			{#each navbarItems as item}
				<li><a href={item.href}>{item.name}</a></li>
			{/each}
		</ul>
	</nav>
</header>
