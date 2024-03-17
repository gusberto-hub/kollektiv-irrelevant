<script>
	import '../lib/scss/global.scss';
	export let data;
</script>

<svelte:head>
	<meta name="description" content={data.projectMetadata.description} />
	<title>{data.projectMetadata.name}</title>
</svelte:head>

<slot />
