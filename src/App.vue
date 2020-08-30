<template>
	<div id="app">
		<profile></profile>
		<router-view></router-view>
	</div>
</template>

<script>
import Profile from "@/partials/Profile.vue";
export default {
	name: "App",
	components: {
		Profile,
	},
};
</script>

<style lang="scss"></style>
