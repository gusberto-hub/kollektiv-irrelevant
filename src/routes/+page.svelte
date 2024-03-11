<script>
	import YoutubeFullscreen from './_components/YoutubeFullscreen.svelte';
	import ArtistSelection from './_components/ArtistSelection.svelte';
	import NextEvents from './_components/NextEvents.svelte';

	export let data;
</script>

<div class="hero-container">
	<div class="hero-container__wrapper">
		<YoutubeFullscreen videoId={data.projectMetadata.homePageYoutubeId} />
		<div class="hero-container__wrapper__content">
			<h1 class="">
				<span class="">Artist Collective</span> based in Solothurn
			</h1>
			<p class="text-2xl">Platform & Network</p>
			<!-- <a class="" href="https://youtube.com">watch video</a> -->
		</div>
	</div>
</div>

<div class="index-page-section-container">
	<NextEvents events={data.events} />
	<ArtistSelection artists={data.artists} />
</div>
