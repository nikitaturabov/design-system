<template>
	<div class="modal modal__bg" v-if="activeWindow">
		<div class="modal__window">
			<button v-if="closeBtn" class="modal__btn-close" @click.prevent="$emit('activeSetter', false)">
				<icon-base width="16" height="16">
					<cross></cross>
				</icon-base>
			</button>
			<div class="modal__content">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
import IconBase from "@/components/icons/IconBase";
import Cross from "@/components/icons/Cross";
export default {
	name: "CfModal",
	props: {
		activeWindow: {
			type: Boolean,
			default: false,
		},
		closeBtn: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			setActive: true,
		};
	},
	components: {
		IconBase,
		Cross,
	},
	methods: {
		CloseWindow() {
			this.setActive = !this.setActive;
		},
	},
};
</script>

<style lang="scss" scoped>
.modal {
	&__btn-close {
		width: $grid-gutter * 3;
		height: $grid-gutter * 3;
		border-radius: $grid-gutter * 3;
		outline: none;
		border: none;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		position: absolute;
		top: $grid-gutter * 2;
		right: $grid-gutter * 2;
	}

	&__bg {
		background: rgba(0, 0, 0, 0.6);
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}

	&__window {
		background: #fff;
		border-radius: $grid-gutter;
		max-width: 600px;
		min-width: 360px;
		height: auto;
		padding: $grid-gutter * 7 0 $grid-gutter * 2;
		position: relative;
		margin: $grid-gutter * 2;
	}
}
</style>
