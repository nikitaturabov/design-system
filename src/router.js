import Vue from "vue";
import VueRouter from "vue-router";
import Platform from "@/pages/Platform.vue";
import Layout from "@/pages/Layout.vue";
import Buttons from "@/pages/Buttons.vue";
import Tooltips from "@/pages/Tooltips.vue";
import Forms from "@/pages/Forms.vue";
import Logos from "@/pages/Logos.vue";
import Colors from "@/pages/Colors.vue";
import Auth from "@/components/Auth.vue";
import LastChange from "@/components/LastChange.vue";
import ComponentsSystem from "@/components/ComponentsSystem.vue";

Vue.use(VueRouter);

export default new VueRouter({
	mode: "history",
	base: "/system",
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
					path: "layout",
					name: "layout",
					component: Layout,
				},
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
				{
					path: "colors",
					name: "colors",
					component: Colors,
				},
				{
					path: "lastchange",
					name: "lastchange",
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
