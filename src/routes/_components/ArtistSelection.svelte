<script>
	export let artists;
</script>

<div class="pt-24 md:grid grid-cols-12 gap-4">
	<h2
		class="col-span-3 row-start-1 text-3xl font-bold text-shadow uppercase leading-tight md:sticky top-28 h-fit"
	>
		our artists
	</h2>
	<div class="col-span-9 row-start-1 gap-8 lg:gap-12 grid grid-cols-2 lg:grid-cols-9">
		{#each artists as artist}
			<div class="lg:col-span-3 border-8">
				<h3 class="text-xl text-primary border-b-8 truncate p-4 hover:tracking-wider transition-all">
					{artist.name}
				</h3>
				<div class="aspect-square">
					<img class="object-cover h-full w-full" src={artist.artistImage?.url} alt={artist.name} />
				</div>
			</div>
		{/each}
	</div>
</div>
<div class="w-full my-20 flex justify-center">
	<a href="/artists" class="btn btn-lg btn-primary cursor-pointer">all artists</a>
</div>
