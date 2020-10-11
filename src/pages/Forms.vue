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

		<component-wrapper name="Select">
			<cf-select placeholder="Select" caption="Select" :options="options"></cf-select>
		</component-wrapper>

		<component-wrapper name="Input without label">
			<cf-input placeholder="Input"></cf-input>
			<cf-input placeholder="Input" validate="done"></cf-input>
			<cf-input placeholder="Input" errorText="Ошибочка вышла" validate="wrong"></cf-input>
			<cf-input placeholder="Input" disabled></cf-input>
		</component-wrapper>

		<component-wrapper name="Input with label">
			<cf-input placeholder="Input" caption="Label"></cf-input>
			<cf-input placeholder="Input" caption="Label" validate="done"></cf-input>
			<cf-input placeholder="Input" errorText="Ошибочка вышла" caption="Label" validate="wrong"></cf-input>
			<cf-input placeholder="Input" caption="Label" disabled></cf-input>
		</component-wrapper>

		<component-wrapper name="Checkbox" :column="true">
			<cf-checkbox
				subtext="Я ознакомлен с правилами предоставления займов, политикой сайта, даю согласие на обработку личных данных"
			></cf-checkbox>
			<cf-checkbox
				:checked="true"
				subtext="Я ознакомлен с правилами предоставления займов, политикой сайта, даю согласие на обработку личных данных"
			></cf-checkbox>
			<cf-checkbox
				:disabled="true"
				subtext="Я ознакомлен с правилами предоставления займов, политикой сайта, даю согласие на обработку личных данных"
			></cf-checkbox>
			<cf-checkbox
				:checked="true"
				:disabled="true"
				subtext="Я ознакомлен с правилами предоставления займов, политикой сайта, даю согласие на обработку личных данных"
			></cf-checkbox>
		</component-wrapper>

		<component-wrapper name="Checkbox" :column="true">
			<cf-checkbox
				subtext="Я ознакомлен с правилами предоставления займов, политикой сайта, даю согласие на обработку личных данных"
			></cf-checkbox>
			<cf-checkbox
				:checked="true"
				subtext="Я ознакомлен с правилами предоставления займов, политикой сайта, даю согласие на обработку личных данных"
			></cf-checkbox>
			<cf-checkbox
				:disabled="true"
				subtext="Я ознакомлен с правилами предоставления займов, политикой сайта, даю согласие на обработку личных данных"
			></cf-checkbox>
			<cf-checkbox
				:checked="true"
				:disabled="true"
				subtext="Я ознакомлен с правилами предоставления займов, политикой сайта, даю согласие на обработку личных данных"
			></cf-checkbox>
		</component-wrapper>

		<component-wrapper name="Radio" :column="true">
			<div>
				<cf-radio subtext="Мужской" name="gender"></cf-radio>
				<cf-radio subtext="Женский" name="gender"></cf-radio>
				<cf-radio subtext="Не определен" name="gender"></cf-radio>
				<cf-radio subtext="Гемофродит" name="gender" disabled></cf-radio>
			</div>
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
