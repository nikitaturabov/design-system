<template>
	<div>это третья КАМОН!</div>
</template>

<script>
export default {
	name: "Button",
	props: {
		nameBtn: String,
	},
	mounted() {
		console.log(this.nameBtn);
	},
};
</script>