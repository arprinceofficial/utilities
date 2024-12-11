<script setup>
	import printReport from "./printReport";
	
	const data = ref([
		{
			id: 1,
			name: "John Doe",
			age: 25,
		},
		{
			id: 2,
			name: "Jane Doe",
			age: 30,
		},
	]);
	const clickHandler = () => {
		printReport(data.value);
	};
</script>
<template>
	<div class="min-h-screen flex flex-col justify-between items-center">
		<button @click="clickHandler">Print Report</button>
	</div>
</template>