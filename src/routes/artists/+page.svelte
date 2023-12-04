<script>
	import ArtistCard from './ArtistCard.svelte';

	export let data;

	const { artists } = data;

	const musicArtists = artists.filter((artist) => artist.category.includes('music'));
	const fineArtsArtists = artists.filter((artist) => artist.category.includes('arts'));

	console.log(musicArtists);
</script>

<section class="grid gap-24">
	<div class="md:grid grid-cols-12 gap-4">
		<p class="col-start-4 col-span-full sm:text-xl mb-12">
			Hier sind Solothurns kreative Köpfe! Lokale Künstler, die durch das Kollektiv ihre Werke
			teilen oder bei unseren Events als DJ oder Live-Musiker auf der Bühne stehen. Entdecke die
			Macher unserer Stadt! 🎨🎶
		</p>
		<div class="row-start-2 col-start-1 col-span-3 md:sticky top-24 h-fit md:flex justify-end">
			<h1
				class="md:[writing-mode:sideways-lr] text-4xl md:text-[10rem] font-bold uppercase text-secondary/40 md:text-secondary/10 leading-none tracking-widest md:tracking-normal"
			>
				Music
			</h1>
		</div>
		<div class="col-start-4 col-end-13 flex flex-col gap-12 row-start-2">
			{#each musicArtists as artist}
				<ArtistCard {artist} />
			{/each}
		</div>
	</div>
	<div class="md:grid grid-cols-12 gap-4">
		<div class="row-start-1 col-start-1 col-span-3 md:sticky top-24 h-fit flex">
			<h1
				class="md:[writing-mode:sideways-lr] text-4xl md:text-[10rem] font-bold uppercase text-primary/40 md:text-primary/10 leading-none tracking-widest md:tracking-normal"
			>
				Arts
			</h1>
		</div>
		<div class="col-start-4 col-end-13 flex flex-col gap-12">
			{#each fineArtsArtists as artist}
				<ArtistCard {artist} />
			{/each}
		</div>
	</div>
</section>
