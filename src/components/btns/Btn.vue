<template>
	<div>
		<button
			class="btn"
			:class="[
				setColor,
				setSize,
				setShape,
				{ 'btn--image-right': withImage },
				{ 'btn--disable': disable },
				{ 'btn--image-left': withImageLeft },
			]"
			v-if="element === 'button'"
			:disabled="disable"
		>
			<span>{{ text }}</span>
			<icon-base
				v-if="(withImage || withImageLeft) && image === 'arrow'"
				height="24"
				width="24"
				:iconColor="fill[type].clr"
			>
				<arrow-btn />
			</icon-base>
			<icon-base
				v-if="(withImage || withImageLeft) && image === 'plus'"
				height="24"
				width="24"
				:iconColor="fill[type].clr"
			>
				<plus />
			</icon-base>
		</button>
		<a v-if="element === 'link'" class="btn btn--red" :class="[setColor, setSize, setShape]">{{ text }}</a>
		<label v-if="element === 'input'">
			<input type="button" class="btn btn--red" :class="[setColor, setSize, setShape]" :value="text" />
		</label>
	</div>
</template>

<script>
import IconBase from "@/components/icons/IconBase";
import ArrowBtn from "@/components/icons/ArrowBtn";
import Plus from "@/components/icons/Plus";
export default {
	props: {
		element: {
			type: String,
			default: "button",
		},
		type: {
			type: String,
			default: "red",
		},
		size: {
			type: String,
			default: "medium",
		},
		text: {
			type: String,
			default: "Button",
		},
		shape: {
			type: String,
			default: "round",
		},
		withImage: {
			type: Boolean,
			default: false,
		},
		image: {
			type: String,
			default: "arrow",
		},
		disable: {
			type: Boolean,
			default: false,
		},
		withImageLeft: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			fill: {
				red: {
					bg: "#ff461b",
					clr: "#fff",
				},
				white: {
					bg: "#fff",
					clr: "#ff461b",
				},
				secondary: {
					bg: "#CFD2D4",
					clr: "#646B72",
				},
				clear: {
					clr: "#2f343a",
				},
				add: {
					clr: "#305DFF",
				},
				delete: {
					clr: "#ff461b",
				},
				cancel: {
					clr: "#53575A",
				},
				"detail-dark": {
					clr: "#FFFFFF",
				},
				"detail-light": {
					clr: "#2F343A",
				},
			},
		};
	},
	computed: {
		setColor() {
			return `btn--${this.type}`;
		},
		setSize() {
			return `btn--${this.size}`;
		},
		setShape() {
			return `btn--${this.shape}`;
		},
	},
	components: {
		IconBase,
		ArrowBtn,
		Plus,
	},
};
</script>

<style lang="scss">
.btn {
	//font-family: $mainFont;
	border: none;
	outline: none;
	box-sizing: border-box;
	white-space: nowrap;
	cursor: pointer;
	transition: 0.1s;

	&--red,
	&--white,
	&--secondary,
	&--clear,
	&--add,
	&--delete {
		font-weight: 600;
	}

	&--red {
		background: #ff461b;
		color: #fff;
		letter-spacing: 0.01em;
		border: none;

		&:hover {
			background: #e24f2d;
		}
	}

	&--white {
		background: #ffffff;
		letter-spacing: 0.02em;
		color: #ff461b;

		&:hover {
			background: #ff461b;
			color: #ffffff;
		}
	}

	&--secondary {
		background: #cfd2d4;
		color: #646b72;

		&:hover {
			background: #dde5ee;
		}
	}

	&--clear {
		background: none;
		border: 1.5px solid #2f343a;
		color: #2f343a;

		&:hover {
			background: #2f343a;
			color: #fff;

			svg {
				stroke: #fff;
			}
		}
	}

	&--detail-dark {
		background: #465067;
		color: #ffffff;
	}

	&--detail-light {
		background: #e4e8ed;
		color: #2f343a;
	}

	&--add,
	&--delete,
	&--cancel {
		background: none;
	}

	&--add {
		color: #305dff;
	}

	&--delete {
		color: #ff461b;
	}

	&--cancel {
		color: #53575a;
	}

	&--small {
		padding: 0.84rem 1.75rem;
		min-width: 146px;
		width: 100%;
		font-size: 17px;
		letter-spacing: 0.02em;
	}

	&--medium {
		padding: 1.12rem 1.75rem;
		min-width: 224px;
		width: 100%;
		letter-spacing: 0.02em;
		font-size: 17px;
		line-height: 24px;
	}

	&--large {
		padding: 1.12rem 1.75rem;
		min-width: 256px;
		width: 100%;
		letter-spacing: 0.01em;
		font-size: 20px;
		line-height: 24px;
		font-weight: bold;
	}

	&--image &--small {
		min-width: 192px;
		max-height: 46px;
		padding: 16px 26px 16px 16px;
	}

	&--image &--large,
	&--image &--medium {
		min-width: 192px;
		max-height: 64px;
	}

	&--image-right,
	&--image-left {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	&--image-left {
		flex-direction: row-reverse;
	}

	&--round {
		border-radius: 300px;
	}

	&--square {
		border-radius: 10px;
	}

	&--disable,
	&--disable:hover {
		opacity: 0.5;
		cursor: not-allowed;
	}
}
</style>
