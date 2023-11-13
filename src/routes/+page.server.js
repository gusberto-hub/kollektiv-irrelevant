import hygraphApi from '../helpers/axios';

export async function load() {
	const eventsResponse = await getCurrentEvents();
	const artistsResponse = await getStartPageArtists();

	console.log('EVENTS', eventsResponse);

	return { events: eventsResponse.data.events, artists: artistsResponse.data.artists };
}

const eventsStartPageQuery = {
	operationName: 'fetchEvents',
	query: `query fetchEvents { events { id title aboutEvent lineUp location locationUrl slug ticketsLink startDate endDate flyerImage { url fileName width } }}`,
	variables: {}
};

const getCurrentEvents = () =>
	hygraphApi
		.post('', eventsStartPageQuery)
		.then((res) => res.data)
		.catch((err) => console.log(err));

const artistsStartPageQuery = {
	operationName: 'fetchArtists',
	query: `query fetchArtists { artists (where: {onStartPage: true}) { id name artistImage { url } } }`,
	variables: {}
};

const getStartPageArtists = () =>
	hygraphApi
		.post('', artistsStartPageQuery)
		.then((res) => res.data)
		.catch((err) => console.log(err));
