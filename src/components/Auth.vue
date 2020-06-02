<template>
	<div class="ds-auth-window">
		<div class="ds-auth-window__popup">
			<svg
				width="133"
				height="29"
				viewBox="0 0 133 29"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle cx="14.1581" cy="14.1581" r="14.1581" fill="#FC5050" />
				<path
					d="M14.3989 20.5935C18.2189 20.5935 19.5455 17.8276 19.7693 16.6655H17.0202C16.7804 17.1074 16.0772 18.0894 14.3989 18.0894C12.5129 18.0894 11.3621 16.5019 11.3621 14.587C11.3621 12.6722 12.5129 11.0846 14.3989 11.0846C15.9653 11.0846 16.7485 12.0502 17.0042 12.5085H19.7693C19.4976 11.1828 18.0911 8.58057 14.3989 8.58057C10.9945 8.58057 8.58105 11.1337 8.58105 14.587C8.58105 18.0403 10.9945 20.5935 14.3989 20.5935Z"
					fill="#2F343A"
				/>
				<path
					d="M21.4709 8.77696V20.3971H31.5882V17.9912H24.188V15.5035H28.2318V13.1631H24.188V11.0683H30.9649V8.77696H21.4709Z"
					fill="#2F343A"
				/>
				<path
					d="M33.1149 8.77696V20.3971H35.7681V12.3939L41.9536 20.4298H44.1593V8.77696H41.57V15.8963L36.1997 8.77696H33.1149Z"
					fill="#2F343A"
				/>
				<path
					d="M45.6763 11.1992H49.9758V20.3971H52.677V11.1992H56.9764V8.77696H45.6763V11.1992Z"
					fill="#2F343A"
				/>
				<path
					d="M58.4945 20.3971H61.2116V15.9782H64.3283L66.7258 20.3971H69.5868L67.0295 15.6672C68.3881 15.1598 69.1872 14.0469 69.1872 12.4267C69.1872 10.0208 67.6528 8.77696 65.1435 8.77696H58.4945V20.3971ZM61.2116 11.1665H64.8558C65.8787 11.1665 66.4062 11.5429 66.4062 12.4267C66.4062 13.2286 65.8627 13.6378 64.8558 13.6378H61.2116V11.1665Z"
					fill="#2F343A"
				/>
				<path
					d="M76.5728 20.5935C79.9613 20.5935 82.5825 18.1221 82.5825 14.587C82.5825 11.0192 79.9613 8.58057 76.5728 8.58057C73.1684 8.58057 70.5472 11.0192 70.5472 14.587C70.5472 18.1385 73.1524 20.5935 76.5728 20.5935ZM76.5728 18.1058C74.5749 18.1058 73.3123 16.5673 73.3123 14.587C73.3123 12.6231 74.5749 11.0683 76.5728 11.0683C78.5707 11.0683 79.8174 12.6394 79.8174 14.587C79.8174 16.551 78.5707 18.1058 76.5728 18.1058Z"
					fill="#2F343A"
				/>
				<path
					d="M83.516 20.3971H94.976V17.9749H87.7196L94.2568 10.3318V8.77696H83.6759V11.1828H89.9892L83.516 18.8095V20.3971Z"
					fill="#2F343A"
				/>
				<path
					d="M101.687 20.5935C105.076 20.5935 107.697 18.1221 107.697 14.587C107.697 11.0192 105.076 8.58057 101.687 8.58057C98.2826 8.58057 95.6614 11.0192 95.6614 14.587C95.6614 18.1385 98.2667 20.5935 101.687 20.5935ZM101.687 18.1058C99.6892 18.1058 98.4265 16.5673 98.4265 14.587C98.4265 12.6231 99.6892 11.0683 101.687 11.0683C103.685 11.0683 104.932 12.6394 104.932 14.587C104.932 16.551 103.685 18.1058 101.687 18.1058Z"
					fill="#2F343A"
				/>
				<path
					d="M109.488 20.3971H112.205V15.9782H115.322L117.719 20.3971H120.58L118.023 15.6672C119.381 15.1598 120.181 14.0469 120.181 12.4267C120.181 10.0208 118.646 8.77696 116.137 8.77696H109.488V20.3971ZM112.205 11.1665H115.849C116.872 11.1665 117.399 11.5429 117.399 12.4267C117.399 13.2286 116.856 13.6378 115.849 13.6378H112.205V11.1665Z"
					fill="#2F343A"
				/>
				<path
					d="M122.084 20.3971H126.783C130.411 20.3971 133 18.3349 133 14.587C133 10.7737 130.411 8.77696 126.783 8.77696H122.084V20.3971ZM126.735 11.1665C128.829 11.1665 130.235 12.3448 130.235 14.587C130.235 16.7474 128.829 18.0076 126.735 18.0076H124.801V11.1665H126.735Z"
					fill="#2F343A"
				/>
			</svg>

			<ul class="ds-auth-window__tabs">
				<li
					v-for="(tab, index) in tabs"
					:key="index"
					class="ds-auth-window__tab"
					:class="{'ds-auth-window__tab--active': tab.active}"
				>
					<a @click="setActive(tab)">{{tab.caption}}</a>
				</li>
			</ul>

			<div class="ds-auth-window__form">
				<form
					v-if="currentTab.type === 'auth'"
					action
					@submit.prevent="register"
					class="ds-auth-window__form-auth form form--auth"
				>
					<div class="modal-window__inner input-area modal-window__inner--number">
						<span class="input-area__text">Email</span>

						<label class="input-area__input-box input-area__input-box--textbox">
							<input
								type="text"
								name="login"
								v-model="email"
								placeholder="Введите email"
								class="input-area__input-editor input-editor--number ym-hide-content"
							/>
						</label>
					</div>

					<div class="modal-window__inner input-area modal-window__inner--number">
						<span class="input-area__text">Пароль</span>

						<label class="input-area__input-box input-area__input-box--textbox">
							<input
								type="password"
								name="password"
								v-model="password"
								placeholder="Введите пароль"
								class="input-area__input-editor input-editor--number ym-hide-content"
							/>
						</label>
					</div>

					<div v-if="getError">{{getError}}</div>
					<button class="ds-auth-window__btn-sub" type="submit">Зарегаться</button>
				</form>

				<form
					v-if="currentTab.type === 'sign'"
					action
					@submit.prevent="signIn"
					class="ds-auth-window__form-sign form form--sign"
				>
					<div class="modal-window__inner input-area modal-window__inner--number">
						<span class="input-area__text">Email</span>

						<label class="input-area__input-box input-area__input-box--textbox">
							<input
								type="text"
								name="login"
								v-model="email"
								placeholder="Введите email"
								class="input-area__input-editor input-editor--number ym-hide-content"
							/>
						</label>
					</div>

					<div class="modal-window__inner input-area modal-window__inner--number">
						<span class="input-area__text">Пароль</span>

						<label class="input-area__input-box input-area__input-box--textbox">
							<input
								type="password"
								name="password"
								v-model="password"
								placeholder="Введите пароль"
								class="input-area__input-editor input-editor--number ym-hide-content"
							/>
						</label>
					</div>
					<div v-if="getError">{{getError}}</div>
					<button class="ds-auth-window__btn-sub" type="submit">Войти</button>
				</form>

				<div class="ds-auth-window__other-auth" v-if="currentTab.type === 'sign'">
					<button class="ds-auth-window__other-auth-btn" @click="signInWithGoogle">
						Авторизация через
						<strong>google</strong>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
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
};
</script>

<style lang="less">
.ds-auth-window {
	background: #53575a;
	height: 100vh;

	display: flex;
	align-items: center;
	justify-content: center;

	&__popup {
		padding: 24px 0;
		width: 336px;
		border-radius: 6px;
		background: #ffffff;
		box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.06);
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	&__tabs {
		display: flex;
		justify-content: space-around;
		border-bottom: 1px solid #c4c4c4;
		width: 100%;
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
			transform: all 0.3s;
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

	&__form {
		width: 100%;
	}

	&__btn-sub {
		margin-top: 8px;
		background: #ff461b;
		border-radius: 58px;
		font-weight: bold;
		font-size: 17px;

		letter-spacing: 0.02em;

		color: #ffffff;

		border: none;
		padding: 20px;
		width: 100%;
		cursor: pointer;
	}

	&__other-auth-btn {
		font-size: 14px;
		letter-spacing: 0.02em;
		color: #8b949d;
		border: none;
		outline: none;
		cursor: pointer;

		strong {
			color: #305dff;
		}
	}

	&__other-auth {
		padding: 0 24px;
	}
}

.form {
	&--sign,
	&--auth {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 24px;
	}
}

.modal-window__inner {
	margin-top: 20px;
	width: 100%;
}
</style>
