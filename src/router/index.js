import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";

import IndonesiaData from "../views/features/IndonesiaData.vue";
import DailyIndonesiaData from "../views/features/DailyIndonesiaData.vue";
import DataByProvince from "../views/features/DataByProvince.vue";
import GlobalData from "../views/features/GlobalData.vue";
import CountryData from "../views/features/CountryData.vue";

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
    path: "/province",
    component: DataByProvince
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
    path: "/country",
    component: CountryData
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
