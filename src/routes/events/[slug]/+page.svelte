<script>
	import { SoundcloudLogo, InstagramLogo } from 'phosphor-svelte';
	import formatDateRange from '../../../helpers/formatDateRange.js';
	import MarkDownLinkComponet from '../../_components/MarkDownLinkComponent.svelte';
	import SvelteMarkdown from 'svelte-markdown';
	export let data;

	const { event } = data;

	const dateToday = new Date();
	const startDate = new Date(event.startDate);
</script>

<div class="event-page-container">
	<div class="event-title-flyer">
		<img class="flyer" alt={event.title} src={event.flyerImage?.url} />
	</div>
	<div class="event-details">
		<section>
			<h1 class="title">{event.title}</h1>
			{#if event.ticketsLink && startDate > dateToday}
				<section class="event-details__ticket">
					<a class="btn--primary btn--md" href={event.ticketsLink} target="_blank">Tickets</a>
				</section>
			{/if}
		</section>
		<section>
			<h2 class="section-title">date</h2>
			<h2 class="event-details__date">
				{formatDateRange(event.startDate, event.endDate)}
			</h2>
		</section>

		<section class="event-details__location">
			<h2 class="section-title">location</h2>
			{#if event.locationUrl}
				<a href={event.locationUrl} target="_blank">
					<h3>{event.location}</h3>
				</a>
			{:else}
				<h3>{event.location}</h3>
			{/if}
		</section>

		{#if event.aboutEvent}
			<section class="event-details__about">
				<h2 class="section-title">about</h2>
				<SvelteMarkdown source={event.aboutEvent} renderers={{ link: MarkDownLinkComponet }} />
			</section>
		{/if}

		<section class="event-details__artists">
			<h2 class="section-title">featured artists</h2>
			{#each event.artists as artist}
				<div class="event-artist">
					<div class="event-artist__details">
						<div class="event-artist__name-link">
							<h3 class="event-artist__name">
								{artist.name}
							</h3>
							<p class="event-artist__label">Kollektiv Irrelevant</p>
						</div>
						{#if artist.socialLinks.length > 0}
							<div class="links">
								{#each artist.socialLinks as link}
									<a href={link.url} target="_blank">
										{#if link.name.toLowerCase() === 'soundcloud'}
											<SoundcloudLogo />
										{/if}
										{#if link.name.toLowerCase() === 'instagram'}
											<InstagramLogo />
										{/if}
									</a>
								{/each}
							</div>
						{/if}
					</div>
					{#if artist.artistImage}
						<div class="event-artist__image">
							<img src={artist.artistImage?.url} alt={artist.name} />
						</div>
					{/if}
				</div>
			{/each}
		</section>
	</div>
</div>
