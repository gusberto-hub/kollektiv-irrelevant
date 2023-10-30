<script>
	import SvelteMarkdown from 'svelte-markdown';
	export let eventData;
</script>

<div class="flex flex-row gap-8">
	<img alt={eventData.title} src={eventData.flyerImage?.url} />
	<div class="flex flex-col gap-4">
		<a href={'events/' + eventData.slug}>
			<h3 class="text-4xl font-bold text-shadow">{eventData.title}</h3>
		</a>
		<div>
			<p>date</p>
			<h4 class="font-bold">{eventData.date}</h4>
		</div>
		<div>
			<p>location</p>
			<h4 class="font-bold">{eventData.location}</h4>
		</div>
		{#if eventData.lineUp}
			<div>
				<p>LineUp</p>
				<h4 class="font-bold">{eventData.lineUp}</h4>
			</div>
		{/if}
		{#if eventData.aboutEvent}
			<SvelteMarkdown source={eventData.aboutEvent} />
		{/if}
		<div>
			<a class="btn btn-secondary" href={eventData.ticketsLink}>Tickets</a>
		</div>
	</div>
</div>
