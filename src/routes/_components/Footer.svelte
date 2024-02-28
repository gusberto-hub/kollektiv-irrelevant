<script>
	import InstagramLogo from 'phosphor-svelte/lib/InstagramLogo';
	import TiktokLogo from 'phosphor-svelte/lib/TiktokLogo';
	import YoutubeLogo from 'phosphor-svelte/lib/YoutubeLogo';

	const dateToday = new Date();
	const yearToday = dateToday.getFullYear();
</script>

<footer>
	<p class="copyright-text">Copyright © {yearToday} - All rights reserved</p>
	<nav class="">
		<a
			href="https://instagram.com/kollektiv_irrelevant"
			class="btn--sm btn--outline btn--outline--blur"
			target="_blank"
		>
			<InstagramLogo />Instagram
		</a>
		<a
			href="https://instagram.com/kollektiv_irrelevant"
			class="btn--sm btn--outline btn--outline--blur"
			target="_blank"
		>
			<YoutubeLogo />Youtube
		</a>
	</nav>
</footer>
