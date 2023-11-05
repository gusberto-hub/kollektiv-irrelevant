<script>
	export let artists;
	console.log(artists);
</script>

<div class="pt-24">
	<h2 class="mb-5 text-5xl font-bold text-shadow uppercase">Unsere Artists</h2>
	<div class="grid grid-cols-3 gap-4">
		{#each artists as artist}
			<div class="card bg-primary/10">
				<img class="card-title" src={artist.artistImage?.url} alt={artist.name} />
				<p class="card-body card-title">{artist.name}</p>
			</div>
		{/each}
	</div>
	<div class="flex justify-center">
		<a class="btn btn-accent" href="/artists">explore our artists</a>
	</div>
</div>
