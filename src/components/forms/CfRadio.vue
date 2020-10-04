<template>
	<div class="radio">
		<label class="radio__label">
			<input class="radio__input" type="radio" :name="name" :checked="checked" :disabled="disabled" />
			<div class="radio__box"></div>
			<span v-if="subtext.length" class="radio__text"> {{ subtext }}</span>
		</label>
	</div>
</template>

<script>
export default {
	name: "CfRadio",
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
};
</script>

<style lang="scss" scoped>
.radio {
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

	&__box {
		$size: $grid-gutter * 3;
		width: $size;
		height: $size;
		border: 2px solid $BorderLands;
		border-radius: $size;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;

		&:after {
			content: "";
			display: block;
			width: $grid-gutter * 1.75;
			height: $grid-gutter * 1.75;
			border-radius: $grid-gutter * 1.75;
			background: $OrangeCF;
			opacity: 0;
		}
	}

	&__input:checked + &__box:after {
		opacity: 1;
	}

	&__input:disabled + &__box {
		background: #d3d3d3;
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
}
</style>
