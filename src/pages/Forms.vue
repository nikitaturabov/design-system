<template>
	<div>
		<h1 class="ds-current-page__title ds-title ds-title--1">FORMS</h1>
		<span class="ds-current-page__text ds-current-page__text--gray">Компоненты формы</span>

		<component-wrapper name="Select">
			<cf-row>
				<cf-col col="4">
					<cf-select placeholder="Select" caption="Select" :options="options"></cf-select>
				</cf-col>
			</cf-row>
		</component-wrapper>

		<component-wrapper name="Input without label">
			<cf-row mobile wrap>
				<cf-col col="6">
					<cf-input placeholder="Input"></cf-input>
				</cf-col>
				<cf-col col="6">
					<cf-input placeholder="Input" validate="done"></cf-input>
				</cf-col>
				<cf-col col="6">
					<cf-input placeholder="Input" errorText="Ошибочка вышла" validate="wrong"></cf-input>
				</cf-col>
				<cf-col col="6">
					<cf-input placeholder="Input" disabled></cf-input>
				</cf-col>
			</cf-row>
		</component-wrapper>

		<component-wrapper name="Input with label">
			<cf-row mobile wrap>
				<cf-col col="6">
					<cf-input placeholder="Input" caption="Label"></cf-input>
				</cf-col>
				<cf-col col="6">
					<cf-input placeholder="Input" caption="Label" validate="done"></cf-input>
				</cf-col>
				<cf-col col="6">
					<cf-input placeholder="Input" errorText="Ошибочка вышла" caption="Label" validate="wrong"></cf-input>
				</cf-col>
				<cf-col col="6">
					<cf-input placeholder="Input" caption="Label" disabled></cf-input>
				</cf-col>
			</cf-row>
		</component-wrapper>

		<component-wrapper name="Checkbox" :column="true">
			<cf-row mobile wrap>
				<cf-col col="24">
					<cf-checkbox
						subtext="Я ознакомлен с правилами предоставления займов, политикой сайта, даю согласие на обработку личных данных"
					></cf-checkbox>
				</cf-col>
				<cf-col col="24">
					<cf-checkbox
						:checked="true"
						subtext="Я ознакомлен с правилами предоставления займов, политикой сайта, даю согласие на обработку личных данных"
					></cf-checkbox>
				</cf-col>
				<cf-col col="24">
					<cf-checkbox
						:disabled="true"
						subtext="Я ознакомлен с правилами предоставления займов, политикой сайта, даю согласие на обработку личных данных"
					></cf-checkbox>
				</cf-col>
				<cf-col col="24">
					<cf-checkbox
						:checked="true"
						:disabled="true"
						subtext="Я ознакомлен с правилами предоставления займов, политикой сайта, даю согласие на обработку личных данных"
					></cf-checkbox>
				</cf-col>
			</cf-row>
		</component-wrapper>

		<component-wrapper name="Checkbox" :column="true">
			<cf-row mobile wrap>
				<cf-col col="24">
					<cf-checkbox
						subtext="Я ознакомлен с правилами предоставления займов, политикой сайта, даю согласие на обработку личных данных"
					></cf-checkbox>
				</cf-col>
				<cf-col col="24">
					<cf-checkbox
						:checked="true"
						subtext="Я ознакомлен с правилами предоставления займов, политикой сайта, даю согласие на обработку личных данных"
					></cf-checkbox>
				</cf-col>
				<cf-col col="24">
					<cf-checkbox
						:disabled="true"
						subtext="Я ознакомлен с правилами предоставления займов, политикой сайта, даю согласие на обработку личных данных"
					></cf-checkbox>
				</cf-col>
				<cf-col col="24">
					<cf-checkbox
						:checked="true"
						:disabled="true"
						subtext="Я ознакомлен с правилами предоставления займов, политикой сайта, даю согласие на обработку личных данных"
					></cf-checkbox>
				</cf-col>
			</cf-row>
		</component-wrapper>

		<component-wrapper name="Radio" :column="true">
			<cf-row mobile wrap>
				<cf-col col="24">
					<cf-radio subtext="Мужской" name="gender"></cf-radio>
				</cf-col>
				<cf-col col="24">
					<cf-radio subtext="Женский" name="gender"></cf-radio>
				</cf-col>
				<cf-col col="24">
					<cf-radio subtext="Не определен" name="gender"></cf-radio>
				</cf-col>
				<cf-col col="24">
					<cf-radio subtext="Гемофродит" name="gender" disabled></cf-radio>
				</cf-col>
			</cf-row>
		</component-wrapper>
	</div>
</template>

<script>
import CfInput from "@/components/forms/CfInput.vue";
import CfSelect from "@/components/forms/CfSelect.vue";
import CfCheckbox from "@/components/forms/CfCheckbox.vue";
import CfRadio from "@/components/forms/CfRadio.vue";
import ComponentWrapper from "@/partials/ComponentWrapper.vue";
import CfRow from "@/components/layout/CfRow";
import CfCol from "@/components/layout/CfCol";

export default {
	name: "Forms",
	data() {
		return {
			components: ["Square"],
			options: [
				{
					text: "option1",
					link: "#",
				},
				{
					text: "option2",
					link: "#",
				},
				{
					text: "option3",
					link: "#",
				},
				{
					text: "option4",
					link: "#",
				},
			],
		};
	},
	components: {
		CfInput,
		CfSelect,
		CfCheckbox,
		CfRadio,
		ComponentWrapper,
		CfRow,
		CfCol,
	},
};
</script>
