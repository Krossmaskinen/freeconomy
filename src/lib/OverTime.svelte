<script>
	import { getNumberWithSpaces } from './utils/Numbers';

	export let buffer;
	export let salary;

	let months = 1;
	const maxMonths = 36;

	$: salaryOverTime = Math.floor(months * salary);
	$: bufferOverTime = Math.floor(months * buffer);
</script>

<section class="bg-gray-700 p-4 rounded-xl mb-4">
	<div class="text-center">
		<h2>Över tid</h2>
		<div class="mb-2">
			<label for="retirement" class="label">Antal månader ({months})</label>
		</div>
		<input
			type="range"
			class="range range-primary mb-2"
			step="1"
			min="1"
			max={maxMonths}
			bind:value={months}
		/>
	</div>

	<div class="w-full grid grid-cols-3 mb-4">
		<div class="col-span-2 font-bold">Lön</div>
		<div class="text-right font-bold">
			{getNumberWithSpaces(salaryOverTime)}
		</div>
	</div>

	<div class="w-full grid grid-cols-3 mb-4">
		<div class="col-span-2 font-bold">Buffer</div>
		<div class="text-right font-bold">
			{getNumberWithSpaces(bufferOverTime)}
		</div>
	</div>
</section>
