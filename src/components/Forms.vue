<template>
	<div>это третья КАМОН!</div>
</template>

<script>
export default {
	name: "Forms",
	props: {
		nameBtn: String,
	},
	mounted() {
		console.log(this.nameBtn);
	},
};
</script>