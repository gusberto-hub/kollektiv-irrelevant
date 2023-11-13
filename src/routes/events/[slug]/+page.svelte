<script>
	import formatDateRange from '../../../helpers/formatDateRange.js';
	export let data;

	const { event } = data;
</script>

<div class="flex flex-col gap-8 p-8">
	<div class="col-start-4 col-end-13 border-8 lg:grid grid-cols-9">
		<div class="lg:border-r-8 col-span-4">
			<div class="p-4 border-b-8">
				<h4 class="font-bold text-3xl leading-tight text-primary">
					{formatDateRange(event.startDate, event.endDate)}
				</h4>
			</div>
			<div class="p-12 hidden lg:block">
				<img class="w-full" alt={event.title} src={event.flyerImage?.url} />
			</div>
		</div>
		<div class="lg:col-span-5 p-4 lg:border-t-8 lg:border-none hyphens-auto">
			<a href={'events/' + event.slug}>
				<h3 class="text-3xl lg:text-4xl font-bold leading-tight mb-4">{event.title}</h3>
			</a>
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
					<a class="btn btn-secondary btn-lg" href={event.ticketsLink} target="_blank"
						>Tickets</a
					>
				{/if}
				<a class="btn btn-primary btn-lg btn-outline" href={`/events/${event.slug}`}>More</a>
			</div>
		</div>
	</div>
</div>
