import Vue from "vue";
import App from "./App.vue";
import router from "@/router.js";
import store from "@/store.js";
import styles from "@/assets/scss/main.scss";

import "vue-code-highlight/themes/duotone-sea.css";
import "vue-code-highlight/themes/prism-dark.css";
import "vue-code-highlight/themes/window.css";
import vueHljs from "vue-hljs";

import "vue-hljs/dist/vue-hljs.min.css";
import "core-js/modules/es.promise";
import "core-js/modules/es.array.iterator";
import * as firebase from "firebase";

Vue.config.productionTip = false;

Vue.use(vueHljs);

let firebaseConfig = {
	apiKey: "AIzaSyBA1QrQknaAVpywlcVBIjiTjvIPpxtFW14",
	authDomain: "componentsystem-1b741.firebaseapp.com",
	databaseURL: "https://componentsystem-1b741.firebaseio.com",
	projectId: "componentsystem-1b741",
	storageBucket: "componentsystem-1b741.appspot.com",
	messagingSenderId: "920533600979",
	appId: "1:920533600979:web:2c477bfc3a855619a42226",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
	render: h => h(App),
	router,
	store,
	styles,
}).$mount("#app");
