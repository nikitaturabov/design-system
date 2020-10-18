<template>
	<div class="slider">
		<div class="slider__counter">
			<button class="slider__counter__minus" @click.prevent="stepBackward" v-if="setButtons">-</button>
			<div class="slider__counter__value-wrapper">
				<input class="slider__counter__value" :value="value + units" @blur="validateValue" ref="counter" />
			</div>
			<button class="slider__counter__plus" @click.prevent="stepForward" v-if="setButtons">+</button>
		</div>
		<vue-slider
			v-model="value"
			:interval="interval"
			:min="min"
			:max="max"
			:process-style="{ backgroundColor: '#FF461B' }"
			:tooltip="'none'"
		>
			<template v-slot:dot="{ value, focus }">
				<div :class="['custom-dot', { focus }]"></div>
			</template>
			<template class="custom-tooltip" v-slot:tooltip="{ value }">
				<div class="custom-tooltip">{{ value }}</div>
			</template>
		</vue-slider>
		<div class="slider__minmax">
			<div class="slider__min">{{ min }}</div>
			<div class="slider__max">{{ max }}</div>
		</div>

		<div class="slider__fast-btns" v-if="fastButtons.length">
			<div
				class="slider__fast-btns__btn"
				@click.prevent="setValueFastBtn(value)"
				v-for="value of fastButtons"
				:key="value"
			>
				{{ `${value} ${units}` }}
			</div>
		</div>
	</div>
</template>

<script>
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";

export default {
	name: "CfSlider",
	props: {
		min: {
			type: Number,
			default: 0,
		},
		max: {
			type: Number,
			default: 1000,
		},
		interval: {
			type: Number,
			default: 1,
		},
		val: {
			type: Number,
			default: 0,
		},
		units: {
			type: String,
			default: "",
		},
		setButtons: {
			type: Boolean,
			default: false,
		},
		fastButtons: {
			type: Array,
			default: () => [],
		},
	},
	data() {
		return {
			value: 0,
		};
	},
	components: {
		VueSlider,
	},
	methods: {
		stepForward() {
			let result = this.value + this.interval;
			if (result <= this.max) {
				this.value = result;
			}
		},
		stepBackward() {
			let result = this.value - this.interval;
			if (result >= this.min) {
				this.value = result;
			}
		},
		validateValue() {
			let counterVal = Number(this.$refs.counter.value.replace(/\D+/g, ""));
			console.log(counterVal);
			if (counterVal % this.interval) {
				this.value = counterVal - (counterVal % this.interval);
			}
			if (counterVal > this.max) {
				this.value = this.max;
			}
			if (counterVal < this.min) {
				this.value = this.min;
			}
		},
		setValueFastBtn(value) {
			this.value = value;
		},
	},
	beforeMount() {
		this.value = this.val;
	},
};
</script>

<style lang="scss">
.custom-dot {
	width: 32px;
	height: 32px;
	border-radius: 32px;
	border: 4px solid $OrangeCF;
	background: $BackgroundWhite;
	transform: translate(-30%, -30%);
	transition: all 0.3s;
	cursor: grab;
}

.slider {
	&__minmax {
		margin-top: 8px;
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	&__min,
	&__max {
		font-size: 12px;
		color: #646b72;
	}

	&__counter {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 24px;

		&__minus,
		&__plus {
			width: 48px;
			height: 48px;
			border-radius: 48px;
			color: #53575a;
			border: none;
			background: #dfe3eb;
			font-size: 24px;
			font-weight: bold;
			outline: none;
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: pointer;

			&:hover {
				background: #dde5ee;
			}
		}

		&__value-wrapper {
			width: 100%;
			flex: 1;
		}

		&__value {
			font-family: "SF-Pro-Display", sans-serif;
			border: none;
			background: none;
			outline: none;
			text-align: center;
			font-weight: bold;
			font-size: 30px;
			color: #2f343a;
			flex: 1;
			width: 100%;
		}
	}

	&__fast-btns {
		margin-top: 24px;
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;

		&__btn {
			padding: 8px 12px;
			background: #dfe3eb;
			border-radius: 4px;
			letter-spacing: 0.02em;
			color: #646b72;
			font-weight: bold;
			font-size: 16px;
			margin: 4px;
			cursor: pointer;
		}
	}
}
</style>
