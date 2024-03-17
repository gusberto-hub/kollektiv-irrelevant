<script>
	export let videoId;
</script>

<svelte:head>
	<script src="https://www.youtube.com/iframe_api"></script>
</svelte:head>

<div class="video-container">
	<iframe
		src={`https://www.youtube-nocookie.com/embed/${videoId}?controls=0&autoplay=1&mute=1&playsinline=1&playlist=${videoId}&loop=1`}
		title="YouTube video player"
		class=""
	/>
	<div class="bg-overlay" />
</div>

<style lang="scss">
	.video-container {
		width: 100%;
		height: 100%;
		position: relative;
		overflow: hidden;
		pointer-events: none;

		iframe {
			display: block;
			height: 100%;
			width: 177.77vh;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translateX(-50%) translateY(-50%);
			border: none;
		}
	}

	.bg-overlay {
		background-color: $base-100;
		position: absolute;
		inset: 0;
		opacity: 0.8;
	}
</style>
