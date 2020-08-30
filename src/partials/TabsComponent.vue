<template>
	<div class="ds-component">
		<h3 class="ds-component__name">{{ name }}</h3>

		<div class="ds-component__tabs">
			<button
				v-for="component in components"
				:key="component"
				:class="['ds-component__tab', { 'ds-component__tab--active': currentTabName === component }]"
				:size="currentSize"
				@click="setCurrentTab(component)"
			>
				{{ component }}
			</button>
		</div>

		<div class="ds-component__view">
			<keep-alive>
				<component :is="currentTabComponent" :size="currentSize"></component>
			</keep-alive>
		</div>
		<div v-highlight>
			<pre>
<code class="html">
    &lt;logo-original size="short"&gt;&lt;/logo-original&gt;
    
</code>
		</pre>
		</div>
	</div>
</template>

<script>
export default {
	name: "tabs-component",
	data() {
		return {
			currentTab: null,
			currentTabName: null,
			currentSize: null,
		};
	},
	props: {
		name: {
			type: String,
		},
		components: {
			type: Array,
		},
		folder: {
			type: String,
		},
		size: {
			type: String,
		},
	},
	methods: {
		setCurrentTab(component) {
			this.currentTab = () => import(`@/components/${this.folder}${component}`);
			this.currentTabName = component;
		},
	},
	computed: {
		loader() {
			if (!this.components) {
				return null;
			}
			return () => import(`@/components/${this.folder}${this.components[0]}`);
		},
		currentTabComponent() {
			return this.currentTab;
		},
	},
	mounted() {
		this.loader()
			.then(() => {
				this.currentTabName = this.components[0];
				this.currentSize = this.size;
				this.currentTab = () => this.loader();
			})
			.catch(() => {});
	},
};
</script>
