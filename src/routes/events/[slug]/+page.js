import { client } from '$lib/graphql-client'
import { eventQuery } from '$lib/graphql-queries'
import { fetchSiteMetadata } from '$stores/site-metadata'

export const load = async ({ params }) => {
  await fetchSiteMetadata()

  const { slug } = params
  const variables = { slug }
  const { event } = await client.request(eventQuery, variables)

  return {
    event,
  }
}
