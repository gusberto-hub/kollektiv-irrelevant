import { getPastEvents, getUpcomingEvents } from '../../helpers/queryFunctions';

export async function load() {
	const upcomingEvents = await getUpcomingEvents();
	const pastEvents = await getPastEvents();

	return { upcomingEvents: upcomingEvents.data.events, pastEvents: pastEvents.data.events };
}
