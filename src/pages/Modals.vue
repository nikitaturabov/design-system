<template>
	<component-wrapper name="Input without label">
		<btn
			element="button"
			type="red"
			size="small"
			text="Показать модальное окно"
			shape="round"
			@click.prevent.native="handler()"
		></btn>

		<cf-modal class="info-modal" :activeWindow="openedWindow" @activeSetter="activeSetter" closeBtn>
			<cf-row>
				<cf-col col="24" rows class="info-modal__content">
					<h3 class="info-modal__title">Заголовок</h3>
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
	</component-wrapper>
</template>

<script>
import CfModal from "@/components/modals/CfModal.vue";
import ComponentWrapper from "@/partials/ComponentWrapper";
import CfRow from "@/components/layout/CfRow";
import CfCol from "@/components/layout/CfCol";
import Btn from "@/components/btns/Btn";
export default {
	name: "Modals",
	data() {
		return {
			openedWindow: false,
		};
	},
	components: {
		CfModal,
		ComponentWrapper,
		CfRow,
		CfCol,
		Btn,
	},
	methods: {
		handler() {
			this.openedWindow = true;
		},
		activeSetter(status) {
			this.openedWindow = status;
		},
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
</style>
