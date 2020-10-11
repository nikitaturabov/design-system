<template>
	<cf-modal activeWindow>
		<cf-row center-hor>
			<icon-base width="133" height="29">
				<logo-centrozord></logo-centrozord>
			</icon-base>
		</cf-row>

		<ul class="ds-auth-window__tabs">
			<li
				v-for="(tab, index) in tabs"
				:key="index"
				class="ds-auth-window__tab"
				:class="{ 'ds-auth-window__tab--active': tab.active }"
			>
				<a @click="setActive(tab)">{{ tab.caption }}</a>
			</li>
		</ul>

		<div class="ds-auth-window__form">
			<form v-if="currentTab.type === 'auth'" action @submit.prevent="register">
				<cf-row center-hor>
					<cf-col col="22">
						<cf-input
							caption="Email"
							placeholder="Введите email"
							name="login"
							v-model="email"
							class="ds-auth-window__input"
						></cf-input>
						<cf-input
							caption="Password"
							placeholder="Введите пароль"
							name="password"
							type="password"
							v-model="password"
							:errorText="getError"
							:validate="getError ? 'wrong' : ''"
							class="ds-auth-window__input"
						></cf-input>

						<cf-row center-hor>
							<cf-col col="22">
								<btn
									element="button"
									type="red"
									size="medium"
									text="Зарегаться"
									shape="round"
									class="ds-auth-window__btn"
								></btn>
							</cf-col>
						</cf-row>
					</cf-col>
				</cf-row>
			</form>

			<form v-if="currentTab.type === 'sign'" action @submit.prevent="signIn">
				<cf-row center-hor>
					<cf-col col="22">
						<cf-input
							caption="Email"
							placeholder="Введите email"
							name="login"
							v-model="email"
							class="ds-auth-window__input"
						></cf-input>
						<cf-input
							caption="Password"
							placeholder="Введите пароль"
							name="password"
							type="password"
							v-model="password"
							:errorText="getError"
							:validate="getError ? 'wrong' : ''"
							class="ds-auth-window__input"
						></cf-input>
						<cf-row center-hor>
							<cf-col col="22">
								<btn
									element="button"
									type="red"
									size="medium"
									text="Войти"
									shape="round"
									class="ds-auth-window__btn"
								></btn>
							</cf-col>
						</cf-row>
					</cf-col>
				</cf-row>
			</form>

			<cf-row center-hor v-if="currentTab.type === 'sign'">
				<cf-col col="22">
					<btn
						element="button"
						type="add"
						size="small"
						text="Авторизация через google"
						shape="round"
						@click.native.prevent="signInWithGoogle"
						class="ds-auth-window__btn"
					></btn>
				</cf-col>
			</cf-row>
		</div>
	</cf-modal>
</template>

<script>
import LogoCentrozord from "@/env-components/images/LogoCentrozord";
import IconBase from "@/components/icons/IconBase";
import CfRow from "@/components/layout/CfRow";
import CfCol from "@/components/layout/CfCol";
import CfInput from "@/components/forms/CfInput.vue";
import Btn from "@/components/btns/Btn";
import CfModal from "@/components/modals/CfModal.vue";
export default {
	data() {
		return {
			email: "",
			password: "",
			tabs: [
				{
					caption: "Войти",
					active: true,
					type: "sign",
				},
				{
					caption: "Зарегаться",
					active: false,
					type: "auth",
				},
			],
		};
	},
	methods: {
		register() {
			this.$store.dispatch("registerUser", [this.email, this.password]);
		},

		signIn() {
			this.$store.dispatch("signUser", [this.email, this.password]);
		},
		signInWithGoogle() {
			this.$store.dispatch("signWithGoogle");
		},
		setActive(tab) {
			this.tabs.forEach(el => {
				el.active = el === tab;
			});
		},
	},
	computed: {
		currentTab: function() {
			return this.tabs.reduce((accum, curr) => {
				return curr.active ? curr : accum;
			}, {});
		},
		setUser() {
			console.log(this.$store.getters.getUser);
			return this.$store.getters.getUser;
		},
		getError() {
			return this.$store.getters.getError;
		},
	},
	created() {
		// firebase.auth().onAuthStateChanged(user => {
		// 	this.authUser = user;
		// });
		console.log(this);
	},
	components: {
		CfInput,
		IconBase,
		LogoCentrozord,
		CfRow,
		CfCol,
		Btn,
		CfModal,
	},
};
</script>

<style lang="scss">
.ds-auth-window {
	background: #53575a;
	height: 100vh;

	display: flex;
	align-items: center;
	justify-content: center;

	&__tabs {
		display: flex;
		justify-content: space-around;
		border-bottom: 1px solid #c4c4c4;
		width: 100%;
		margin-top: 24px !important; //убрать при рефакторе
	}

	&__form {
		width: 100%;
	}

	&__btn,
	&__input {
		margin-top: 16px;
	}

	&__tab {
		background: none;
		outline: none;
		border: none;
		font-weight: 500;
		font-size: 17px;
		line-height: 24px;

		padding: 10px 18px;

		color: #8b949d;
		cursor: pointer;

		&--active {
			color: #fc5050;
			position: relative;
			&:after {
				content: "";

				height: 1px;
				background: #fc5050;
				width: 100%;
				position: absolute;
				bottom: -1px;
				left: 0;
			}
		}
	}
}
</style>
