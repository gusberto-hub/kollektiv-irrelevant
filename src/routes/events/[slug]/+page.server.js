export async function load({ params }) {
	const data = await getEvent(params.slug);

	return { event: data.event };
}

const getEvent = (slug) =>
	fetch('https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clkwz4vam05q701uj61zjhqpf/master', {
		method: 'POST',
		headers: {
			Authorization:
				'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2OTg2NTY1ODUsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vdjIvY2xrd3o0dmFtMDVxNzAxdWo2MXpqaHFwZi9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiZjI4YTkwMmEtMjdhNS00N2Q0LWFmYWQtZjNjYjUxYzIwNTU0IiwianRpIjoiY2xvY285dHR3b3djNDAxdDc4aHVoN2x1aiJ9.3FNQdCs3ELk_RaYW1LCvjpjcNj49ODG5Y5BPh6agLWmtFETm-vfr_yl18qJzskyhk9J-Xkv5bOIkIY3-e5-s43DF7qQP2KAOc6iMV38ku7r1aLHgrcdF7Zfy7Ere6l4qmV9zgygBbDElv_BLPv4AJR_adltMlM0vcQSKWLiGBCwV3qANg4f-O9oYYr4ubFzA_1Hvw1BfwPVLxHfCDtalHo8kgc-L4IvfcOoDgApgbe-deNH_p6GhQ5PwDAHJl6CmF4rtDZM0L8Yy8Lh5z1JhU3BTfEjYDrmQ9u3NbM2YkbVyDDK8YeujEyZl2Jr6pI-WBnsGctpQzgeRY8w8W1Y9ipbfX-braVHII_Ju8u-nuEZOumWpaI1L_jHgAouKGQELoBtn8Jo3JNM8q-a7LCih45hdqIqWBj_3gTpbIiKA7JvwWevJjVGFGRymuSwulYxAiTOlaHecZZ_mzGbcBq0-wXBXHy7AAcVeE_O1keY4yZD2YkibqxpBQhYjZdachBGWQsUSjabP0Z2WL0mDLb_tG7TTeRyTzW3NhCVJDKj42W84owYySYnepkcsopoXYIUlzFuHsdWaQ3WytXjwPo5QUIRzJ9dqin4s9OROKBm00W771SF-m7sQ0txPY-lFTBzolF-kFhHc3NQtOBGmZNy3TOgLwhPL--agwKUv7-1yxow'
		},
		body: JSON.stringify({
			query: `{
				event (where: {slug: "${slug}"}) {
					id
					title
					aboutEvent
					lineUp
					location
					slug
					ticketsLink
					date
					flyerImage {
					  fileName
					  url
					  width
					}
				  }
                }`
		})
	})
		.then((res) => res.json())
		.then((data) => data.data)
		.catch((err) => console.log(err));
