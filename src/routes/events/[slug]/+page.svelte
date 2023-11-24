<script>
	import formatDateRange from '../../../helpers/formatDateRange.js';
	import SvelteMarkdown from 'svelte-markdown';
	import ArtistSelection from '../../_components/ArtistSelection.svelte';
	export let data;

	const { event } = data;
</script>

<div class="flex flex-col gap-8 p-8">
	<div class="col-start-4 col-end-13 lg:grid grid-cols-9">
		<div class="lg:border-r-8 col-span-4">
			<div class="pr-12 hidden lg:block sticky top-40">
				<img class="w-full" alt={event.title} src={event.flyerImage?.url} />
			</div>
		</div>
		<div class="lg:col-span-5 pl-8 lg:border-t-8 lg:border-none hyphens-auto">
			<h2 class="font-bold text-3xl leading-tight text-primary">
				{formatDateRange(event.startDate, event.endDate)}
			</h2>
			<h1 class="text-3xl lg:text-4xl font-bold leading-[1] uppercase mb-4">{event.title}</h1>

			<div>
				{#if event.locationUrl}
					<a href={event.locationUrl} class="link" target="_blank">
						<h3 class="font-bold lg:text-2xl">{event.location}</h3>
					</a>
				{:else}
					<h3 class="font-bold lg:text-2xl">{event.location}</h3>
				{/if}
			</div>
			<div class="mt-8">
				{#if event.ticketsLink}
					<a class="btn btn-secondary btn-lg" href={event.ticketsLink} target="_blank">Tickets</a>
				{/if}
			</div>
			<div class="[&>p]:mb-4">
				<SvelteMarkdown source={event.aboutEvent} />
			</div>
			<!-- <div class="[&>p]:mb-4 text-2xl">
				<span class="font-bold">Line Up</span>
				<SvelteMarkdown source={event.lineUp} />
			</div> -->
			<div class="flex flex-col gap-16">
				{#each event.artists as artist}
					<div class="flex gap-4">
						<p class="text-3xl whitespace-nowrap flex-1 text-primary font-bold">{artist.name}</p>
						{#if artist.artistImage}
							<div class="aspect-square overflow-hidden">
								<img src={artist.artistImage?.url} alt={artist.name} />
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
