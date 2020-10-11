<template>
	<div :class="[{ grid__col: col }, `grid__col--${col}`, { 'grid grid--rows': rows }]">
		<slot />
	</div>
</template>

<script>
export default {
	name: "CfCol",
	props: {
		col: {
			type: String,
			default: "16",
		},
		rows: {
			type: Boolean,
			default: false,
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
