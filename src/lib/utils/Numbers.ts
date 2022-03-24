export function getNumberWithSpaces(x: number): string {
	return x
		.toFixed(0)
		.toString()
		.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}
