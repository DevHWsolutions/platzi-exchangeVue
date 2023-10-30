import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";

import Chart from "chart.js";
import VueChartkick from "vue-chartkick";
import { VueSpinners } from '@saeris/vue-spinners'

import router from "./Router/router";
import {dollarFilter, percentFilter} from '@/filters'

//componente de terceros
Vue.use(VueSpinners)
Vue.use(VueChartkick.use(Chart))
//filtros en la version 2
Vue.filter('dollar',dollarFilter)
Vue.filter('percent',percentFilter)
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
