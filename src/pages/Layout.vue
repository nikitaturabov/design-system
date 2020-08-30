<template>
	<div>
		<h1 class="ds-current-page__title ds-title ds-title--1">Layouts</h1>
		<span class="ds-current-page__text ds-current-page__text--gray">Сетка</span>

		<component-wrapper column name="Select">
			<cf-row>
				<cf-col col="24">
					<div class="ds-column"></div>
				</cf-col>
			</cf-row>
			<cf-row>
				<cf-col col="12"><div class="ds-column"></div></cf-col>
				<cf-col col="12"><div class="ds-column"></div></cf-col>
			</cf-row>
			<cf-row>
				<cf-col col="8"><div class="ds-column"></div></cf-col>
				<cf-col col="8"><div class="ds-column"></div></cf-col>
				<cf-col col="8"><div class="ds-column"></div></cf-col>
			</cf-row>
			<cf-row>
				<cf-col col="4"><div class="ds-column"></div></cf-col>
				<cf-col col="4"><div class="ds-column"></div></cf-col>
				<cf-col col="4"><div class="ds-column"></div></cf-col>
				<cf-col col="4"><div class="ds-column"></div></cf-col>
				<cf-col col="4"><div class="ds-column"></div></cf-col>
				<cf-col col="4"><div class="ds-column"></div></cf-col>
			</cf-row>
			<cf-row>
				<cf-col col="2"><div class="ds-column"></div></cf-col>
				<cf-col col="2"><div class="ds-column"></div></cf-col>
				<cf-col col="2"><div class="ds-column"></div></cf-col>
				<cf-col col="2"><div class="ds-column"></div></cf-col>
				<cf-col col="2"><div class="ds-column"></div></cf-col>
				<cf-col col="2"><div class="ds-column"></div></cf-col>
				<cf-col col="2"><div class="ds-column"></div></cf-col>
				<cf-col col="2"><div class="ds-column"></div></cf-col>
				<cf-col col="2"><div class="ds-column"></div></cf-col>
				<cf-col col="2"><div class="ds-column"></div></cf-col>
				<cf-col col="2"><div class="ds-column"></div></cf-col>
				<cf-col col="2"><div class="ds-column"></div></cf-col>
			</cf-row>
		</component-wrapper>
	</div>
</template>

<script>
import CfRow from "@/components/layout/CfRow";
import CfCol from "@/components/layout/CfCol";
import ComponentWrapper from "@/partials/ComponentWrapper";
export default {
	name: "Layout.vue",
	components: {
		CfRow,
		CfCol,
		ComponentWrapper,
	},
};
</script>

<style lang="scss">
.ds-column {
	min-height: 36px;
	border-radius: $grid-gutter;
	background: linear-gradient(to top right, $OrangeCF, $YellowCF);
}
</style>
