<template>
	<div id="app">
		<profile></profile>
		<router-view></router-view>
	</div>
</template>

<script>
import Profile from "@/components/platform/Profile.vue";
export default {
	name: "App",
	components: {
		Profile,
	},
};
</script>

<style lang="less"></style>
