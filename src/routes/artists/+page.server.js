import hygraphApi from '../../helpers/axios';

export async function load() {
	const response = await getArtists();
	return response.data;
}

const artistsQuery = {
	operationName: 'fetchArtists',
	query: `query fetchArtists {
		artists {
		  artistBio
		  category
		  name
		  socialLinks {
			name
			url
		  }
		  social {
			instagramUrl
			tikTokUrl
			soundCloudUrl
			youTubeUrl
		  }
		  artistImage {
			url
		  }
		}
	  }`,
	variables: {}
};

const getArtists = () =>
	hygraphApi
		.post('', artistsQuery)
		.then((data) => data.data)
		.catch((err) => console.log(err));
