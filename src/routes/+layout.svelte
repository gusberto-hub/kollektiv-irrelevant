<script>
	import '../lib/scss/global.scss';
	import Footer from './_components/Footer.svelte';
	import Navbar from './_components/Navbar.svelte';

	export let data;
</script>

<svelte:head>
	<meta name="description" content={data.projectMetadata.description} />
	<link rel="stylesheet" href="node_modules/lite-youtube-embed/src/lite-yt-embed.css" />
	<script src="node_modules/lite-youtube-embed/src/lite-yt-embed.js"></script>
	<title>{data.projectMetadata.name}</title>
</svelte:head>

<div class="main-container">
	<Navbar
		youtube={data.projectMetadata.youtubeProfileUrl}
		instagram={data.projectMetadata.instagramProfileUrl}
		tiktok={data.projectMetadata.tiktokProfileUrl}
	/>
	<main class="">
		<slot />
	</main>
	<div class="main-footer">
		<Footer
			youtube={data.projectMetadata.youtubeProfileUrl}
			instagram={data.projectMetadata.instagramProfileUrl}
			tiktok={data.projectMetadata.tiktokProfileUrl}
		/>
	</div>
</div>

<style>
</style>
