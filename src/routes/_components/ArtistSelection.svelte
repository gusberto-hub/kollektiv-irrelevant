<script>
	import { InstagramLogo, SoundcloudLogo } from 'phosphor-svelte';

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
				<div class="artist-card__heading">
					<h3 class="artist-title">
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
				<div class="artist-image">
					<img class="" src={artist.artistImage?.url} alt={artist.name} />
				</div>
			</div>
		{/each}
	</div>
</div>
