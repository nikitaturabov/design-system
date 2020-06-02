<template>
	<div class="input">
		<div v-if="caption" class="input__caption">{{ caption }}</div>
		<label
			class="input__wrapper"
			:class="[{ 'input__wrapper--error': validate === 'wrong' }, { 'input__wrapper--disabled': !!disabled }]"
		>
			<input class="input__editor" type="text" :placeholder="placeholder" :disabled="disabled" />
			<div v-if="validate === 'done'" class="input__done" v-html="iconDone"></div>
			<div v-if="validate === 'wrong'" class="input__wrong" v-html="iconWrong"></div>
		</label>
		<div v-if="errorText" class="input__error">{{ errorText }}</div>
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
			iconDone: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="8" cy="8" r="8" fill="#8BDA93"/>
						<path d="M11.5554 5.33325L6.66656 10.2221L4.44434 7.99992" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>`,
			iconWrong: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="8" cy="8" r="8" fill="#FC5050"/>
							<path d="M11 5L5 11" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M5 5L11 11" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>`,
		};
	},
};
</script>

<style lang="less">
.input {
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