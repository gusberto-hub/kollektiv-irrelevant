import hygraphApi from '../../helpers/axios';

export async function load() {
	const response = await getEvents();

	return response.data;
}

const getEvents = () =>
	hygraphApi
		.post('', {
			query: `{
		events {
			id
			title
			aboutEvent
			lineUp
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
		  }
		}`
		})
		.then((data) => data.data)
		.catch((err) => console.log(err));
