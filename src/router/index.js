import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";

import GlobalData from "../views/features/GlobalData.vue";
import IndonesiaData from "../views/features/IndonesiaData.vue";

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/home",
    redirect: "/"
  },
  {
    path: "/indonesia",
    component: IndonesiaData
  },
  {
    path: "/global-data",
    component: GlobalData
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
