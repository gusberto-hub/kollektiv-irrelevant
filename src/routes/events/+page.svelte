<script>
	import EventCard from '../../lib/EventCard.svelte';

	export let data;
	const { events } = data;
</script>

<h1 class="font-extrabold uppercase text-4xl">next</h1>

<!-- {#if $query.isPending}
	<div class="loading loading-spinner loading-lg" />
{/if} -->

<!-- {#if $query.error}
	An error has occurred:
	{$query.error.message}
{/if} -->

<!-- {#if $query.isSuccess} -->
<div class="flex flex-col gap-8">
	{#each events as event}
		<EventCard eventData={event} />
	{/each}
</div>
<!-- {/if} -->
