<script>
	import { ArrowSquareOut } from 'phosphor-svelte';
	import formatDateRange from '../../../helpers/formatDateRange.js';
	import SvelteMarkdown from 'svelte-markdown';
	export let data;

	const { event } = data;

	const dateToday = new Date();
	const startDate = new Date(event.startDate);
</script>

<div class="flex flex-col gap-8">
	<div class="col-start-4 col-end-13 lg:grid grid-cols-9">
		<div class="lg:border-r-8 col-span-4">
			<div class="lg:pr-12 sticky top-40">
				<img class="w-full" alt={event.title} src={event.flyerImage?.url} />
			</div>
		</div>
		<div class="lg:col-span-5 lg:pl-8 lg:border-t-8 lg:border-none hyphens-auto mt-4 lg:mt-0">
			<h2 class="font-bold text-3xl leading-tight text-primary">
				{formatDateRange(event.startDate, event.endDate)}
			</h2>
			<h1 class="text-3xl lg:text-4xl font-bold leading-[1] uppercase mb-4">{event.title}</h1>

			<div>
				{#if event.locationUrl}
					<a href={event.locationUrl} class="link" target="_blank">
						<h3 class="font-bold lg:text-2xl">{event.location}</h3>
					</a>
				{:else}
					<h3 class="font-bold lg:text-2xl">{event.location}</h3>
				{/if}
			</div>
			{#if event.ticketsLink && startDate > dateToday}
				<div class="mt-8">
					<a class="btn btn-secondary btn-lg" href={event.ticketsLink} target="_blank">Tickets</a>
				</div>
			{/if}
			<div class="[&>p]:mb-4">
				<SvelteMarkdown source={event.aboutEvent} />
			</div>
			<!-- <div class="[&>p]:mb-4 text-2xl">
				<span class="font-bold">Line Up</span>
				<SvelteMarkdown source={event.lineUp} />
			</div> -->
			<div class="flex flex-col gap-16">
				{#each event.artists as artist}
					<div class="flex gap-4">
						<div>
							<p class="text-xl lg:text-3xl whitespace-nowrap flex-1 text-primary font-bold">
								{artist.name}
							</p>
							{#if artist.socialLinks.length > 0}
								<div class="flex flex-col gap-4 items-start">
									{#each artist.socialLinks as link}
										<a
											class="btn btn-outline flex gap-2 items-center text-base"
											href={link.url}
											target="_blank"
										>
											<ArrowSquareOut />{link.name}
										</a>
									{/each}
								</div>
							{/if}
						</div>
						{#if artist.artistImage}
							<div class="aspect-square overflow-hidden">
								<img src={artist.artistImage?.url} alt={artist.name} />
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
