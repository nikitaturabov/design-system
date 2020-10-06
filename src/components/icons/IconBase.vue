<template>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		:width="width"
		:height="height"
		:viewBox="getViewBox"
		:aria-labelledby="iconName"
		role="presentation"
		:class="className"
	>
		<title :id="iconName" lang="en">{{ iconName }} icon</title>
		<g :fill="iconColor" :stroke="iconColor">
			<slot />
		</g>
	</svg>
</template>

<script>
export default {
	name: "IconBase",
	props: {
		iconName: {
			type: String,
			default: "box",
		},
		width: {
			type: [Number, String],
			default: 24,
		},
		height: {
			type: [Number, String],
			default: 24,
		},
		iconColor: {
			type: String,
			default: "none",
		},
		className: {
			type: String,
			default: "",
		},
	},
	computed: {
		getViewBox() {
			return "0 0 " + this.width + " " + this.height;
		},
	},
};
</script>

<style scoped></style>
