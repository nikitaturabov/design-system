<template>
	<div class="select">
		<div v-if="caption" class="select__caption">{{ caption }}</div>
		<label
			class="select__wrapper"
			:class="[{ 'select__wrapper--error': validate === 'wrong' }, { 'select__wrapper--disabled': !!disabled }]"
		>
			<input class="select__editor" type="text" :placeholder="placeholder" :disabled="disabled" />
			<div class="select__wrong" v-html="triangleIcon"></div>
		</label>
		<div v-if="errorText" class="select__error">{{ errorText }}</div>
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
	},
	data() {
		return {
			triangleIcon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9L12 15L18 9" stroke="#53575A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>`,
		};
	},
};
</script>

<style lang="less">
.select {
	margin: 8px;
	&__caption {
		letter-spacing: 0.01em;
		color: #2f343a;
		font-weight: 500;
		font-size: 14px;
	}

	&__wrapper {
		margin-top: 8px;

		border: 1px solid #c8d4e2;
		border-radius: 4px;
		padding: 8px 16px;

		min-width: 242px;

		display: block;

		position: relative;

		cursor: text;

		&--error {
			border: 1px solid #fc5050;
		}

		&--disabled {
			background: #e9eef3;

			input {
				color: #8b949d;
			}
		}
	}

	&__editor {
		border: none;
		outline: none;
		background: none;
		width: 100%;

		color: #2f343a;

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
		right: 0;

		display: flex;
		justify-content: center;
		align-items: center;
	}
}
</style>
