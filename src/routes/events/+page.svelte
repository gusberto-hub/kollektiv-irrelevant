<script>
	import formatDateRange from '../../helpers/formatDateRange';
	import EventCard from '../_components/EventCard.svelte';
	import YoutubeNormal from '../_components/YoutubeNormal.svelte';
	import MapPin from 'phosphor-svelte/lib/MapPin';

	export let data;
	const { upcomingEvents, pastEvents } = data;
</script>

<div class="category-container">
	<div class="title-container first-col">
		<h1 class="title">upcoming</h1>
	</div>
	<div class="items-container">
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

<div class="category-container">
	<div class="title-container first-col">
		<h1 class="title">past</h1>
	</div>
	<div class="items-container">
		{#each pastEvents as event}
			<a class="event-card event-card--small" href={`/events/${event.slug}`}>
				<div class="date-container">
					<h4 class="date">
						{formatDateRange(event.startDate, event.endDate)}
					</h4>
					<!-- <a href={`/events/${event.slug}`} class="btn--sm btn--outline"> more </a> -->
				</div>
				<div class="details-container">
					<h2 class="title">{event.title}</h2>
					{#if event.location}
						<p class="location">
							<MapPin />
							{event.location}
						</p>
					{/if}
				</div>
			</a>
		{/each}
	</div>
</div>
