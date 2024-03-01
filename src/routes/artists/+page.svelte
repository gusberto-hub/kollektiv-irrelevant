<script>
	import ArtistCard from './ArtistCard.svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	export let data;

	let y;

	const { artists } = data;

	const musicArtists = artists.filter((artist) => artist.category.includes('music'));
	const fineArtsArtists = artists.filter((artist) => artist.category.includes('arts'));

	const size = tweened(1, {
		duration: 0,
		easing: cubicOut
	});

	function handleClick() {
		$size = y / 50 + 10;
	}

	onMount(() => {
		$size = 10;
	});
</script>

<section id="artist-page">
	<div class="intro-container">
		<p class="artists-about">
			Hier sind Solothurns kreative Köpfe! <br /> Lokale Künstler, die durch das Kollektiv ihre Werke
			teilen oder bei unseren Events als DJ oder Live-Musiker auf der Bühne stehen. Entdecke die Macher
			unserer Stadt!
		</p>
	</div>
	<div class="category-container">
		<div class="title-container">
			<h1 class="title">music</h1>
		</div>

		<div class="items-container">
			{#each musicArtists as artist}
				<ArtistCard {artist} />
			{/each}
		</div>
	</div>
	<div class="category-container">
		<div class="title-container">
			<h1 class="title">Arts</h1>
		</div>
		<div class="items-container">
			{#each fineArtsArtists as artist}
				<ArtistCard {artist} />
			{/each}
		</div>
	</div>
</section>

<svelte:window bind:scrollY={y} on:scroll={handleClick} />
