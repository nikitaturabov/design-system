<template>
	<div class="tooltip">
		<slot class="tooltip__curr-element"></slot>
		<div
			class="tooltip__container"
			:class="[{ 'tooltip__container--top-start': position === 'top-start' },
			{ 'tooltip__container--top': position === 'top' },
			{ 'tooltip__container--top-end': position === 'top-end' },
			{ 'tooltip__container--left-start': position === 'left-start' },
			{ 'tooltip__container--right-start': position === 'right-start' },
			{ 'tooltip__container--left': position === 'left' },
			{ 'tooltip__container--right': position === 'right' },
			{ 'tooltip__container--left-end': position === 'left-end' },
			{ 'tooltip__container--right-end': position === 'right-end' },
			{ 'tooltip__container--bottom-start': position === 'bottom-start' },
			{ 'tooltip__container--bottom': position === 'bottom' },
			{ 'tooltip__container--bottom-end': position === 'bottom-end' }]"
		>
			<span class="tooltip__text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		position: {
			type: String,
		},
	},
};
</script>

<style lang="less">
.tooltip {
	position: relative;
	&__container {
		position: absolute;
		top: calc(100% + 16px);
		left: 0;
		max-width: 262px;
		background: #3b3e47;
		border-radius: 4px;
		padding: 16px;
		visibility: hidden;
		opacity: 0;
		transition: 0.2s;
		z-index: 110;

		&:after {
			content: "";

			background: #3b3e47;
			width: 14px;
			height: 14px;
			transform: rotate(45deg);
			position: absolute;
			top: -6px;
			left: 16px;
		}

		&--top-start {
			&:after {
				left: 16px;
			}
		}

		&--top {
			&:after {
				transform: translate(-50%, 0%) rotate(45deg);
				left: 50%;
			}
		}
		&--top-end {
			&:after {
				left: initial;
				right: 16px;
			}
		}
		&--left-start {
			right: calc(100% + 16px);
			left: initial;
			top: 0;
			width: 400px;
			&:after {
				left: initial;
				right: -7px;
				top: 16px;
			}
		}
		&--right-start {
			left: calc(100% + 16px);
			top: 0;
			width: 400px;
			&:after {
				left: -7px;
				top: 16px;
			}
		}
		&--left {
			right: calc(100% + 16px);
			left: initial;
			top: 50%;
			width: 400px;
			transform: translate(0, -50%);
			&:after {
				left: initial;
				right: -7px;
				top: 50%;
				transform: translate(0, -50%) rotate(45deg);
			}
		}
		&--right {
			left: calc(100% + 16px);
			top: 50%;
			width: 400px;
			transform: translate(0, -50%);
			&:after {
				left: -7px;
				top: 50%;
				transform: translate(0, -50%) rotate(45deg);
			}
		}
		&--left-end {
			right: calc(100% + 16px);
			left: initial;
			top: initial;
			bottom: 0;
			width: 400px;
			&:after {
				left: initial;
				right: -7px;
				bottom: 16px;
				top: initial;
			}
		}
		&--right-end {
			left: calc(100% + 16px);
			top: initial;
			bottom: 0;
			width: 400px;
			&:after {
				left: -7px;
				bottom: 16px;
				top: initial;
			}
		}

		&--bottom-start {
			bottom: calc(100% + 16px);
			top: initial;
			&:after {
				left: 16px;
				top: initial;
				bottom: -7px;
			}
		}

		&--bottom {
			bottom: calc(100% + 16px);
			top: initial;
			&:after {
				transform: translate(-50%, 0%) rotate(45deg);
				left: 50%;
				top: initial;
				bottom: -7px;
			}
		}
		&--bottom-end {
			bottom: calc(100% + 16px);
			top: initial;
			&:after {
				left: initial;
				right: 16px;
				top: initial;
				bottom: -7px;
			}
		}
	}

	&__text {
		font-size: 12px;
		line-height: 16px;
		letter-spacing: 0.02em;
		color: #ffffff;
	}

	&:hover {
		.tooltip__container {
			visibility: visible;
			opacity: 1;
			transition: 0.2s;
		}
	}
}
</style>