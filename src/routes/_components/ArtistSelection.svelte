<script>
	import { InstagramLogo, SoundcloudLogo } from 'phosphor-svelte';

	export let artists;
</script>

<div class="category-container">
	<div class="title-container">
		<h2 class="title">featured artists</h2>
	</div>
	<div class="items-container items-container--artists">
		{#each artists as artist}
			<div class="featured-artist-card">
				<div class="featured-artist-card__heading">
					<h3 class="featured-artist-title">
						{artist.name}
					</h3>
					<div class="links">
						{#each artist.socialLinks as link}
							<a href={link.url} target="_blank">
								{#if link.name.toLowerCase() === 'soundcloud'}
									<SoundcloudLogo />
								{/if}
								{#if link.name.toLowerCase() === 'instagram'}
									<InstagramLogo />
								{/if}
							</a>
						{/each}
					</div>
				</div>
				<div class="featured-artist-image">
					<img class="" src={artist.artistImage?.url} alt={artist.name} />
				</div>
			</div>
		{/each}
		<div class="featured-artist-card more-artists-card">
			<a href="/artists" class="btn btn--md btn--primary">all artists</a>
		</div>
	</div>
</div>
