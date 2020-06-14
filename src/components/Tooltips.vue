<template>
	<div>
		<h1 class="ds-current-page__title ds-title ds-title--1">
			TOOL
			<strong>TIPS</strong>
		</h1>

		<span
			class="ds-current-page__text ds-current-page__text--gray"
		>Отображение информации подсказки для наведения мыши.</span>

		<div class="ds-component">
			<h3 class="ds-component__name">Туллтип на кнопке</h3>
			<div class="ds-component__tabs">
				<button class="ds-component__tab ds-component__tab--active">Square</button>
			</div>
			<div class="ds-component__row">
				<tooltip>
					<btn element="button" color="red" size="large" text="Войти" shape="round"></btn>
				</tooltip>

				<tooltip>
					<cf-input placeholder="Input with tooltip"></cf-input>
				</tooltip>
			</div>
		</div>
	</div>
</template>

<script>
import Tooltip from "@/components/tooltip/Tooltip.vue";
import Btn from "@/components/btns/Btn.vue";
import CfInput from "@/components/forms/CfInput.vue";
export default {
	name: "Tolltips",
	props: {
		nameBtn: String,
	},
	mounted() {
		console.log(this.nameBtn);
	},
	components: {
		Btn,
		Tooltip,
		CfInput,
	},
};
</script>
