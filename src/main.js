import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { store } from "./store";
import router from "./router";
import axios from "axios";

Vue.config.productionTip = false;
axios.defaults.baseURL = 'http://www.omdbapi.com/?apikey=9ae2fe6e&y=2020&type=movie&Content-Type=application/json'
// axios.defaults.baseURL = 'http://www.omdbapi.com/?apikey=9ae2fe6e&y=2020&page=1&type=movie&Content-Type=application/json'

new Vue({
  router,
  vuetify,
  store,
  axios,
  render: (h) => h(App),
}).$mount("#app");
