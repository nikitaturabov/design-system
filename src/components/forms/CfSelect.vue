<template>
	<div class="select">
		<div v-if="caption" class="select__caption">{{ caption }}</div>
		<label
			class="select__wrapper"
			:class="[{ 'select__wrapper--error': validate === 'wrong' }, { 'select__wrapper--disabled': !!disabled }, { 'select__wrapper--focus': inFocused }]"
		>
			<input
				class="select__editor"
				type="text"
				:placeholder="placeholder"
				:disabled="disabled"
				@focus="inFocused = true"
				@blur="inFocused = false"
				@click="dropdownShow = !dropdownShow"
				v-model="selectedValue"
			/>
			<div
				class="select__triangle"
				v-html="triangleIcon"
				:class="[ { 'select__triangle--rotate': dropdownShow } ]"
			></div>
		</label>
		<div v-if="errorText" class="select__error">{{ errorText }}</div>

		<ul class="select__dropdown" :class=" { 'select__dropdown--active': dropdownShow} ">
			<li
				class="select__dropdown-item"
				v-for="(option, index) in options"
				:key="index"
				@click="handlerItemDropdown(option)"
			>{{ option.text }}</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: {
		placeholder: {
			type: String,
		},
		errorText: {
			type: String,
		},
		caption: {
			type: String,
			default: "",
		},
		validate: {
			type: String,
		},
		disabled: {
			type: Boolean,
		},
		options: {
			type: Array,
		},
	},
	data() {
		return {
			dropdownShow: false,
			inFocused: false,
			selectedValue: "",
			triangleIcon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9L12 15L18 9" stroke="#53575A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>`,
		};
	},
	methods: {
		handlerItemDropdown(option) {
			this.selectedValue = option.text;
			this.dropdownShow = false;
		},
	},
};
</script>

<style lang="less">
.select {
	margin: 8px;
	position: relative;
	&__caption {
		letter-spacing: 0.01em;
		color: #2f343a;
		font-weight: 500;
		font-size: 14px;
	}

	&__wrapper {
		margin-top: 8px;

		background: #ffffff;

		border: 1px solid #c8d4e2;
		border-radius: 4px;
		padding: 8px 16px;

		min-width: 242px;

		display: block;

		position: relative;

		cursor: pointer;

		&--error {
			border: 1px solid #fc5050;
		}

		&--disabled {
			background: #e9eef3;

			input {
				color: #8b949d;
			}
		}

		&--focus {
			border: 1px solid #305dff;
		}
	}

	&__triangle {
		width: 24px;
		height: 24px;

		position: absolute;

		top: 25%;
		right: 8px;

		display: flex;
		justify-content: center;
		align-items: center;

		transition: transform 0.5s;
		&--rotate {
			transform: rotate(180deg);
		}
	}

	&__editor {
		border: none;
		outline: none;
		background: none;
		width: 100%;

		color: #2f343a;

		cursor: pointer;

		&::placeholder {
			color: #8b949d;
		}
	}

	&__error {
		margin-top: 8px;

		font-size: 10px;
		letter-spacing: 0.01em;
		color: #fc5050;
	}

	&__done,
	&__wrong {
		width: 16px;
		height: 16px;

		transform: translate(-50%, -50%);
		position: absolute;

		top: 50%;
		right: 8px;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	&__dropdown {
		max-height: 0px;
		overflow: hidden;
		opacity: 0;

		padding: 8px 0;
		position: absolute;
		top: 80px;
		left: 0;

		width: 100%;
		background: #ffffff;
		border: 1px solid #e4e7ed;
		box-sizing: border-box;
		border-radius: 8px;

		color: #53575a;
		letter-spacing: 0.02em;

		animation: closeDropdown 0.5s forwards;

		&--active {
			display: block;

			transition: all 0.5s;
			animation: openDropdown 0.5s forwards;
			overflow-y: auto;
		}
	}

	&__dropdown-item {
		padding: 8px;

		&:hover {
			background: #e9edf0;
		}
	}

	@keyframes openDropdown {
		0% {
			max-height: 0px;
			opacity: 1;
		}
		50% {
			max-height: 300px;
		}
		100% {
			padding: 21px 0;
			max-height: 300px;
			opacity: 1;
			overflow-y: auto;
		}
	}

	@keyframes closeDropdown {
		0% {
			overflow: hidden;
			max-height: 300px;
		}
		50% {
			max-height: 0px;
		}
		100% {
			padding: 0;
			opacity: 0;
		}
	}
}
</style>
