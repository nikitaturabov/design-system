<template>
	<div v-if="setUser" class="ds-page">
		<profile></profile>
		<button
			class="ds-page__toggle-menu"
			:class="{ 'ds-page__toggle-menu--hidden': viewMenu }"
			@click="handlerHideMenu"
			v-html="burger"
		></button>
		<nav-bar class="ds-page__nav-bar" :class="{ 'ds-page__nav-bar--hidden': !viewMenu }"></nav-bar>
		<block-view class="ds-page__block-view"></block-view>
	</div>
</template>

<script>
import NavBar from "@/components/platform/NavBar.vue";
import BlockView from "@/components/platform/BlockView.vue";
import Profile from "@/components/platform/Profile.vue";
export default {
	data() {
		return {
			viewMenu: true,
			burger: `<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M21.0832 6.70834V4.79167H1.9165V6.70834H21.0832ZM21.0832 10.5417V12.4583H1.9165V10.5417H21.0832ZM21.0832 16.2917V18.2083H1.9165V16.2917H21.0832Z" fill="#333333"/>
					</svg>`,
		};
	},
	name: "App",
	components: {
		NavBar,
		BlockView,
		Profile,
	},
	computed: {
		setUser() {
			return this.$store.getters.getUser;
		},
	},
	methods: {
		handlerHideMenu() {
			this.viewMenu = !this.viewMenu;
		},
	},
};
</script>

<style lang="less">
.ds-page {
	display: flex;
	justify-content: space-between;

	&__nav-bar {
		width: 307px;
		padding: 63px 0;
		transition: width 0.5s;
		&--hidden {
			width: 0;
		}
	}

	&__block-view {
		flex: 1;
		padding: 56px 85px;
	}

	&__toggle-menu {
		position: fixed;
		top: 0;
		left: 0;
		background: none;
		height: 40px;
		width: 40px;

		z-index: 11;

		border: none;
		outline: none;
		&--hidden {
			path {
				fill: #fff;
			}
		}
	}
}
</style>
