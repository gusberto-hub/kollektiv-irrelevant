<script>
  import { page } from '$app/stores'
  import Head from '$components/head.svelte'
  import { siteMetadataStore } from '$stores/site-metadata'
  import { marked } from 'marked'
  import { onMount } from 'svelte'

  let pathname
  export let data

  onMount(async () => {
    pathname = $page.url.pathname
  })

  const { title, date, flyerImage, location } = data.event
  const { siteUrl, name: siteName } = $siteMetadataStore || []
</script>

<Head
  title={`${title} · ${siteName}`}
  description={title + ' ' + date}
  image={flyerImage.url}
  url={`${siteUrl}${pathname}`}
/>

<div class="sm:-mx-5 md:-mx-10 lg:-mx-20 xl:-mx-38 mb-5">
  <img
    class="rounded-xl"
    src={flyerImage.url}
    alt={`Cover image for ${title}`}
  />
</div>

<div class="text-white">
  <h1>{title}</h1>
  <h2>{location}</h2>
  {date}
</div>
<div class="mb-5 flex justify-between" />
