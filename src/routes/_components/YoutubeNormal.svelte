<script>
	export let videoId;
</script>

<svelte:head>
	<script src="https://www.youtube-nocookies.com/iframe_api"></script>
</svelte:head>

<iframe
	src={`https://www.youtube.com/embed/${videoId}`}
	title="YouTube video player"
	class="w-full h-full aspect-video"
/>
