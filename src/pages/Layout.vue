<template>
	<div>
		<h1 class="ds-current-page__title ds-title ds-title--1">Layouts</h1>
		<span class="ds-current-page__text ds-current-page__text--gray">Сетка</span>

		<component-wrapper name="Select">
			<cf-row></cf-row>
		</component-wrapper>
	</div>
</template>

<script>
import CfRow from "@/components/layout/CfRow";
export default {
	name: "Layout.vue",
	components: {
		CfRow,
	},
};
</script>
