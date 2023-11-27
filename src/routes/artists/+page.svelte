<script>
	import ArtistCard from './artistCard.svelte';

	export let data;

	const { artists } = data;
</script>

<div class="md:grid grid-cols-12 gap-4">
	<h1 class="font-extrabold uppercase text-3xl md:text-4xl col-span-4 col-start-1 md:sticky top-24">
		Music Artists
	</h1>
	<div class="col-start-4 col-end-13 flex flex-col gap-12">
		{#each artists as artist}
			<ArtistCard {artist} />
		{/each}
	</div>
</div>
