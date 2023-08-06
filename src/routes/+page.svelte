<script>
  import Head from '$components/head.svelte'
  import {
    authorsStore,
    siteMetadataStore,
  } from '$stores/site-metadata'
  export let data

  const {
    siteUrl,
    name: siteName,
    description,
    openGraphDefaultImage,
  } = $siteMetadataStore || []
  const { name: authorName } = $authorsStore || []
</script>

<Head
  title={`${siteName} · ${authorName}`}
  {description}
  image={openGraphDefaultImage.url}
  url={`${siteUrl}`}
/>

<h2>Artist Collective based in Solothurn. Platform & Network</h2>

<div class="">
  {#each data.events as { title, location }}
    <div>
      <h1>{title}</h1>
      <h2>{location}</h2>
    </div>
  {/each}
</div>
