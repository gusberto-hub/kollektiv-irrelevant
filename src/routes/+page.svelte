<script>
	import YoutubeFullscreen from './_components/YoutubeFullscreen.svelte';
	import ArtistSelection from './_components/ArtistSelection.svelte';
	import NextEvents from './_components/NextEvents.svelte';

	export let data;

	const { events, artists } = data;
</script>

<div class="">
	<div class="-mx-8 md:aspect-video h-screen md:h-min overflow-hidden relative">
		<YoutubeFullscreen videoId="xSNn4EmtumE" />
		<div
			class="font-heading leading-tight absolute inset-0 flex flex-col items-center justify-center"
		>
			<h1
				class="mb-5 text-3xl lg:text-4xl font-bold hover:font-[900] hover:scale-125 transition-all"
			>
				<span class="uppercase block font-condensed">Artist Collective</span> based in Solothurn
			</h1>
			<p class="mb-5 text-2xl">Platform & Network</p>
			<a class="btn btn-lg btn-primary" href="https://youtube.com">watch video</a>
		</div>
	</div>
</div>

<NextEvents {events} />

<ArtistSelection {artists} />
