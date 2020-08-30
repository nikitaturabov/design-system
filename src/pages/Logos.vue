<template>
	<div>
		<h1 class="ds-current-page__title ds-title ds-title--1">
			LOGO
			<strong>TYPE</strong>
		</h1>

		<span class="ds-current-page__text ds-current-page__text--gray">Компоненты логотипов Центрофинанс</span>

		<div class="ds-component">
			<h3 class="ds-component__name">Long logo</h3>

			<div class="ds-component__tabs">
				<button
					v-for="component in components"
					:key="component"
					:class="['ds-component__tab', { 'ds-component__tab--active': currentTabFirst === component }]"
					@click="setCurrentTabFirst(component)"
				>
					{{ component }}
				</button>
			</div>

			<div class="ds-component__view">
				<keep-alive>
					<component :is="currentTabComponentFirst" size="long"></component>
				</keep-alive>
			</div>
			<div v-highlight>
				<pre class="ds-component__wrapper-code">
					<code
	v-show="currentTabComponentFirst === 'LogoOriginal'"
	class="html"
	v-html="codeOriginal('long')"
>
					</code>
					<code
	v-show="currentTabComponentFirst === 'LogoBlack'"
	class="html"
	v-html="codeBlack('long')"
>
					</code>
					<code
	v-show="currentTabComponentFirst === 'LogoWhite'"
	class="html"
	v-html="codeWhite('long')"
>
					</code>
				</pre>
			</div>
		</div>

		<div class="ds-component">
			<h3 class="ds-component__name">Short logo</h3>

			<div class="ds-component__tabs">
				<button
					v-for="component in components"
					:key="component"
					:class="['ds-component__tab', { 'ds-component__tab--active': currentTabSecond === component }]"
					@click="setCurrentTabSecond(component)"
				>
					{{ component }}
				</button>
			</div>

			<div class="ds-component__view">
				<keep-alive>
					<component :is="currentTabComponentSecond" size="short"></component>
				</keep-alive>
			</div>

			<div v-highlight>
				<pre class="ds-component__wrapper-code">
					<code
	v-show="currentTabComponentSecond === 'LogoOriginal'"
	class="html"
	v-html="codeOriginal('short')"
>
					</code>
					<code
	v-show="currentTabComponentSecond === 'LogoBlack'"
	class="html"
	v-html="codeBlack('short')"
>
					</code>
					<code
	v-show="currentTabComponentSecond === 'LogoWhite'"
	class="html"
	v-html="codeWhite('short')"
>
					</code>
				</pre>
			</div>
		</div>

		<div class="ds-component">
			<h3 class="ds-component__name">Small logo</h3>

			<div class="ds-component__tabs">
				<button
					v-for="component in components"
					:key="component"
					:class="['ds-component__tab', { 'ds-component__tab--active': currentTabThird === component }]"
					@click="setCurrentTabThird(component)"
				>
					{{ component }}
				</button>
			</div>

			<div class="ds-component__view">
				<keep-alive>
					<component :is="currentTabComponentThird" size="small"></component>
				</keep-alive>
			</div>
			<div v-highlight>
				<pre class="ds-component__wrapper-code">
					<code
	v-show="currentTabComponentThird === 'LogoOriginal'"
	class="html"
	v-html="codeOriginal('small')"
>
					</code>
					<code
	v-show="currentTabComponentThird === 'LogoBlack'"
	class="html"
	v-html="codeBlack('small')"
>
					</code>
					<code
	v-show="currentTabComponentThird === 'LogoWhite'"
	class="html"
	v-html="codeWhite('small')"
>
					</code>
				</pre>
			</div>
		</div>
	</div>
</template>

<script>
import LogoOriginal from "@/components/logo/LogoOriginal";
import LogoBlack from "@/components/logo/LogoBlack";
import LogoWhite from "@/components/logo/LogoWhite";

export default {
	name: "LOGOS",
	data() {
		return {
			currentTabFirst: "Original",
			currentTabSecond: "Original",
			currentTabThird: "Original",
			components: ["Original", "Black", "White"],
		};
	},
	components: {
		LogoOriginal,
		LogoBlack,
		LogoWhite,
	},
	methods: {
		setCurrentTabFirst(component) {
			this.currentTabFirst = component;
		},
		setCurrentTabSecond(component) {
			this.currentTabSecond = component;
		},
		setCurrentTabThird(component) {
			this.currentTabThird = component;
		},
		codeOriginal(size) {
			return `&lt;logo-original size="${size}"&gt;&lt;/logo-original&gt;`;
		},
		codeBlack(size) {
			return `&lt;logo-black size="${size}"&gt;&lt;/logo-black&gt;`;
		},
		codeWhite(size) {
			return `&lt;logo-white size="${size}"&gt;&lt;/logo-white&gt;`;
		},
	},
	computed: {
		currentTabComponentFirst() {
			return `Logo${this.currentTabFirst}`;
		},
		currentTabComponentSecond() {
			return `Logo${this.currentTabSecond}`;
		},
		currentTabComponentThird() {
			return `Logo${this.currentTabThird}`;
		},
	},
	mounted() {},
};
</script>
