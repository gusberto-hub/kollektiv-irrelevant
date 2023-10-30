<script>
	import { createQuery } from '@tanstack/svelte-query';
	import EventCard from '../../lib/eventCard.svelte';
	import { getEvents } from './loaders';

	const query = createQuery({
		queryKey: ['events'],
		queryFn: getEvents
	});
</script>

<h1 class="font-extrabold text-4xl">the events page</h1>

{#if $query.isPending}
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
{/if}
