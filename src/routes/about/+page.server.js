import hygraphApi from '../../helpers/axios';

export async function load() {
	const teamMembers = await getAboutPageData();
	// console.log('🚀', teamMembers);
	return teamMembers.data;
}

const getAboutPageData = () =>
	hygraphApi
		.post('', {
			query: `{page(where: {pageTitle: "About"}) {
			  pageTitle
			  pageDescription
			  teamMembers {
				teamMembers {
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
