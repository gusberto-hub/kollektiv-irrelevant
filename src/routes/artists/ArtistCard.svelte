<script>
	import {
		CaretDown,
		InstagramLogo,
		LinkSimple,
		SoundcloudLogo,
		YoutubeLogo,
		AppleLogo,
		SpotifyLogo
	} from 'phosphor-svelte';

	let showBio = false;

	export let artist;
</script>

<div class="artist-card">
	<div class="artist-details">
		<div class="artist-heading">
			<h3 class="artist-name">
				{artist.name}
			</h3>
			{#if artist.socialLinks.length > 0}
				<div class="links">
					{#each artist.socialLinks as link}
						<a href={link.url} target="_blank">
							{#if link.name.toLowerCase() === 'soundcloud'}
								<SoundcloudLogo />
							{:else if link.name.toLowerCase() === 'instagram'}
								<InstagramLogo />
							{:else if link.name.toLowerCase() === 'youtube'}
								<YoutubeLogo />
							{:else if link.name.toLowerCase() === 'spotify'}
								<SpotifyLogo />
							{:else if link.name.toLowerCase().includes('apple')}
								<AppleLogo />
							{:else}
								<LinkSimple />
							{/if}
						</a>
					{/each}
				</div>
			{/if}
		</div>
		<div class="artist-content">
			<div class="artist-image">
				<img class="" src={artist.artistImage?.url} alt={artist.name} />
			</div>
			<div class="artist-bio-container">
				{#if artist.artistBio}
					<button on:click={() => (showBio = !showBio)} class="btn--md btn--primary btn-bio">
						about <CaretDown />
					</button>
					<div class={`btn ${showBio ? 'active' : ''}`}>
						<p class="artist-bio-text">{artist.artistBio}</p>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>
