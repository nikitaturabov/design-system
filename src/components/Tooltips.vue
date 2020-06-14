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
			<div class="ds-component__wrapper">
				<div class="ds-component__row ds-component__row--center ds-component__row--mrt10">
					<tooltip position="top-start">
						<btn element="button" color="red" size="small" text="Top start" shape="round"></btn>
					</tooltip>

					<tooltip position="top">
						<btn element="button" color="red" size="small" text="Top" shape="round"></btn>
					</tooltip>

					<tooltip position="top-end">
						<btn element="button" color="red" size="small" text="Top end" shape="round"></btn>
					</tooltip>
				</div>
				<div class="ds-component__row ds-component__row--spb ds-component__row--mrt10">
					<tooltip position="right-start">
						<btn element="button" color="red" size="small" text="Right start" shape="round"></btn>
					</tooltip>

					<tooltip position="left-start">
						<btn element="button" color="red" size="small" text="Left start" shape="round"></btn>
					</tooltip>
				</div>
				<div class="ds-component__row ds-component__row--spb ds-component__row--mrt10">
					<tooltip position="right">
						<btn element="button" color="red" size="small" text="Right" shape="round"></btn>
					</tooltip>
					<tooltip position="left">
						<btn element="button" color="red" size="small" text="Left" shape="round"></btn>
					</tooltip>
				</div>
				<div class="ds-component__row ds-component__row--spb ds-component__row--mrt10">
					<tooltip position="right-end">
						<btn element="button" color="red" size="small" text="Right end" shape="round"></btn>
					</tooltip>
					<tooltip position="left-end">
						<btn element="button" color="red" size="small" text="Left end" shape="round"></btn>
					</tooltip>
				</div>
				<div class="ds-component__row ds-component__row--center ds-component__row--mrt10">
					<tooltip position="bottom-start">
						<btn element="button" color="red" size="small" text="Bottom start" shape="round"></btn>
					</tooltip>

					<tooltip position="bottom">
						<btn element="button" color="red" size="small" text="Bottom" shape="round"></btn>
					</tooltip>

					<tooltip position="bottom-end">
						<btn element="button" color="red" size="small" text="Bottom end" shape="round"></btn>
					</tooltip>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Tooltip from "@/components/tooltip/Tooltip.vue";
import Btn from "@/components/btns/Btn.vue";
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
	},
};
</script>
