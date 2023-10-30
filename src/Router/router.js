import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/Home.vue";
import About from "@/views/About.vue"
import CoinDetail from "@/views/CoinDetail.vue"
import Error from "@/views/Error.vue";


Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/coin/:id',
      name: 'CoinDetail',
      component: CoinDetail
    },
    {
      path: '*',
      name: 'Error',
      component: Error
    }
  ],
});
