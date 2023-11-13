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

		function onPlayerReady(event) {
			event.target.mute();
			event.target.playVideo();
			console.log(event.target);
		}
	});
</script>

<svelte:head>
	<script src="https://www.youtube.com/iframe_api"></script>
</svelte:head>

<div class="" id={ytPlayerId} />
