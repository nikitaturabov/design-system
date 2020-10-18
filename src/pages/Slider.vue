<template>
	<div>
		<component-wrapper name="Слайдер калькулятора">
			<cf-row>
				<cf-col col="16">
					<cf-slider
						:min="1000"
						:max="15000"
						:interval="500"
						:val="4000"
						units="₽"
						set-buttons
						:fastButtons="fastButtons"
					></cf-slider>
				</cf-col>
			</cf-row>
		</component-wrapper>

		<component-wrapper name="Слайдер без кнопок">
			<cf-row>
				<cf-col col="12">
					<cf-slider :min="1000" :max="30000" :interval="1000" :val="7000" units="₽"></cf-slider>
				</cf-col>
			</cf-row>
		</component-wrapper>

		<component-wrapper name="Слайдер Мобилка">
			<cf-row>
				<cf-col col="8">
					<cf-slider
						:min="1000"
						:max="15000"
						:interval="500"
						:val="4000"
						units="$"
						:fastButtons="fastButtons"
					></cf-slider>
				</cf-col>
			</cf-row>
		</component-wrapper>
	</div>
</template>

<script>
import ComponentWrapper from "@/partials/ComponentWrapper";
import CfRow from "@/components/layout/CfRow";
import CfCol from "@/components/layout/CfCol";
import CfSlider from "@/components/slider/CfSlider";
export default {
	name: "Slider",
	data() {
		return {
			fastButtons: [1000, 5000, 7000, 13000, 15000],
		};
	},
	components: {
		ComponentWrapper,
		CfRow,
		CfCol,
		CfSlider,
	},
};
</script>

<style scoped></style>
