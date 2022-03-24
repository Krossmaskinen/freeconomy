<script>
	import Doughnut from 'svelte-chartjs/src/Doughnut.svelte';

	export let salary;
	export let taxesAndExpenses;
	export let retirementAmount;
	export let vacationAmount;
	export let buffer;

	const options = {
		animation: {
			duration: 0
		},
		plugins: {
			legend: {
				labels: {
					color: '#fff'
				},
				position: 'bottom'
			}
		},
		datasets: {
			doughnut: {
				borderWidth: 0
			}
		}
	};
</script>

<div class="text-white">
	<Doughnut
		data={{
			labels: [
				'Bruttolön',
				'Buffert',
				'Tjänstepension',
				'Semester',
				'Övriga utgifter',
				'Skatter & Avgifter'
			],
			datasets: [
				{
					data: [salary, buffer, retirementAmount, vacationAmount, 58, taxesAndExpenses],
					backgroundColor: ['#a852c7', '#f00', '#0f0', '#00f', 'fff', 'ff0']
				}
			]
		}}
		{options}
	/>
</div>
