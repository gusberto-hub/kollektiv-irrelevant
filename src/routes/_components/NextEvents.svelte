<script>
	import EventCard from './EventCard.svelte';
	export let events;
</script>

<section class="next-events-container category-container">
	{#if events.length > 0}
		<div class="title-container">
			<h2 class="title">next events</h2>
			<p class="category-description">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui sit nam dolorem laboriosam
				asperiores earum sapiente dolores officiis modi impedit.
			</p>
		</div>
		<div class="items-container items-container--events">
			{#each events as event}
				<EventCard eventData={event} />
			{/each}
		</div>
	{:else}
		<div class="no-events-container">
			<h2 class="title">No events yet</h2>
			<p class="text-xl">follow us on instagram to be the first to hear about the newest events</p>
			<button class="btn btn--outline"><a href="https://instagram">Follow</a></button>
		</div>
	{/if}
</section>
