<template>
	<div v-if="setUser" class="ds-profile">
		<img v-if="setUser.photoURL" :src="setUser.photoURL" class="ds-profile__avatar" />
		<h2 class="ds-profile__name">{{setUser.email}}</h2>
		<button @click="signOut">Выйти</button>
	</div>
</template>

<script>
export default {
	computed: {
		setUser() {
			return this.$store.getters.getUser;
		},
	},
	methods: {
		signOut() {
			this.$store.dispatch("signOut");
		},
	},
	created() {
		this.$store.dispatch("checkCurrentState");
	},
};
</script>

<style lang="less">
.ds-profile {
	position: absolute;
	top: 24px;
	right: 24px;
	display: flex;
	align-items: center;
	z-index: 1;

	&__name {
		font-size: 14px;
		font-weight: 700;
		margin-right: 8px;
	}
	&__avatar {
		height: 28px;
		width: 28px;
		border-radius: 100px;
		margin-right: 8px;
	}
}
</style>