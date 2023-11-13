import axios from 'axios';

export const hygraphApi = axios.create({
	baseURL:
		'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clkwz4vam05q701uj61zjhqpf/master',
	timeout: 10000,
	headers: {
		Authorization: import.meta.env.VITE_HYGRAPH_TOKEN
	}
});

export default hygraphApi;
