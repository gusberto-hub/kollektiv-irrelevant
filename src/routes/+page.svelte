<script>
	import EventCard from '$lib/eventCard.svelte';

	export let data;
</script>

<div class="hero min-h-screen">
	<img
		src="https://www.promises.com/wp-content/uploads/2017/03/Rave-Parties-Safety-and-Precautions-1200x675.jpeg"
		class="w-full h-full object-cover"
		alt="people dancing"
	/>
	<div class="hero-overlay bg-opacity-60" />
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-md">
			<h1 class="mb-5 text-5xl font-bold font-serif">Kollektiv Irrelevant</h1>
			<p class="mb-5">Artist Collective based in Solothurn. Platform & Network</p>
		</div>
	</div>
</div>
<div class="pt-24">
	<h2 class="mb-5 text-5xl font-bold text-shadow uppercase">next events</h2>
	{#each data.events as event}
		<EventCard eventData={event} />
	{/each}
</div>
