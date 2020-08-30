<template>
	<div :class="[{ grid__col: col }, `grid__col--${col}`]">
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
