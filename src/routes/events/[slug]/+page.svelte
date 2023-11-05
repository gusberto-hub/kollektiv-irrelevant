<script>
	import EventCard from '../../../lib/EventCard.svelte';
	export let data;

	const { event } = data;

</script>

<!-- {#if $query.isPending}
	<div class="loading loading-spinner loading-lg" />
{/if}

{#if $query.error}
	An error has occurred:
	{$query.error.message}
{/if}

{#if $query.isSuccess}
	<div class="flex flex-col gap-8">
		{#each $query.data.events as event}
			<EventCard eventData={event} />
		{/each}
	</div>
{/if} -->

<div class="flex flex-col gap-8 p-8">
	<EventCard eventData={event} />
</div>
