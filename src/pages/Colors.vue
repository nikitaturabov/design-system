<template>
	<div>
		<h1 class="ds-current-page__title ds-title ds-title--1">COLORS</h1>

		<span class="ds-current-page__text ds-current-page__text--gray"
			>Доступная цветовая палитра которую следует использовать на сайте</span
		>

		<div class="ds-columns ds-columns--x2">
			<div class="ds-columns__item ds-columns__colors">
				<h3 class="ds-title ds-title--3">Basic Colors</h3>
				<div class="ds-color" v-for="(color, index) in colorsBasic" :key="index">
					<div class="ds-color__box" :style="{ background: color.hex }" @click="copieColorFirst(index)"></div>
					<div class="ds-color__info-wrapper">
						<div class="ds-color__name">{{ color.name }}</div>
						<input ref="hexFirst" class="ds-color__hex" :value="color.hex" />
					</div>
				</div>
			</div>
			<div class="ds-columns__item ds-columns__colors">
				<h3 class="ds-title ds-title--3">Text Colors</h3>
				<div class="ds-color" v-for="(color, index) in colorsText" :key="index">
					<div class="ds-color__box" :style="{ background: color.hex }" @click="copieColorSecond(index)"></div>
					<div class="ds-color__info-wrapper">
						<div class="ds-color__name">{{ color.name }}</div>
						<input ref="hexSecond" class="ds-color__hex" :value="color.hex" />
					</div>
				</div>
			</div>
			<div class="ds-columns__item ds-columns__colors">
				<h3 class="ds-title ds-title--3">Back</h3>
				<div class="ds-color" v-for="(color, index) in colorsBack" :key="index">
					<div class="ds-color__box" :style="{ background: color.hex }" @click="copieColorSecond(index)"></div>
					<div class="ds-color__info-wrapper">
						<div class="ds-color__name">{{ color.name }}</div>
						<input ref="hexSecond" class="ds-color__hex" :value="color.hex" />
					</div>
				</div>
			</div>
			<div class="ds-columns__item ds-columns__colors">
				<h3 class="ds-title ds-title--3">Dark Mode</h3>
				<div class="ds-color" v-for="(color, index) in darkMode" :key="index">
					<div class="ds-color__box" :style="{ background: color.hex }" @click="copieColorSecond(index)"></div>
					<div class="ds-color__info-wrapper">
						<div class="ds-color__name">{{ color.name }}</div>
						<input ref="hexSecond" class="ds-color__hex" :value="color.hex" />
					</div>
				</div>
			</div>
		</div>

		<div v-highlight>
			<pre class="ds-component__wrapper-code">
					<code class="less">
						<div
	v-for="(color, index ) in colorsBasic"
	:key="`${index}-${color.name}`"
>@{{color.name}}: {{color.hex}};</div>
						<div
	v-for="(color, index ) in colorsText"
	:key="`${index}-${color.name}`"
>@{{color.name}}: {{color.hex}};</div>
            <div
                v-for="(color, index ) in colorsBack"
                :key="`${index}-${color.name}`"
            >@{{color.name}}: {{color.hex}};</div>
            <div
                v-for="(color, index ) in darkMode"
                :key="`${index}-${color.name}`"
            >@{{color.name}}: {{color.hex}};</div>

					</code>
				</pre>
		</div>
	</div>
</template>

<script>
export default {
	name: "LOGOS",
	data() {
		return {
			colorsBasic: [
				{
					name: "GrayCf",
					hex: "#CFD2D4",
				},
				{
					name: "MountedBlackCF",
					hex: "#53575A",
				},
				{
					name: "BlackCf",
					hex: "#000000",
				},
				{
					name: "RedCF",
					hex: "#E1251B",
				},
				{
					name: "OrangeCF",
					hex: "#FF461B",
				},
				{
					name: "YellowCF",
					hex: "#F5A800",
				},
				{
					name: "YellowWhiteCF",
					hex: "#FED16D",
				},
			],
			colorsText: [
				{
					name: "TextPrimary",
					hex: "#2F343A",
				},
				{
					name: "TextSecondary",
					hex: "#8B949D",
				},
				{
					name: "TextParagraph",
					hex: "#646B72",
				},
				{
					name: "TextTetriary",
					hex: "#C4C4C4",
				},
				{
					name: "TextWhite",
					hex: "#FFFFFF",
				},
				{
					name: "LinkToPage",
					hex: "#FC5050",
				},
				{
					name: "LinkToPage2",
					hex: "#305DFF",
				},
				{
					name: "GreenDone",
					hex: "#66CE71",
				},
			],
			colorsBack: [
				{
					name: "BackgroundWhite",
					hex: "#EFF3F9",
				},
				{
					name: "BorderLands",
					hex: "#BDC6CF",
				},
				{
					name: "BodySite",
					hex: "#F1F4F8",
				},
			],
			darkMode: [
				{
					name: "BodyDark",
					hex: "#242935",
				},
				{
					name: "DarkModeBg",
					hex: "#2A3246",
				},
				{
					name: "DarkPlate",
					hex: "#363D52",
				},
				{
					name: "DarkModeSecondary",
					hex: "#59627B",
				},
			],
		};
	},
	components: {},
	methods: {
		copieColorFirst(index) {
			this.$refs.hexFirst[index].select();
			document.execCommand("copy");
		},
		copieColorSecond(index) {
			this.$refs.hexSecond[index].select();
			document.execCommand("copy");
		},
	},
	computed: {},
	mounted() {},
};
</script>

<style lang="scss">
.ds-columns {
	margin-top: 60px;
	&__colors + &__colors {
		margin-left: 200px;
	}
}
.ds-color {
	display: flex;
	align-items: center;
	margin-top: 38px;
	&__box {
		width: 40px;
		height: 40px;
		border-radius: 3px;
		margin-right: 24px;
		position: relative;

		display: flex;
		justify-content: center;
		align-items: center;

		&:hover {
			&:after {
				content: "copy";

				font-weight: 600;
				font-size: 10px;
				color: #030303;
				display: block;

				z-index: 22;
			}
		}
	}
	&__name,
	&__hex {
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		border: none;
		background: none;
		outline: none;
	}

	&__hex {
		&::selection {
			background: none;
		}
	}
}
</style>
