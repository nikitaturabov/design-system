<template>
	<div>
		<h1 class="ds-current-page__title ds-title ds-title--1">FORMS</h1>

		<span class="ds-current-page__text ds-current-page__text--gray">Компоненты формы</span>

		<div class="ds-component">
			<h3 class="ds-component__name">Select</h3>

			<div class="ds-component__tabs">
				<button class="ds-component__tab ds-component__tab--active">Square</button>
			</div>

			<div class="ds-component__row">
				<cf-select placeholder="Select" caption="Select" :options="options"></cf-select>
			</div>
		</div>

		<div class="ds-component">
			<h3 class="ds-component__name">Input without label</h3>

			<div class="ds-component__tabs">
				<button class="ds-component__tab ds-component__tab--active">Square</button>
			</div>

			<div class="ds-component__row">
				<cf-input placeholder="Input"></cf-input>

				<cf-input placeholder="Input" validate="done"></cf-input>

				<cf-input placeholder="Input" errorText="Ошибочка вышла" validate="wrong"></cf-input>

				<cf-input placeholder="Input" disabled></cf-input>
			</div>
		</div>

		<div class="ds-component">
			<h3 class="ds-component__name">Input with label</h3>

			<div class="ds-component__tabs">
				<button class="ds-component__tab ds-component__tab--active">Square</button>
			</div>

			<div class="ds-component__row">
				<cf-input placeholder="Input" caption="Label"></cf-input>

				<cf-input placeholder="Input" caption="Label" validate="done"></cf-input>

				<cf-input placeholder="Input" errorText="Ошибочка вышла" caption="Label" validate="wrong"></cf-input>

				<cf-input placeholder="Input" caption="Label" disabled></cf-input>
			</div>
		</div>
	</div>
</template>

<script>
import CfInput from "@/components/forms/CfInput.vue";
import CfSelect from "@/components/forms/CfSelect.vue";
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
	},
};
</script>
