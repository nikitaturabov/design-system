<template>
	<div class="ds-current-page">
		<h1 class="ds-current-page__title ds-title ds-title--1">
			BUTTONS &
			<strong>LINK</strong>
		</h1>

		<span class="ds-current-page__text ds-current-page__text--gray">
			Обозначают ключевое действие. На экране может быть только одна главная кнопка одного типа. Каждая кнопка имеет
			минимальную ширину, максимальная ширина не ограничена.
		</span>

		<h2 class="ds-current-page__title ds-title ds-title--2">Buttons Primary</h2>

		<div class="ds-current-page__group">
			<btn element="button" type="red" size="large" text="Войти" shape="round"></btn>
			<btn element="button" type="red" size="medium" text="Войти" shape="round"></btn>
			<btn element="button" type="red" size="small" text="Войти" shape="round"></btn>
		</div>

		<h2 class="ds-current-page__title ds-title ds-title--2">Button Primary White</h2>

		<div class="ds-current-page__group">
			<btn element="button" type="white" size="large" text="Новая заявка" shape="round"></btn>
			<btn element="button" type="white" size="medium" text="Новая заявка" shape="round"></btn>
			<btn element="button" type="white" size="small" text="Новая заявка" shape="round"></btn>
		</div>

		<h2 class="ds-current-page__title ds-title ds-title--2">Button Secondary</h2>

		<div class="ds-current-page__group">
			<btn element="button" type="secondary" size="large" text="Войти" shape="round" with-image image="plus"></btn>
			<btn element="button" type="secondary" size="medium" text="Войти" shape="round" with-image image="plus"></btn>
			<btn element="button" type="secondary" size="small" text="Войти" shape="round" with-image image="plus"></btn>
		</div>

		<h2 class="ds-current-page__title ds-title ds-title--2">Button Arrow line</h2>

		<div class="ds-current-page__group">
			<btn element="button" type="clear" size="large" text="Войти" shape="round" with-image image="arrow"></btn>
			<btn element="button" type="clear" size="medium" text="Войти" shape="round" with-image image="arrow"></btn>
			<btn element="button" type="clear" size="small" text="Войти" shape="round" with-image image="arrow"></btn>
		</div>

		<h2 class="ds-current-page__title ds-title ds-title--2">Red Btn With Icon</h2>

		<div class="ds-current-page__group">
			<btn element="button" type="red" size="large" text="Войти" shape="round" with-image image="plus"></btn>
			<btn element="button" type="red" size="medium" text="Войти" shape="round" with-image image="arrow"></btn>
			<btn element="button" type="red" size="small" text="Войти" shape="round"></btn>
		</div>

		<h2 class="ds-current-page__title ds-title ds-title--2">Disabled Btns</h2>

		<div class="ds-current-page__group">
			<btn element="button" type="red" size="large" text="Войти" shape="round" with-image image="plus" disable></btn>
			<btn
				element="button"
				type="secondary"
				size="medium"
				text="Войти"
				shape="round"
				with-image
				image="arrow"
				disable
			></btn>
			<btn element="button" type="clear" size="small" text="Войти" shape="round" disable></btn>
		</div>

		<h2 class="ds-current-page__title ds-title ds-title--2">Button Secondary</h2>

		<div class="ds-current-page__group">
			<btn element="button" type="add" size="small" text="Add" shape="round" with-image image="plus"></btn>
			<btn element="button" type="delete" size="small" text="Delete" shape="round"></btn>
			<btn element="button" type="cancel" size="small" text="Cancel" shape="round"></btn>
		</div>

		<h2 class="ds-current-page__title ds-title ds-title--2">Button Details</h2>

		<div class="ds-current-page__group">
			<btn
				element="button"
				type="detail-dark"
				size="large"
				text="Детализация займа"
				shape="square"
				with-image
				image="arrow"
			></btn>
			<btn
				element="button"
				type="detail-light"
				size="large"
				text="Детализация займа"
				shape="square"
				with-image
				image="arrow"
			></btn>
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

<style lang="scss"></style>
