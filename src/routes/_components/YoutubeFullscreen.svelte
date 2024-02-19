<script>
	import { onMount } from 'svelte';

	let player;
	export let videoId;

	const ytPlayerId = 'youtube-player';

	onMount(() => {
		window.YT.ready(function () {
			const player = new window.YT.Player(ytPlayerId, {
				height: '100%',
				width: '100%',
				videoId,
				videoTitle: 'Test Videod Title',
				playerVars: { loop: 1, playlist: videoId, controls: 0 },
				events: {
					onReady: onPlayerReady(),
					onerror: () => console.log('something bad happened')
				}
			});

			// console.log(player);
		});

		// window.YT.ready(() => console.log(window.YT.Player('youtube-player')));

		function onPlayerReady() {
			// player.mute();
			// player.playVideo();
			// player.classList;
		}
	});
</script>

<svelte:head>
	<script src="https://www.youtube.com/iframe_api"></script>
</svelte:head>

<div class="video-container">
	<img
		src="https://www.promises.com/wp-content/uploads/2017/03/Rave-Parties-Safety-and-Precautions-1200x675.jpeg"
		class="hero-image-fallback"
		alt="people dancing"
	/>
	<iframe
		src={`https://www.youtube-nocookie.com/embed/${videoId}?controls=0&autoplay=1&mute=1&playsinline=1&playlist=${videoId}&loop=1`}
		title="YouTube video player"
		class=""
	/>
	<div class="absolute inset-0 bg-base-100 opacity-40" />
</div>

<style>
	.video-container {
		@apply w-full h-full relative overflow-hidden pointer-events-none;
	}

	iframe {
		@apply block h-full w-[177.77vh] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2;
	}

	.hero-image-fallback {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
