<script>
	import EventCard from './EventCard.svelte';
	export let events;
</script>

<div class="pt-24 md:grid grid-cols-12 gap-4">
	{#if events.length > 0}
		<h2 class="md:col-span-3 row-start-1 text-3xl font-bold uppercase leading-tight">
			next events
		</h2>
		<div class="md:col-span-9 lg:row-start-1 flex flex-col gap-20">
			{#each events as event}
				<EventCard eventData={event} />
			{/each}
		</div>
	{:else}
		<div class="md:col-start-4 md:col-span-full">
			<h2 class="text-4xl font-bold uppercase leading-tight">No events yet</h2>
			<p class="text-xl">follow us on instagram to be the first to hear about the newest events</p>
			<button class="btn btn-outline"><a href="https://instagram">Follow</a></button>
		</div>
	{/if}
</div>
