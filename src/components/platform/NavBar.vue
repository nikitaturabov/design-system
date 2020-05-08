<template>
	<nav class="ds-nav-bar">
		<div class="ds-nav-bar__logo">CENTROZORD</div>
		<h1 class="ds-nav-bar__title">Компоненты</h1>
		<ul class="ds-nav-bar__components-list ds-components-list">
			<li class="ds-components-list__item">
				<router-link class="ds-components-list__link" to="/system/logos">Logos</router-link>
			</li>
			<li class="ds-components-list__item">
				<router-link class="ds-components-list__link" to="/system/buttons">Buttons</router-link>
			</li>
			<li class="ds-components-list__item">
				<router-link class="ds-components-list__link" to="/system/forms">Forms</router-link>
			</li>
			<li class="ds-components-list__item">
				<router-link class="ds-components-list__link" to="/system/tooltips">Tooltips</router-link>
			</li>

			<li class="ds-components-list__item">
				<router-link class="ds-components-list__link" to="/">
					Назад на главную
					<span>v 1.0</span>
				</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {};
</script>

<style lang="less">
@import "../../assets/less/main.less";

.ds-nav-bar {
	background: #2f343a;
	overflow-y: auto;
	height: 100vh;

	position: relative;
	&__logo {
		font-family: @secondFont;
		font-weight: bold;
		font-size: 24px;
		margin: 0 45px;

		color: #ffffff;

		position: relative;
		z-index: 2;

		&:before {
			content: "";
			display: block;
			width: 42px;
			height: 42px;
			border-radius: 50px;
			background: #fc5050;

			position: absolute;
			top: -6px;
			left: -15px;
			z-index: -1;
		}
	}

	&__title {
		font-weight: 600;
		font-size: 24px;
		line-height: 24px;
		margin: 0 45px;
		margin-top: 60px;

		letter-spacing: 0.02em;

		color: #ffffff;
	}

	&__components-list {
		margin-top: 20px;
	}
}

.ds-components-list {
	display: flex;
	flex-direction: column;

	&__item {
		&:nth-last-child(1) {
			position: absolute;
			bottom: 0;

			width: 100%;
		}
	}

	&__link {
		letter-spacing: 0.02em;
		color: #ffffff;
		padding: 18px 45px;
		display: block;

		&:hover {
			background: #fff;

			color: #2f343a;
		}
	}
}
</style>
