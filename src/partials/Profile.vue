<template>
	<div v-if="setUser" class="ds-profile">
		<img v-if="setUser.photoURL" :src="setUser.photoURL" class="ds-profile__avatar" />
		<div v-else class="ds-profile__name">{{ setUser.email.slice(0, 1).toLocaleUpperCase() }}</div>
		<btn element="button" type="delete" size="small" text="Выйти" shape="round" @click.native.prevent="signOut"></btn>
	</div>
</template>

<script>
import Btn from "@/components/btns/Btn";
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
	components: {
		Btn,
	},
};
</script>

<style lang="scss">
.ds-profile {
	position: absolute;
	top: 24px;
	right: 24px;
	display: flex;
	align-items: center;
	z-index: 1;

	&__name {
		font-size: 20px;
		font-weight: 700;
		margin-right: 8px;
		width: 32px;
		height: 32px;
		border-radius: 32px;
		background: linear-gradient(to top right, #ff461b, #f5a800);
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
	}

	&__avatar {
		height: 28px;
		width: 28px;
		border-radius: 100px;
		margin-right: 8px;
	}
}
</style>
