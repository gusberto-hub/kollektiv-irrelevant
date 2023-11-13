<script>
	export let data;

	const { artists } = data;
</script>

<div class="md:grid grid-cols-12 gap-4">
	<h1 class="font-extrabold uppercase text-4xl">Artists</h1>
	<div class="col-span-9 row-start-1 gap-8 lg:gap-12 grid grid-cols-2 lg:grid-cols-9">
		{#each artists as artist}
			<div class="lg:col-span-3 border-8">
				<h3
					class="text-xl text-primary border-b-8 truncate p-4 hover:tracking-wider transition-all"
				>
					{artist.name}
				</h3>
				<div class="aspect-square">
					<img class="object-cover h-full w-full" src={artist.artistImage?.url} alt={artist.name} />
				</div>
			</div>
		{/each}
	</div>
</div>
