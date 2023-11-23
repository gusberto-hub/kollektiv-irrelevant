<script>
	import { SoundcloudLogo } from 'phosphor-svelte';
	import ArtistSelection from '../_components/ArtistSelection.svelte';

	export let data;

	const { artists } = data;

	console.log(artists);
</script>

<div class="md:grid grid-cols-12 gap-4">
	<h1 class="font-extrabold uppercase text-3xl md:text-4xl col-span-4 col-start-1 md:sticky top-24">
		Music Artists
	</h1>
	<div class="col-start-4 col-end-13 flex flex-col gap-12">
		{#each artists as artist}
			<div class="">
				<h3 class="text-2xl text-primary border-b-8 mb-4">
					{artist.name}
				</h3>
				<div class="grid sm:grid-cols-9 gap-4">
					<img
						class="object-cover w-full sm:col-span-4 aspect-square"
						src={artist.artistImage?.url}
						alt={artist.name}
					/>
					<div class="sm:col-span-5">
						<p class="sm:text-xl">{artist.artistBio}</p>
						<!-- {#if artist.socialLinks}
							{#each artists.socialLinks as link}
								<p>{link.name}</p>
							{/each}
						{/if} -->
						{#if artist.social?.soundCloudUrl}
							<a
								target="_blank"
								class="btn btn-primary sm:btn-lg"
								href={artist.social.soundCloudUrl}><SoundcloudLogo /> Soundcloud</a
							>
						{/if}
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
