import Vue from "vue";
import App from "./App.vue";
import router from "@/router.js";
import styles from "@/assets/less/main.less";
import "vue-code-highlight/themes/duotone-sea.css";
import "vue-code-highlight/themes/prism-dark.css";
import "vue-code-highlight/themes/window.css";
import vueHljs from "vue-hljs";
import "vue-hljs/dist/vue-hljs.min.css";
import "core-js/modules/es.promise";
import "core-js/modules/es.array.iterator";

Vue.config.productionTip = false;
Vue.use(vueHljs);

new Vue({
	render: (h) => h(App),
	router,
	styles,
}).$mount("#app");
