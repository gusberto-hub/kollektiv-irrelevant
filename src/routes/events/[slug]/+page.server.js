import hygraphApi from '../../../helpers/axios.js';

export async function load({ params }) {
	const response = await getEvent(params.slug);
	return { event: response.data.event };
}

const getEvent = (slug) =>
	hygraphApi
		.post('', {
			query: `{
				event (where: {slug: "${slug}"}) {
					title
					aboutEvent
					location
					locationUrl
					slug
					ticketsLink
					startDate
					endDate
					flyerImage {
					  fileName
					  url
					  width
					}
					artists {
						name
						artistImage {
						  url
						}
						socialLinks {
						  name
						  url
						}
						category
					  }
				  }
                }`
		})
		.then((res) => res.data)
		.catch((err) => console.log(err));
