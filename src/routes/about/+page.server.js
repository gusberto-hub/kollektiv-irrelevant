import hygraphApi from '../../helpers/axios';

export async function load() {
	const teamMembers = await getStartPageArtists();
	return teamMembers.data;
}

const getStartPageArtists = () =>
	hygraphApi
		.post('', {
			query: `{page(where: {pageTitle: "About"}) {
			  pageTitle
			  pageDescription
			}
			teamMembersConnection(orderBy: name_DESC) {
			  edges {
				node {
				  name
				  role
				  picture {
					url
				  }
				}
			  }
			}
		  }`
		})
		.then((res) => res.data)
		.catch((err) => console.log(err));
