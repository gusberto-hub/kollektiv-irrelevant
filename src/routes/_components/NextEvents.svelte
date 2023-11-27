<script>
	import EventCard from './EventCard.svelte';
	export let events;
</script>

<div class="pt-24 md:grid grid-cols-12 gap-4">
	<h2 class="md:col-span-3 row-start-1 text-3xl font-bold text-shadow uppercase leading-tight">
		next events
	</h2>
	<div class="md:col-span-9 lg:row-start-1 flex flex-col gap-20">
		{#each events as event}
			<EventCard eventData={event} />
		{/each}
	</div>
</div>
