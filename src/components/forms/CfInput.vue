<template>
	<div class="input">
		<div v-if="caption" class="input__caption">{{ caption }}</div>
		<label
			class="input__wrapper"
			:class="[
				{ 'input__wrapper--error': validate === 'wrong' },
				{ 'input__wrapper--disabled': !!disabled },
				{ 'input__wrapper--focus': inFocused },
			]"
		>
			<input
				class="input__editor"
				:name="name"
				:placeholder="placeholder"
				:disabled="disabled"
				:value="value"
				:type="type"
				@input="$emit('input', $event.target.value)"
				@focus="inFocused = true"
				@blur="(inFocused = false), $parent.$emit('any-data', $event.target.value)"
				v-mask="mask"
			/>
			<icon-base v-if="validate === 'done'" height="16" width="16" class="input__done"><success /></icon-base>
			<icon-base v-if="validate === 'wrong' || errorText" height="16" width="16" class="input__wrong"
				><wrong
			/></icon-base>
		</label>
		<div v-if="errorText" class="input__error">{{ errorText }}</div>
	</div>
</template>

<script>
import IconBase from "@/components/icons/IconBase.vue";
import Success from "@/components/icons/Success.vue";
import Wrong from "@/components/icons/Wrong.vue";

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
		mask: {
			type: String,
		},
		name: {
			type: String,
			default: "",
		},
		value: {
			type: String,
			default: "",
		},
		type: {
			type: String,
			default: "text",
		},
	},
	data() {
		return {
			inFocused: false,
		};
	},
	components: {
		IconBase,
		Success,
		Wrong,
	},
};
</script>

<style lang="scss">
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

		background: #ffffff;

		border: 0.5px solid #bdc6cf;
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
			cursor: default;

			input {
				color: #8b949d;
			}
		}

		&--focus {
			border: 1px solid #305dff;
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
		transform: translate(-50%, -50%);
		position: absolute;

		top: 50%;
		right: 0;
	}
}
</style>
