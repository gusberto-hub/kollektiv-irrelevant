<script>
	import { onMount } from 'svelte';

	let player;
	export let videoId;

	const ytPlayerId = 'youtube-player';

	onMount(() => {
		window.YT.ready(function () {
			player = new window.YT.Player(ytPlayerId, {
				height: '100%',
				width: '100%',
				videoId,
				playerVars: { loop: 1, playlist: videoId, controls: 0 },
				events: {
					onReady: onPlayerReady
				}
			});
		});

		function onPlayerReady() {
			player.mute();
			player.playVideo();
			player.classList;
		}
	});
</script>

<svelte:head>
	<script src="https://www.youtube.com/iframe_api"></script>
</svelte:head>

<!-- <div class="" id={ytPlayerId} /> -->

<div class="video-container">
	<iframe
		src={`https://www.youtube-nocookie.com/embed/${videoId}?controls=0&autoplay=1&mute=1&playsinline=1&playlist=${videoId}&loop=1`}
		title="YouTube video player"
		class="pointer-events-none absolute top-1/2 left-1/2 w-screen h-screen -translate-x-1/2 -translate-y-1/2"
	/>
	<div class="bg-neutral bg-opacity-60 absolute w-full h-full inset-0" />
</div>

<style>
	.video-container {
		width: 100vw;
		height: 100vh;
		position: relative;
	}

	@media (min-aspect-ratio: 16/9) {
		.video-container iframe {
			/* height = 100 * (9 / 16) = 56.25 */
			height: 56.25vw;
		}
	}

	@media (max-aspect-ratio: 16/9) {
		.video-container iframe {
			/* width = 100 / (9 / 16) = 177.777777 */
			width: 177.78vh;
		}
	}
</style>
