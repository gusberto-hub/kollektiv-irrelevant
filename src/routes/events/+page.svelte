<script>
  import { page } from '$app/stores'
  import Head from '$components/head.svelte'
  import { siteMetadataStore } from '$stores/site-metadata'
  import { marked } from 'marked'
  import { onMount } from 'svelte'
  export let data
  let pathname

  onMount(async () => {
    pathname = $page.url.pathname
  })

  const {
    siteUrl,
    name: siteName,
    openGraphDefaultImage,
  } = $siteMetadataStore || []
</script>

<Head
  title={`Events · ${siteName}`}
  description={`A list of recent blog posts.`}
  image={openGraphDefaultImage?.url}
  url={`${siteUrl}${pathname}`}
/>

<h1 class="text-4xl mb-10 font-extrabold">Events</h1>

<div class="grid gap-y-20">
  {#each data.events as { title, slug, flyerImage, location, date }}
    <a href={`/events/${slug}`} class="btn btn-outline btn-primary">
      <div class="">
        <h2 class="font-bold text-4xl">{title}</h2>
        <h3>{location}</h3>
        <p>{date}</p>
      </div>
      <figure class="">
        <img
          class=""
          src={flyerImage.url}
          alt={`Cover image for ${title}`}
        />
      </figure>
    </a>
  {/each}
</div>
