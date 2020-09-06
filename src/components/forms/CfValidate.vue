<template>
	<div class="validate">
		<slot></slot>
		<span
			class="validate--error"
			v-if="valType === 'passport'"
			v-show="$v.passportData.$invalid && $v.passportData.$model"
		>
			{{ text }}
		</span>
		<span class="validate--error" v-if="valType === 'tel'" v-show="$v.telData.$invalid && $v.telData.$model">
			{{ text }}
		</span>
	</div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
export default {
	name: "CfValidate",
	props: {
		valType: {
			type: String,
		},
		text: {
			type: String,
			default: "Данные не верны",
		},
	},
	data() {
		return {
			passportData: null,
			telData: null,
		};
	},
	// Модель для валидации, которую Vuelidate превратит в computed-поле $v
	validations: {
		// Название поля должно совпадать с полем в data
		passportData: {
			required,
			validFormat: val => /^\d{4} \d{6}$/.test(val),
		},
		telData: {
			required,
			validFormat: val => /^\+7\s((\+0?1\s)?)\(?\d{3}\)?[\s.\s]\d{3}[\s.-]\d{2}[\s.-]\d{2}$/.test(val),
		},
	},
	mounted() {
		this.$on("any-data", textData => {
			switch (this.valType) {
				case "passport":
					this.passportData = textData;
					break;
				case "tel":
					this.telData = textData;
					break;
			}
		});
	},
};
</script>

<style lang="scss" scoped>
.validate {
	&--error {
		margin: $grid-gutter;
		font-size: 10px;
		letter-spacing: 0.01em;
		color: $RedCF;
	}
}
</style>
