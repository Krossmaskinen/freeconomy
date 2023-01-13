<script>
	export let hourlyRate;
</script>

<div class="text-center">
	<div class="mb-2">
		<label for="hourly-rate">Timersättning</label>
	</div>
	<input
		type="range"
		class="range range-primary mb-2"
		name="hourly-rate"
		min="500"
		max="1500"
		step="5"
		bind:value={hourlyRate}
	/>

	<div>
		{hourlyRate} kr
	</div>
</div>
