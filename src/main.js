import Vue from "vue";
import App from "./App.vue";
import router from "@/router.js";
import styles from '@/assets/less/main.less'

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  styles
}).$mount("#app");
