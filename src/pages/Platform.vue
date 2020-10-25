<template>
	<div v-if="setUser" class="platform">
		<profile></profile>
		<div class="platform__header">
			<cf-row>
				<cf-col col="24">
					<cf-row class="platform__logos">
						<cf-col col="12">
							<icon-base width="288" height="32">
								<centrofinans></centrofinans>
							</icon-base>
						</cf-col>
						<cf-col col="12">
							<icon-base width="133" height="29">
								<logo-centrozord></logo-centrozord>
							</icon-base>
						</cf-col>
					</cf-row>

					<h1 class="platform__title ds-title ds-title--1">
						DESIGN SYSTEM
						<strong>CENTROFINACE</strong>
					</h1>

					<div class="platform__header-text">
						Цель системы – сократить срок и оптимизировать разработку веб-приложений и продуктов, давая готовые решения
						для команды
					</div>
				</cf-col>
			</cf-row>

			<icon-base height="355" width="1920" class="platform__header-bg">
				<bg-main></bg-main>
			</icon-base>
		</div>
		<div class="platform__body">
			<ul class="platform__cards platform-cards">
				<li
					class="platform-cards__card platform-card platform-card--default"
					v-for="(card, index) of cards"
					:key="index"
				>
					<router-link :to="card.url">
						<div class="platform-card__title">{{ card.name }}</div>
						<div class="platform-card__description">{{ card.description }}</div>
					</router-link>
					<icon-base width="24" height="24" class="platform-card__arrow">
						<arrow-right></arrow-right>
					</icon-base>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import Profile from "@/partials/Profile.vue";
import CfRow from "@/components/layout/CfRow";
import CfCol from "@/components/layout/CfCol";
import IconBase from "@/components/icons/IconBase";
import BgMain from "@/env-components/images/BgMain";
import LogoCentrozord from "@/env-components/images/LogoCentrozord";
import Centrofinans from "@/env-components/images/Centrofinans";
import ArrowRight from "@/env-components/images/ArrowRight";
export default {
	name: "Platform",
	data() {
		return {
			cards: [
				{
					name: "Брендбук",
					description: "Правила бренда Центрофинанс",
					url: "/system",
				},
				{
					name: "Ред. политика",
					description: "Как писать и о чем писать в Цетрофинанс",
					url: "/system",
				},
				{
					name: "Компоненты",
					description: "Система Vue компонентов для разработчкиков и дизайнеров",
					url: "/system",
				},
				{
					name: "Сетка",
					description: "Правила размещения элементов в интерфейсе сайта",
					url: "/layout",
				},
				{
					name: "UX заметки",
					description: "Заметки A - B тестов, сводки, гипотезы",
					url: "/system",
				},
			],
		};
	},
	components: { Profile, IconBase, BgMain, LogoCentrozord, Centrofinans, CfRow, CfCol, ArrowRight },
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
		position: relative;
		overflow: hidden;
	}

	&__logos {
		max-width: 800px;
	}

	&__title {
		padding-top: 24px;
	}

	&__body {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 36px;
	}

	&__header-text {
		font-size: 17px;
		line-height: 24px;
		width: 580px;

		letter-spacing: 0.01em;

		color: #53575a;
	}

	&__header-bg {
		position: absolute;
		top: 0;
		left: 0;
	}

	&__cards {
		display: flex;
		flex-wrap: wrap;
		width: 1300px;
	}
}

.platform-card {
	position: relative;

	&--default {
		width: 400px;
		height: 168px;
		display: flex;
		flex-direction: column;

		background: #ffffff;

		box-shadow: 0px 16px 35px rgba(0, 0, 0, 0.1);
		border-radius: 4px;

		margin: 8px;
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
		color: #2f343a;
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

	&__arrow {
		position: absolute;
		bottom: 16px;
		right: 16px;
	}
}
</style>
