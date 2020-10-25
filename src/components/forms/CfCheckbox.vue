<template>
	<div class="checkbox">
		<label class="checkbox__label">
			<input class="checkbox__input" type="checkbox" :name="name" :checked="checked" :disabled="disabled" required />
			<div class="checkbox__box">
				<icon-base height="18" width="18" class="checkbox__icon-check">
					<icon-check />
				</icon-base>
			</div>
			<span v-if="subtext.length" class="checkbox__text"> {{ subtext }}</span>
		</label>
	</div>
</template>

<script>
import IconBase from "@/components/icons/IconBase.vue";
import IconCheck from "@/components/icons/CheckboxCheck.vue";

export default {
	props: {
		checked: {
			type: Boolean,
			default: false,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		subtext: {
			type: String,
			default: "",
		},
		name: {
			type: String,
			default: "",
		},
	},
	data() {
		return {};
	},
	components: {
		IconBase,
		IconCheck,
	},
};
</script>

<style lang="scss" scoped>
.checkbox {
	&__label {
		display: flex;
		align-items: center;
		width: 100%;
		position: relative;
		padding: $grid-gutter * 2;
	}

	&__input {
		opacity: 0;
		position: absolute;
		z-index: -1;
	}

	&__text {
		cursor: pointer;
		font-size: 17px;
		line-height: 1.3;
		letter-spacing: 0.01em;
	}

	&__box {
		cursor: pointer;
		width: 24px;
		height: 24px;
		border-radius: 4px;
		border: 2px solid #bdc6cf;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: all 0.1s;
		flex-shrink: 0;
	}

	&__input:disabled:checked + &__box:after {
		opacity: 0.5;
	}

	&__input:disabled ~ &__text {
		color: $TextSecondary;
	}

	&__text {
		padding-left: $grid-gutter * 2;
	}

	&__input:checked + .checkbox__box {
		background: #66ce71;
		border-color: #66ce71;

		.checkbox__icon-check {
			display: block;
		}
	}

	&__input:disabled + .checkbox__box {
		background: #ededed;
		border: 2px solid #d0d0d0;

		cursor: default;
	}

	&__input:disabled:checked + .checkbox__box {
		background: #ededed;
		border: 2px solid #d0d0d0;

		cursor: default;

		path {
			stroke: #c4c4c4;
		}
	}

	&__input:disabled ~ .checkbox__text {
		color: #c4c4c4;

		cursor: default;
	}

	&__icon-check {
		display: none;
	}
}
</style>
