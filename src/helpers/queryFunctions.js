import hygraphApi from './axios';

export const getUpcomingEvents = () => {
	const dateToday = new Date();
	const formattedDate = dateToday.toISOString().slice(0, 19) + 'Z';

	return hygraphApi
		.post('', {
			query: `{
			events(where: { startDate_gte: "${formattedDate}" }, orderBy: startDate_ASC) {
				id
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
			}
		}`
		})
		.then((data) => data.data)
		.catch((err) => console.log(err));
};

export const getPastEvents = () => {
	const dateToday = new Date();
	const formattedDate = dateToday.toISOString().slice(0, 19) + 'Z';

	return hygraphApi
		.post('', {
			query: `{
			events(where: { startDate_lte: "${formattedDate}" }, orderBy: startDate_DESC) {
				id
				title
				aboutEvent
				location
				locationUrl
				slug
				ticketsLink
				startDate
				endDate
			}
		}`
		})
		.then((data) => data.data)
		.catch((err) => console.log(err));
};

export const getPageMetaData = () => {
	return hygraphApi
		.post('', {
			query: `{
			projectMetadatas { homePageVideoUrl }
		}`
		})
		.then((data) => data.data)
		.catch((err) => console.log(err));
};
