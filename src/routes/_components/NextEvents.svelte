<script>
	import { InstagramLogo } from 'phosphor-svelte';
	import EventCard from './EventCard.svelte';
	export let events;
</script>

<section class="next-events-container category-container">
	{#if events.length > 0}
		<div class="title-container">
			<h2 class="title">next events</h2>
		</div>
		<div class="items-container items-container--events">
			{#each events as event}
				<EventCard eventData={event} />
			{/each}
		</div>
	{:else}
		<div class="no-events-container">
			<h2>Upcoming events yet to be published</h2>
			<p>Follow us on to be the first to hear about the newest events</p>
			<a class="btn--md btn--outline" href="https://instagram"><InstagramLogo /></a>
		</div>
	{/if}
</section>
