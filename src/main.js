/* eslint-disable */

import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import router from "./router.js";

Vue.config.productionTip = false;
// cette ligne est importante pour les sessions (en mode développement)
axios.defaults.withCredentials = true;
Vue.use(axios);

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount("#app");
