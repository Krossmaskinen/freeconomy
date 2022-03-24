<script type="ts">
	import { getNumberWithSpaces } from '$lib/utils/Numbers';

	const taxesAndSocialExpensesPercentage = 0.3142;
	const retirementTaxPercentage = 0.2426;

	export let amountToDistribute;
	export let retirementAmount;
	export let buffer;
	export let salary;

	$: retirementTax = retirementAmount * retirementTaxPercentage;
	$: taxesAndSocialExpenses = salary * taxesAndSocialExpensesPercentage;
</script>

<section>
	<div class="w-full grid grid-cols-3 mb-4">
		<div class="col-span-2 font-bold">Lön</div>
		<div class="text-right font-bold text-fcPrimary">
			{getNumberWithSpaces(salary)}
		</div>
		<div class="col-span-2 text-xs">Arb.avgift (sociala avgifter)</div>
		<div class="text-right text-xs">
			{getNumberWithSpaces(taxesAndSocialExpenses)}
		</div>
	</div>
	<div class="divider" />

	<div class="w-full grid grid-cols-3 mb-4">
		<div class="col-span-2 font-bold">Summa att fördela</div>
		<div class="text-right font-bold">
			{getNumberWithSpaces(amountToDistribute)}
		</div>
	</div>
	<div class="divider" />

	<div class="w-full grid grid-cols-3 mb-4">
		<div class="col-span-2 font-bold">Buffer på kontot</div>
		<div class="text-right font-bold">
			{getNumberWithSpaces(buffer)}
		</div>
	</div>
	<div class="divider" />

	<div class="w-full grid grid-cols-3 mb-4">
		<div class="col-span-2 font-bold">Tjänstepension</div>
		<div class="text-right font-bold">
			{getNumberWithSpaces(retirementAmount)}
		</div>
		<div class="col-span-2 text-xs">Särskild löneskatt på pension</div>
		<div class="text-right text-xs">
			{getNumberWithSpaces(retirementTax)}
		</div>
	</div>
</section>
