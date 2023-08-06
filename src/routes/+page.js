import { client } from '$lib/graphql-client'
import { eventsQuery } from '$lib/graphql-queries'
import { fetchSiteMetadata } from '$stores/site-metadata'

export const load = async () => {
  await fetchSiteMetadata()

  const [eventsRes] = await Promise.all([client.request(eventsQuery)])
  const { events } = eventsRes

  return {
    events,
  }
}
