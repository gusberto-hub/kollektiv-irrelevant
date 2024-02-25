<script>
	export let artists;
</script>

<div class="category-container">
	<div class="title-container">
		<h2 class="title">our artists</h2>
		<p class="category-description">
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident eligendi beatae quo et
			fugiat nulla doloribus? Inventore modi hic quia?
		</p>
		<a href="/artists" class="btn btn--md btn--primary">all artists</a>
	</div>
	<div class="items-container items-container--artists">
		{#each artists as artist}
			<div class="artist-card">
				<h3 class="artist-title">
					{artist.name}
				</h3>
				<div class="artist-image">
					<img class="" src={artist.artistImage?.url} alt={artist.name} />
				</div>
			</div>
		{/each}
	</div>
</div>
