<script>
	import formatDateRange from '../helpers/formatDateRange';
	export let eventData;
</script>

<div class="col-start-4 col-end-13 border-8 lg:grid grid-cols-9">
	<div class="lg:border-r-8 col-span-4">
		<div class="p-4 border-b-8">
			<h4 class="font-bold text-3xl leading-tight text-primary">
				{formatDateRange(eventData.startDate, eventData.endDate)}
			</h4>
		</div>
		<div class="p-12 hidden lg:block">
			<img class="w-full" alt={eventData.title} src={eventData.flyerImage?.url} />
		</div>
	</div>
	<div class="lg:col-span-5 p-4 lg:border-t-8 lg:border-none hyphens-auto">
		<a href={'events/' + eventData.slug}>
			<h3 class="text-3xl lg:text-4xl font-bold leading-tight mb-4">{eventData.title}</h3>
		</a>
		<div>
			{#if eventData.locationUrl}
				<a href={eventData.locationUrl} class="link" target="_blank">
					<h3 class="font-bold lg:text-2xl">{eventData.location}</h3>
				</a>
			{:else}
				<h3 class="font-bold lg:text-2xl">{eventData.location}</h3>
			{/if}
		</div>
		<div class="mt-8">
			{#if eventData.ticketsLink}
				<a class="btn btn-secondary btn-lg" href={eventData.ticketsLink} target="_blank">Tickets</a>
			{/if}
			<a class="btn btn-primary btn-lg btn-outline" href={`/events/${eventData.slug}`}>More</a>
		</div>
	</div>
</div>
