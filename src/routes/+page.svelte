<script>
	import YoutubePlayer from './_components/YoutubePlayer.svelte';
	import ArtistSelection from './_components/ArtistSelection.svelte';
	import NextEvents from './_components/NextEvents.svelte';

	export let data;

	const { events, artists } = data;
</script>

<div class="hero min-h-screen w-screen -m-6 -mt-36">
	<img
		src="https://www.promises.com/wp-content/uploads/2017/03/Rave-Parties-Safety-and-Precautions-1200x675.jpeg"
		class="w-full h-full object-cover"
		alt="people dancing"
	/>
	<div class="w-full h-full">
		<YoutubePlayer videoId="c9VEKD9N834" />
	</div>
	<div class="hero-overlay bg-opacity-60" />
	<div class="hero-content text-center text-neutral-content">
		<div class="font-heading leading-tight">
			<h1
				class="mb-5 text-3xl lg:text-4xl font-bold hover:font-[900] hover:scale-125 transition-all text-shadow"
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
