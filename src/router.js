import * as vueRouter from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Error from "./views/Error.vue";
import CoinDetail from "./views/CoinDetail.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/coin/:id", name: "coin-detail", component: CoinDetail },
  { path: "/about", name: "about", component: About },
  { path: "/:catchAll(.*)", name: "error", component: Error },
];

const router = vueRouter.createRouter({
  history: vueRouter.createWebHistory(),
  routes,
});

export default router;
