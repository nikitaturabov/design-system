<template>
	<div>
		<button class="btn" :class="[setColor, setSize, setShape, { 'btn--arrow': arrow }]" v-if="element === 'button'">
			{{ text }}
			<svg v-if="arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g clip-path="url(#clip0)">
					<path
						d="M7.15256e-07 12L19 12"
						stroke="#FC5050"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M12 5L19 12L12 19"
						stroke="#FC5050"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</g>
				<defs>
					<clipPath id="clip0">
						<rect x="24" y="24" width="24" height="24" transform="rotate(-180 24 24)" fill="white" />
					</clipPath>
				</defs>
			</svg>
		</button>
		<a v-if="element === 'link'" class="btn btn--red" :class="[setColor, setSize, setShape]">{{ text }}</a>
		<label v-if="element === 'input'">
			<input type="button" class="btn btn--red" :class="[setColor, setSize, setShape]" :value="text" />
		</label>
	</div>
</template>

<script>
export default {
	props: {
		element: {
			type: String,
			default: "button",
		},
		color: {
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
		arrow: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {};
	},
	computed: {
		setColor() {
			console.log(this.color);
			return `btn--${this.color}`;
		},
		setSize() {
			return `btn--${this.size}`;
		},
		setShape() {
			return `btn--${this.shape}`;
		},
		setArrow() {
			return ``;
		},
	},
};
</script>

<style lang="scss">
.btn {
	//font-family: $mainFont;
	border: none;
	outline: none;
	font-weight: 600;
	box-sizing: border-box;
	white-space: nowrap;
	&--red {
		background: #fc5050;
		color: #fff;
		letter-spacing: 0.01em;
		box-shadow: 0px 20px 25px rgba(252, 80, 80, 0.16), 0px 10px 10px rgba(0, 0, 0, 0.04);
		border: none;
	}
	&--white {
		background: #ffffff;
		box-shadow: 0px 10px 16px rgba(99, 99, 99, 0.1), 0px 4px 6px rgba(222, 105, 105, 0.06);
		letter-spacing: 0.02em;
		color: #ff461b;
	}
	&--clear {
		background: none;
		border: 1.5px solid #fc5050;
		color: #fc5050;
	}
	&--small {
		padding: 0.84rem 0.75rem;
		min-width: 146px;
		font-size: 17px;
		letter-spacing: 0.02em;
	}
	&--medium {
		padding: 1.12rem 0.75rem;
		min-width: 224px;
		letter-spacing: 0.02em;
		font-size: 17px;
		line-height: 24px;
	}
	&--large {
		padding: 1.12rem 0.75rem;
		min-width: 256px;
		letter-spacing: 0.01em;
		font-size: 20px;
		line-height: 24px;
		font-weight: bold;
	}
	&--arrow &--small {
		min-width: 192px;
		max-height: 46px;
		padding: 16px 26px 16px 16px;
	}
	&--arrow &--medium {
		min-width: 192px;
		max-height: 64px;
	}
	&--arrow &--large {
		min-width: 192px;
		max-height: 64px;
	}
	&--arrow {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	&--round {
		border-radius: 300px;
	}
	&--square {
		border-radius: 4px;
	}
}
</style>
