<script>
	import { ArrowSquareOut, CaretDown } from 'phosphor-svelte';
	import { flip } from 'svelte/animate';

	let showBio = false;

	export let artist;
</script>

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
		<div class="sm:col-span-5 flex flex-col gap-4">
			{#if artist.socialLinks.length > 0}
				<div class="flex flex-col gap-4 items-start">
					<button class="btn w-fit btn-secondary btn-sm flex">socials</button>
					{#each artist.socialLinks as link}
						<a class="link flex gap-2 items-center text-xl" href={link.url} target="_blank">
							<ArrowSquareOut />{link.name}
						</a>
					{/each}
				</div>
			{/if}
			{#if artist.artistBio}
				<button on:click={() => (showBio = !showBio)} class="btn w-fit btn-primary btn-sm flex"
					>about <CaretDown /></button
				>
				<div
					class={`grid transition-[grid-template-rows] ${
						showBio ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
					}`}
				>
					<p class="sm:text-base overflow-hidden">{artist.artistBio}</p>
				</div>
			{/if}
		</div>
	</div>
</div>
