<script>
	import Header from '$lib/Header.svelte';
	import DoughnutChart from '$lib/DoughnutChart.svelte';
	import HourlyRateSlider from '$lib/HourlyRateSlider.svelte';
	import RetirementSlider from '$lib/RetirementSlider.svelte';
	import SalarySlider from '$lib/SalarySlider.svelte';

	let hourlyRate = 1020;
	let hoursPerMonth = 160;
	let retirementAmount = 5000;
	let vacationAmount = 4198;
	let salary = 40000;

	const taxesPercentage = 1 - 0.3142;
	const consultantPercentage = 0.7;
	const retirementTaxPercentage = 0.2426;

	$: amountToDistribute = hourlyRate * hoursPerMonth * consultantPercentage;
	$: taxesAndExpenses = salary * taxesPercentage;
	$: buffer = amountToDistribute - retirementAmount - vacationAmount - salary;
</script>

<Header />
<div class="grid grid-cols-2 md:gap-4 m-4">
	<div>
		<section class="bg-gray-700 p-4 rounded-xl flex justify-center mb-4">
			<div class="w-80 h-80">
				<DoughnutChart {salary} {taxesAndExpenses} {retirementAmount} {vacationAmount} {buffer} />
			</div>
		</section>

		<div class="bg-gray-700 p-4 rounded-xl mb-4">
			<label for="hoursPerMonth" class="label">Arbetade timmar / mån</label>
			<input
				type="number"
				name="hoursPerMonth"
				class="input input-bordered"
				bind:value={hoursPerMonth}
			/>

			<div class="divider" />

			<div>
				Summa att fördela: {amountToDistribute.toFixed(0)} kr
			</div>

			<div>
				Buffer på kontot: {buffer.toFixed(0)} kr
			</div>
		</div>
	</div>

	<div>
		<section class="bg-gray-700 p-4 rounded-xl mb-4">
			<HourlyRateSlider bind:hourlyRate />
		</section>
		<section class="bg-gray-700 p-4 rounded-xl mb-4">
			<SalarySlider bind:salary maxSalary={100000} />
		</section>
		<section class="bg-gray-700 p-4 rounded-xl">
			<RetirementSlider maxRetirement={15000} bind:retirementAmount />
		</section>
	</div>
</div>
