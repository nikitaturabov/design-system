<template>
	<div v-if="setUser" class="platform">
		<profile></profile>
		<div class="platform__header">
			<h1 class="platform__title ds-title ds-title--1">
				DESIGN SYSTEM
				<strong>CENTROFINACE</strong>
			</h1>

			<div class="platform__header-text">
				Цель системы – сократить срок и оптимизировать разработку веб-приложений и продуктов, давая готовые решения для
				команды
			</div>
		</div>
		<div class="platform__body">
			<ul class="platform__cards platform-cards">
				<li class="platform-cards__card platform-card platform-card--default">
					<router-link to="/system">
						<div class="platform-card__title">Брендбук</div>
						<div class="platform-card__description">Правила бренда Центрофинанс</div>
					</router-link>
				</li>
				<li class="platform-cards__card platform-card platform-card--default">
					<router-link to="/system">
						<div class="platform-card__title">Ред. политика</div>
						<div class="platform-card__description">Как писать и о чем писать в Цетрофинанс</div>
					</router-link>
				</li>
				<li class="platform-cards__card platform-card platform-card--default">
					<router-link to="/system">
						<div class="platform-card__title">Компоненты</div>
						<div class="platform-card__description">Система Vue компонентов для разработчкиков и дизайнеров</div>
					</router-link>
				</li>
				<li class="platform-cards__card platform-card platform-card--default">
					<router-link to="/system">
						<div class="platform-card__title">Сетка</div>
						<div class="platform-card__description">Правила размещения элементов в интерфейсе сайта</div>
					</router-link>
				</li>
				<li class="platform-cards__card platform-card platform-card--default">
					<router-link to="/system">
						<div class="platform-card__title">UX заметки</div>
						<div class="platform-card__description">Заметки A - B тестов, сводки, гипотезы</div>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import Profile from "@/partials/Profile.vue";
export default {
	name: "App",
	components: { Profile },
	computed: {
		setUser() {
			return this.$store.getters.getUser;
		},
	},
};
</script>

<style lang="scss">
.platform {
	background: #f6f8fa;
	height: 100vh;

	&__header {
		width: 100%;
		height: 355px;
		padding: 35px;
		background: #fff;
		background-image: url("/assets/images/header.png");
		background-size: 300px 300px;
	}
	&__body {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	&__header-text {
		font-size: 17px;
		line-height: 24px;
		width: 580px;

		letter-spacing: 0.01em;

		color: #53575a;
	}

	&__cards {
		display: flex;
		flex-wrap: wrap;
		width: 1300px;
	}
}

.platform-card {
	&--default {
		width: 400px;
		height: 168px;
		display: flex;
		flex-direction: column;

		background: #ffffff;

		box-shadow: 0px 16px 35px rgba(0, 0, 0, 0.1);
		border-radius: 4px;

		margin: 16px;
		padding: 35px 24px;
		transition: transform 0.5s;
		cursor: pointer;

		&:hover {
			transform: scale(1.05);
		}
	}

	&__title {
		font-weight: 600;
		font-size: 24px;
		line-height: 24px;

		letter-spacing: 0.02em;
	}

	&__description {
		margin-top: 20px;

		font-weight: 500;
		font-size: 16px;
		line-height: 24px;

		letter-spacing: 0.01em;

		color: #8b949d;
	}
}
</style>
