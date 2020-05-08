<template>
	<div>Это вторая страница</div>
</template>

<script>
export default {
	name: "Tolltips",
	props: {
		nameBtn: String,
	},
	mounted() {
		console.log(this.nameBtn);
	},
};
</script>
