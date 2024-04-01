<script>
	import { TiktokLogo } from 'phosphor-svelte';
	import InstagramLogo from 'phosphor-svelte/lib/InstagramLogo';
	import YoutubeLogo from 'phosphor-svelte/lib/YoutubeLogo';

	export let instagram = '';
	export let youtube = '';
	export let tiktok = '';

	const dateToday = new Date();
	const yearToday = dateToday.getFullYear();
</script>

<footer>
	<nav class="">
		{#if instagram}
			<a href={instagram} class="btn--sm btn--outline btn--outline--blur" target="_blank">
				<InstagramLogo />Instagram
			</a>
		{/if}
		{#if youtube}
			<a href={youtube} class="btn--sm btn--outline btn--outline--blur" target="_blank">
				<YoutubeLogo />Youtube
			</a>
		{/if}
		{#if tiktok}
			<a href={tiktok} class="btn--sm btn--outline btn--outline--blur" target="_blank">
				<TiktokLogo />TikTok
			</a>
		{/if}
	</nav>
</footer>
