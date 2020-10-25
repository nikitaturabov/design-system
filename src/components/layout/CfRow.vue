<template>
	<div
		class="grid"
		:class="[
			{ 'grid--center_hor': centerHor },
			{ 'grid--center_vert': centerVert },
			{ 'grid--wrap': wrap },
			{ 'grid--mobile-column': mobile },
		]"
	>
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
		wrap: {
			type: Boolean,
			default: false,
		},
		mobile: {
			type: Boolean,
			default: false,
		},
	},
};
</script>

<style lang="scss" scoped>
.grid {
	width: 100%;

	&--mobile-column {
		@include screen-desktop {
			flex-direction: row;
		}

		@include screen-mobile {
			flex-direction: column;
		}
	}
}
</style>
