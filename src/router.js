import Vue from "vue";
import VueRouter from "vue-router";
import Platform from "@/components/Platform.vue";
import Buttons from "@/components/Buttons.vue";
import Tooltips from "@/components/Tooltips.vue";
import Forms from "@/components/Forms.vue";
import Logos from "@/components/Logos.vue";
import ComponentsSystem from "@/components/ComponentsSystem.vue";

Vue.use(VueRouter);

export default new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{
			path: "/",
			name: "design-system",
			component: Platform,
		},
		{
			path: "/system",
			name: "system",
			component: ComponentsSystem,
			children: [
				{
					path: "buttons",
					name: "buttons",
					component: Buttons,
				},
				{
					path: "forms",
					name: "forms",
					component: Forms,
				},
				{
					path: "tooltips",
					name: "tooltips",
					component: Tooltips,
				},
				{
					path: "logos",
					name: "logos",
					component: Logos,
				},
			],
		},
	],
});
