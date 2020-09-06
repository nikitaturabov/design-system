<template>
	<div>
		<h1 class="ds-current-page__title ds-title ds-title--1">VALIDATION</h1>
		<span class="ds-current-page__text ds-current-page__text--gray"
			>Компонент, с помощью которого поля могут себя валидировать</span
		>

		<component-wrapper name="Валидация инпута">
			<cf-validate valType="passport" text="Серия и номер паспорта должны быть в формате 1234 567890">
				<cf-input placeholder="1234 567890" mask="9999 999999" caption="Введите паспортные данные"></cf-input>
			</cf-validate>
			<cf-validate valType="tel" text="Телефон должен состоять из 11 цифр">
				<cf-input
					placeholder="+7 (800) 555-65-65"
					mask="+7 (999) 999-99-99"
					caption="Введите номер телефона"
				></cf-input>
			</cf-validate>
		</component-wrapper>
	</div>
</template>

<script>
import CfInput from "@/components/forms/CfInput.vue";
import ComponentWrapper from "@/partials/ComponentWrapper.vue";
import CfValidate from "@/components/forms/CfValidate.vue";
export default {
	name: "Validate",
	components: {
		CfInput,
		ComponentWrapper,
		CfValidate,
	},
};
</script>

<style scoped></style>
