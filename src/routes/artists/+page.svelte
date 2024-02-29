<script>
	import ArtistCard from './ArtistCard.svelte';

	export let data;

	const { artists } = data;

	const musicArtists = artists.filter((artist) => artist.category.includes('music'));
	const fineArtsArtists = artists.filter((artist) => artist.category.includes('arts'));
</script>

<section id="artist-page">
	<div class="intro-container">
		<p class="artists-about">
			Hier sind Solothurns kreative Köpfe! Lokale Künstler, die durch das Kollektiv ihre Werke
			teilen oder bei unseren Events als DJ oder Live-Musiker auf der Bühne stehen. Entdecke die
			Macher unserer Stadt! 🎨🎶
		</p>
	</div>
	<div class="category-container">
		<div class="title-container">
			<h1 class="title">Music</h1>
		</div>

		<div class="items-container">
			{#each musicArtists as artist}
				<ArtistCard {artist} />
			{/each}
		</div>
	</div>
	<div class="category-container">
		<div class="title-container">
			<h1 class="title">Arts</h1>
		</div>
		<div class="items-container">
			{#each fineArtsArtists as artist}
				<ArtistCard {artist} />
			{/each}
		</div>
	</div>
</section>
