<template>
	<div class="ds-page">
		<nav-bar class="ds-page__nav-bar"></nav-bar>
		<block-view class="ds-page__block-view"></block-view>
	</div>
</template>

<script>
import NavBar from "@/components/platform/NavBar.vue";
import BlockView from "@/components/platform/BlockView.vue";
export default {
	name: "App",
	components: {
		NavBar,
		BlockView,
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
	}

	&__block-view {
		flex: 1;
		padding: 56px 85px;
	}
}
</style>
