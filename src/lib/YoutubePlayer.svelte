<script>
	import { onMount } from 'svelte';

	let player;
	export let videoId;

	const ytPlayerId = 'youtube-player';

	onMount(() => {
		function load() {
			player = new YT.Player(ytPlayerId, {
				height: '100%',
				width: '100%',
				videoId,
				playerVars: { autoplay: 1, enablejsapi: 1, loop: 1, playlist: videoId, controls: 0 },
				events: {
					onReady: function (e) {
						e.target.mute();
					}
				}
			});
		}

		if (window.YT) {
			load();
		} else {
			window.onYouTubeIframeAPIReady = load;
		}
	});
</script>

<svelte:head>
	<script src="https://www.youtube.com/iframe_api"></script>
</svelte:head>

<div class="" id={ytPlayerId} />
