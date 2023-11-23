<script>
	import formatDateRange from '../../helpers/formatDateRange';
	import EventCard from '../../lib/EventCard.svelte';

	export let data;
	const { upcomingEvents, pastEvents } = data;
</script>

<div class="md:grid grid-cols-12">
	<h1 class="font-extrabold uppercase text-3xl md:text-4xl col-span-full">upcoming</h1>
	<div class="flex flex-col gap-8 col-span-9 col-start-4">
		{#each upcomingEvents as event}
			<EventCard eventData={event} />
		{/each}
	</div>
</div>

<!-- {#if $query.isPending}
	<div class="loading loading-spinner loading-lg" />
	{/if} -->

<!-- {#if $query.error}
		An error has occurred:
		{$query.error.message}
		{/if} -->

<!-- {#if $query.isSuccess} -->
<!-- {/if} -->

<div class="md:grid grid-cols-12 mt-12">
	<h1 class="font-extrabold uppercase text-3xl md:text-4xl col-span-full">past</h1>
	<div class="col-span-9 col-start-4 flex flex-col gap-8">
		{#each pastEvents as event}
			<div class="border-8 border-red-white md:grid grid-cols-9">
				<div class="p-4 md:border-r-8 col-span-4">
					<h4 class="font-bold text-xl md:text-2xl leading-tight text-primary">
						{formatDateRange(event.startDate, event.endDate)}
					</h4>
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
