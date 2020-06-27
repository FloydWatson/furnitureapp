import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/home",
      name: "home",
      component: () => import("./views/home.vue"),
    },
    {
      // create route with id as a parameter
      path: "/furniture-detail/:id",
      name: "furniture-detail",
      component: () => import("./views/furniture.vue"),
    },
  ],
});

export default router;
