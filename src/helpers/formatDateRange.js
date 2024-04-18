export default function formatDateRange(start, end, alwaysShowYear = false) {
	const startDate = new Date(start);
	const endDate = end ? new Date(end) : null;
	const yearToday = new Date().getFullYear();
	const startsThisYear = startDate.getFullYear() === yearToday;

	if (!start) {
		return undefined;
	}

	if (!endDate) {
		return startDate.toLocaleDateString('en-GB', {
			day: '2-digit',
			month: 'short',
			year: alwaysShowYear ? '2-digit' : !startsThisYear ? '2-digit' : undefined
		});
	}

	const startDateString = startDate.toLocaleDateString('en-GB', {
		day: '2-digit',
		month: startDate.getMonth() === endDate.getMonth() ? undefined : 'short',
		year:
			startDate.getFullYear() === endDate.getFullYear() || startsThisYear ? undefined : '2-digit'
	});

	const endDateString = endDate?.toLocaleDateString('en-GB', {
		day: '2-digit',
		month: 'short',
		year: endDate.getFullYear() > yearToday ? '2-digit' : undefined
	});

	return startDateString + ' - ' + endDateString;
}
