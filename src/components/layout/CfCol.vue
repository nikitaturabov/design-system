<template>
	<div :class="[{ grid__col: col }, `grid__col--${col}`, `grid__col--mobile--${mobcol}`, { 'grid grid--rows': rows }]">
		<slot />
	</div>
</template>

<script>
export default {
	name: "CfCol",
	props: {
		col: {
			type: String,
			default: "24",
		},
		rows: {
			type: Boolean,
			default: false,
		},
		mobcol: {
			type: String,
			default: "24",
		},
	},
};
</script>

<style lang="scss" scoped>
.grid {
	&__col {
		margin-top: $grid-gutter;
	}
}
</style>
