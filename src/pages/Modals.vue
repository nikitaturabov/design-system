<template>
	<component-wrapper name="Input without label">
		<cf-row centerHor class="info-modal__btns">
			<cf-col col="10">
				<btn
					element="button"
					mode="red"
					size="large"
					text="Показать модальное окно"
					shape="round"
					@click.prevent.native="handlerOpenModal()"
				></btn>
			</cf-col>
			<cf-col col="4"> </cf-col>
			<cf-col col="10">
				<btn
					element="button"
					mode="red"
					size="large"
					text="Показать окно авторизации ЛК"
					shape="round"
					@click.prevent.native="handlerOpenAuthLK()"
				></btn>
			</cf-col>
		</cf-row>

		<cf-modal class="info-modal" :activeWindow="openedWindowModal" @activeSetter="activeSetter" closeBtn>
			<cf-row>
				<cf-col col="24" rows class="info-modal__content">
					<tooltip class="info-modal__title" position="bottom" text="Это заголовок">
						<h3>Заголовок</h3>
					</tooltip>
					<div class="info-modal__text">
						Каждый из нас понимает очевидную вещь: реализация намеченных плановых заданий влечет за собой процесс
						внедрения и модернизации экспериментов, поражающих по своей масштабности и грандиозности.
					</div>
					<cf-row centerHor class="info-modal__btns">
						<cf-col col="9">
							<btn element="button" type="secondary" size="small" text="Button" shape="round"></btn>
						</cf-col>
						<cf-col col="4"> </cf-col>
						<cf-col col="9">
							<btn element="button" type="red" size="small" text="Button" shape="round"></btn>
						</cf-col>
					</cf-row>
				</cf-col>
			</cf-row>
		</cf-modal>

		<cf-modal class="info-modal-auth" :activeWindow="openedWindowAuth" @activeSetter="activeSetter" closeBtn>
			<cf-row>
				<cf-col col="24" rows class="info-modal-auth__content">
					<cf-row centerHor class="info-modal-auth__content">
						<cf-col col="24">
							<h3 class="info-modal-auth__title">Личный кабинет</h3>
							<div class="info-modal-auth__text">
								Для входа необходим номер телефона, который вы указали при оформлении договора
							</div>
							<form action="http://#">
								<cf-validate valType="tel" text="Телефон должен состоять из 11 цифр">
									<cf-input
										placeholder="+7 (800) 555-65-65"
										mask="+7 (999) 999-99-99"
										caption="Введите номер телефона"
										class="info-modal-auth__input"
										v-model="inputData"
									></cf-input>
								</cf-validate>
								<cf-checkbox
									subtext="Я ознакомлен с правилами предоставления займов, политикой сайта, даю согласие на обработку личных данных"
									class="info-modal-auth__checkbox"
								></cf-checkbox>

								<btn
									element="button"
									mode="red"
									size="large"
									text="Продолжить"
									shape="round"
									class="info-modal-auth__btn"
								></btn>
							</form>
							<div class="info-modal-auth__sub-text">
								Ваши данные в безопасности. Они передаются и хранятся в зашифрованном виде в защищенном дата центре
							</div>
						</cf-col>
					</cf-row>
				</cf-col>
			</cf-row>
		</cf-modal>
	</component-wrapper>
</template>

<script>
import CfModal from "@/components/modals/CfModal.vue";
import ComponentWrapper from "@/partials/ComponentWrapper";
import CfRow from "@/components/layout/CfRow";
import CfCol from "@/components/layout/CfCol";
import Btn from "@/components/btns/Btn";
import CfCheckbox from "@/components/forms/CfCheckbox";
import CfInput from "@/components/forms/CfInput";
import CfValidate from "@/components/forms/CfValidate";
import Tooltip from "@/components/tooltip/Tooltip.vue";
export default {
	name: "Modals",
	data() {
		return {
			openedWindowModal: false,
			openedWindowAuth: false,
			inputData: "",
		};
	},
	components: {
		CfModal,
		ComponentWrapper,
		CfRow,
		CfCol,
		Btn,
		CfCheckbox,
		CfInput,
		CfValidate,
		Tooltip,
	},
	methods: {
		handlerOpenModal() {
			this.openedWindowModal = true;
		},
		activeSetter(status) {
			this.openedWindowModal = status;
			this.openedWindowAuth = status;
		},
		handlerOpenAuthLK() {
			this.openedWindowAuth = true;
		},
		submitForm() {},
	},
};
</script>

<style lang="scss">
.info-modal {
	&__content {
		padding: 0 $grid-gutter * 2;
	}

	&__title {
		align-self: center;

		font-size: 24px;
		letter-spacing: 0.02em;
		color: #2f343a;
	}

	&__text {
		align-self: center;
		text-align: center;

		margin-top: $grid-gutter;
	}

	&__btns {
		margin-top: $grid-gutter * 5;
	}
}

.info-modal-auth {
	&__content {
		padding: 0 $grid-gutter * 2;
	}

	&__title {
		text-align: center;
		font-size: 24px;
		letter-spacing: 0.02em;
		color: #2f343a;
	}

	&__text {
		align-self: center;
		text-align: center;
		font-size: 16px;
	}

	&__btns {
		margin-top: $grid-gutter * 5;
	}

	&__checkbox {
		font-size: 14px;
	}

	&__sub-text {
		font-size: 12px;
		color: #8b949d;
		text-align: center;
	}

	&__text,
	&__input,
	&__checkbox,
	&__btn,
	&__sub-text {
		margin-top: $grid-gutter * 2;
	}
}
</style>
