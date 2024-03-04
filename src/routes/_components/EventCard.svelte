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
			<h3 class="location">
				{eventData.location}
			</h3>
		</div>
	</div>
	<div class="flyer-container">
		<img alt={eventData.title} src={eventData.flyerImage?.url} />
	</div>
</a>
