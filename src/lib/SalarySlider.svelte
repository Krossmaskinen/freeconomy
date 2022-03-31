<script>
	export let salary;
	export let maxSalary = 100000;
</script>

<div class="text-center">
	<label for="salary" class="label">Lön</label>

	<input
		type="range"
		class="range range-primary"
		min="20000"
		max={maxSalary}
		step="500"
		bind:value={salary}
	/>

	<div>
		Lön: {salary}
	</div>
</div>
