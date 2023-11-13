export default function formatDate(inputDate, format = { year: false, month: true }) {
	// Create a Date object from the input string
	const date = new Date(inputDate);

	// Extract day, month, and year
	const day = date.getDate();
	const month = date.toLocaleString('default', { month: 'short' });
	const year = date.getFullYear().toString().slice(-2);

	// Create the formatted date string
	const formattedDate = `${day} ${format.month ? month : ''} ${format.year ? year : ''}`;

	return formattedDate;
}
