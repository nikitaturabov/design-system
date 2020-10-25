import Vue from "vue";
import VueRouter from "vue-router";
import Platform from "@/pages/Platform.vue";
import Layout from "@/pages/Layout.vue";
import Validate from "@/pages/Validate.vue";
import Buttons from "@/pages/Buttons.vue";
import Tooltips from "@/pages/Tooltips.vue";
import Forms from "@/pages/Forms.vue";
import Logos from "@/pages/Logos.vue";
import Colors from "@/pages/Colors.vue";
import Modals from "@/pages/Modals.vue";
import Slider from "@/pages/Slider.vue";
import Auth from "@/components/Auth.vue";
import LastChange from "@/components/LastChange.vue";
import ComponentsSystem from "@/components/ComponentsSystem.vue";

Vue.use(VueRouter);

export default new VueRouter({
	mode: "history",
	base: "/",
	routes: [
		{
			path: "/",
			name: "design-system",
			component: Platform,
		},
		{
			path: "/auth",
			name: "auth",
			component: Auth,
		},
		{
			path: "/system",
			name: "system",
			component: ComponentsSystem,
			children: [
				{
					path: "/layout",
					name: "Layout",
					component: Layout,
				},
				{
					path: "/buttons",
					name: "Buttons",
					component: Buttons,
				},
				{
					path: "/forms",
					name: "Forms",
					component: Forms,
				},
				{
					path: "/tooltips",
					name: "Tooltips",
					component: Tooltips,
				},
				{
					path: "/logos",
					name: "Logos",
					component: Logos,
				},
				{
					path: "/colors",
					name: "Colors",
					component: Colors,
				},
				{
					path: "/validate",
					name: "Validate",
					component: Validate,
				},
				{
					path: "/modals",
					name: "Modals",
					component: Modals,
				},
				{
					path: "/slider",
					name: "Slider",
					component: Slider,
				},
				{
					path: "/lastchange",
					name: "lLast Changes",
					component: LastChange,
				},
			],
		},
	],
	beforeRouteUpdate(to, from, next) {
		console.log(to, from, next);
		next(console.log(to, from, next));
	},
});
