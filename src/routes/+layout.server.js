import hygraphApi from '../helpers/axios';

export async function load() {
	const pageMetaDataResponse = await getPageMetaData();

	return pageMetaDataResponse.data;
}

const pageMetaDataQuery = {
	query: `{
		projectMetadata(where: {id: "ckxj7a1dcfqpi0b52oicp0tym"}) {
		  name
		  homePageYoutubeId
		  youtubeProfileUrl
		  tikTokProfileUrl
		  instagramProfileUrl
		  description
		}
	  }`
};

const getPageMetaData = () =>
	hygraphApi
		.post('', pageMetaDataQuery)
		.then((res) => res.data)
		.catch((err) => console.log(err));
