import hygraphApi from '../helpers/axios';
import { getUpcomingEvents } from '../helpers/queryFunctions';

export async function load() {
	const eventsResponse = await getUpcomingEvents();
	const artistsResponse = await getStartPageArtists();

	return { events: eventsResponse.data.events, artists: artistsResponse.data.artists };
}

const artistsStartPageQuery = {
	query: `{ artists (where: {onStartPage: true}) { id name artistImage { url } socialLinks { url name } } }`
};

const getStartPageArtists = () =>
	hygraphApi
		.post('', artistsStartPageQuery)
		.then((res) => res.data)
		.catch((err) => console.log(err));
