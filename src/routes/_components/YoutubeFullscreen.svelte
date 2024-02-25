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
	<div class="bg-overlay" />
</div>
