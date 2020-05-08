<template>
	<div class="ds-current-page">
		<h1 class="ds-current-page__title ds-title ds-title--1">
			BUTTONS &
			<strong>LINK</strong>
		</h1>

		<span class="ds-current-page__text ds-current-page__text--gray">
			Обозначают ключевое действие. На экране может быть только одна главная кнопка одного типа.
			Каждая кнопка имеет минимальную ширину, максимальная ширина не ограничена.
		</span>

		<h2 class="ds-current-page__title ds-title ds-title--2">Buttons Primary</h2>

		<div class="ds-current-page__group">
			<btn element="button" color="red" size="large" text="Войти" shape="round"></btn>
			<btn element="button" color="red" size="medium" text="Войти" shape="round"></btn>
			<btn element="button" color="red" size="small" text="Войти" shape="round"></btn>
		</div>

		<h2 class="ds-current-page__title ds-title ds-title--2">Button Primary White</h2>

		<div class="ds-current-page__group">
			<btn element="button" color="white" size="large" text="Новая заявка" shape="round"></btn>
			<btn element="button" color="white" size="medium" text="Новая заявка" shape="round"></btn>
			<btn element="button" color="white" size="small" text="Новая заявка" shape="round"></btn>
		</div>

		<h2 class="ds-current-page__title ds-title ds-title--2">Button Arrow line</h2>

		<div class="ds-current-page__group">
			<btn element="button" color="clear" size="large" text="Войти" shape="round" :arrow="true"></btn>
			<btn element="button" color="clear" size="medium" text="Войти" shape="round" :arrow="true"></btn>
			<btn element="button" color="clear" size="small" text="Войти" shape="round" :arrow="true"></btn>
		</div>
	</div>
</template>

<script>
import Btn from "../components/btns/Btn.vue";
export default {
	name: "Button",
	props: {
		nameBtn: {
			type: String,
		},
	},
	components: {
		Btn,
	},
};
</script>

<style lang="less"></style>
