<script>
	import '../lib/scss/global.scss';
	import logo from '$lib/assets/logo-img.png';
	import typeLogo from '$lib/assets/schriftlogo.svg';
	import YoutubeFullscreen from './_components/YoutubeFullscreen.svelte';
	import { InstagramLogo } from 'phosphor-svelte';

	export let data;
</script>

<main>
	<div class="logo-container">
		<img src={logo} alt="kollektiv irrelevant logo" class="logo-image" />
		<img src={typeLogo} alt="kollektiv irrelevant logo" class="logo-typo" />
	</div>
	<div class="hero-container">
		<YoutubeFullscreen videoId={data.projectMetadata.homePageYoutubeId} />
	</div>
	<div class="introduction-container">
		<h1 class="">more coming soon <br /></h1>
		<a href={data.projectMetadata.instagramProfileUrl}>
			<button class="btn--md btn--primary"><InstagramLogo /> Instagram </button>
		</a>
	</div>
</main>

<style lang="scss">
	main {
		height: 100svh;
		width: 100vw;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 2rem;
	}

	.logo-container {
		display: flex;
		gap: 4%;
		height: clamp(5rem, 18vw, 10rem);
		width: max-content;

		.logo-image {
			aspect-ratio: 1/1;
			height: 100%;
		}
		.logo-typo {
			height: 100%;
		}
	}

	.introduction-container {
		border-top: 8px solid $white;
		padding-top: 1rem;
		text-align: center;
		h1 {
			color: $primary;
			margin-bottom: 1rem;
		}
	}

	.hero-container {
		display: flex;
		justify-content: center;
		align-items: center;

		position: fixed;
		inset: 0;
		z-index: -1;
	}
</style>
