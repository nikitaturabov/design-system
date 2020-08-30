<template>
	<div class="ds-component">
		<h3 class="ds-component__name">{{ name }}</h3>

		<div class="ds-component__tabs">
			<button class="ds-component__tab ds-component__tab--active" v-for="(tab, index) in tabs" :key="index">
				{{ tab }}
			</button>
		</div>

		<div class="ds-component__row" :class="{ 'ds-component__row--col': column }">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: "ComponentWrapper",
	props: {
		name: {
			type: String,
			default: "Component",
		},
		tabs: {
			type: Array,
			default: () => ["Square"],
		},
		column: {
			type: Boolean,
			default: false,
		},
	},
};
</script>

<style scoped></style>
