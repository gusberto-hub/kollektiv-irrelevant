import hygraphApi from '../../helpers/axios';

export async function load() {
	const response = await getArtists();

	console.log(response.data.artists);

	return response.data;
}

const artistsQuery = {
	operationName: 'fetchArtists',
	query: `query fetchArtists { artists (where: {onStartPage: true}) { id name artistImage { url } } }`,
	variables: {}
};

const getArtists = () =>
	hygraphApi
		.post('/', artistsQuery)
		.then((data) => data.data)
		.catch((err) => console.log(err));
