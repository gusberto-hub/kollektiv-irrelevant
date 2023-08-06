import { client } from '$lib/graphql-client'
import { eventsQuery, postsQuery } from '$lib/graphql-queries'
import { fetchSiteMetadata } from '$stores/site-metadata'

export const load = async () => {
  await fetchSiteMetadata()

  const { events } = await client.request(eventsQuery)

  return {
    events,
  }
}
