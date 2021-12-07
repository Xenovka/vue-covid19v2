import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";

import IndonesiaData from "../views/features/IndonesiaData.vue";
import DailyIndonesiaData from "../views/features/DailyIndonesiaData.vue";
import GlobalData from "../views/features/GlobalData.vue";

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
    path: "/daily",
    component: DailyIndonesiaData
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
