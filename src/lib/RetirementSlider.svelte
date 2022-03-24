<script>
	export let retirementAmount;
	export let maxRetirement = 10000;
</script>

<div class="text-center">
	<div class="mb-2">
		<label for="retirement" class="label">Pension</label>
	</div>
	<input
		type="range"
		class="range range-primary mb-2"
		step="100"
		min="2000"
		max={maxRetirement}
		bind:value={retirementAmount}
	/>
	<div>
		{retirementAmount} kr
	</div>
</div>
