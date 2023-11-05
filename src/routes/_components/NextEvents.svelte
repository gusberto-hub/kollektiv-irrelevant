<script>
	import EventCard from '$lib/EEventCard.svelte';
	export let events;
</script>

<div class="pt-24">
	<h2 class="mb-5 text-5xl font-bold text-shadow uppercase">next events</h2>
	<div class="flex flex-col gap-20">
		{#each events as event}
			<EventCard eventData={event} />
		{/each}
	</div>
</div>
