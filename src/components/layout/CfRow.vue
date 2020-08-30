<template>
	<div class="grid" :class="[{ 'grid--center_hor': centerHor }, { 'grid--center_vert': centerVert }]">
		<slot />
	</div>
</template>

<script>
export default {
	name: "CfRow",
	props: {
		centerHor: {
			type: Boolean,
			default: false,
		},
		centerVert: {
			type: Boolean,
			default: false,
		},
	},
};
</script>

<style lang="scss" scoped>
.grid {
	width: 100%;
}
</style>
