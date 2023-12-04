<script>
	import formatDateRange from '../../helpers/formatDateRange';
	import EventCard from '../_components/EventCard.svelte';
	import YoutubePlayer from '../_components/YoutubeFullscreen.svelte';
	import YoutubeNormal from '../_components/YoutubeNormal.svelte';

	export let data;
	const { upcomingEvents, pastEvents } = data;
</script>

<!-- {#if $query.isPending}
	<div class="loading loading-spinner loading-lg" />
	{/if} -->

<!-- {#if $query.error}
		An error has occurred:
		{$query.error.message}
		{/if} -->

<!-- {#if $query.isSuccess} -->
<!-- {/if} -->

<div class="md:grid grid-cols-12">
	<h1 class="font-extrabold uppercase text-3xl md:text-4xl col-span-full">next</h1>
	<div class="flex flex-col gap-8 col-span-9 col-start-4">
		{#if upcomingEvents.length > 0}
			{#each upcomingEvents as event}
				<EventCard eventData={event} />
			{/each}
		{:else}
			<p class="md:text-xl">
				Oh-oh! Es stehen gerade keine kommenden Events an. <br /> 🎉 Aber keine Sorge, wir arbeiten
				ständig an neuen Raves und Konzerten. <br /> Bleib dran für die neuesten Updates!
			</p>
			<div class="w-full">
				<YoutubeNormal videoId="4miQbvobysg" />
			</div>
		{/if}
	</div>
</div>

<div class="md:grid grid-cols-12 mt-12">
	<h1 class="font-extrabold uppercase text-3xl md:text-4xl col-span-full">past</h1>
	<div class="col-span-9 col-start-4 flex flex-col gap-8">
		{#each pastEvents as event}
			<div class="border-8 border-red-white md:grid grid-cols-9">
				<div class="p-4 pb-0 md:pb-4 md:border-r-8 col-span-4 flex justify-between gap-2">
					<h4 class="font-bold text-xl md:text-2xl leading-tight text-primary">
						{formatDateRange(event.startDate, event.endDate)}
					</h4>
					<a href={`/events/${event.slug}`}>
						<button class="btn btn-outline">more</button>
					</a>
				</div>
				<div class="col-span-5 p-4">
					<h3 class="text-xl lg:text-2xl font-bold leading-tight mb-2 md:mb-4">{event.title}</h3>
					{#if event.location}
						<div>
							<h3 class="font-normal text-base lg:text-xl">{event.location}</h3>
						</div>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</div>
