<script>
	import formatDateRange from '../../helpers/formatDateRange';
	export let eventData;
</script>

<a class="event-card" href={`/events/${eventData.slug}`}>
	<div class="event-card__content">
		<div class="date-container">
			<h4 class="">
				{formatDateRange(eventData.startDate, eventData.endDate)}
			</h4>
		</div>
		<div class="details-container">
			<a href={'events/' + eventData.slug}>
				<h3 class="title">{eventData.title}</h3>
			</a>
			<!-- {#if eventData.locationUrl} -->
			<!-- <a href={eventData.locationUrl} target="_blank" class="location-link">
					<h3 class="location">
						<MapPin />
						{eventData.location}
					</h3>
				</a> -->
			<!-- {:else} -->
			<h3 class="location">
				{eventData.location}
			</h3>
			<!-- {/if} -->

			<!-- <a class="btn--md btn--outline" href={`/events/${eventData.slug}`}> More </a> -->

			{#if eventData.ticketsLink}
				<a class="btn--md btn--primary" href={eventData.ticketsLink} target="_blank"> Tickets </a>
			{/if}
		</div>
	</div>
	<div class="image-container p-12 hidden lg:block lg:border-l-8 col-span-4">
		<img class="w-full" alt={eventData.title} src={eventData.flyerImage?.url} />
	</div>
</a>
