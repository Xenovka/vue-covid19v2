<template>
  <base-navbar />
  <div class="container p-4 d-flex justify-content-center" v-if="indonesiaCovData">
    <div class="row g-5 card__content-wrapper">
      <h1 class="content__title text-center">Indonesia Daily Covid Cases</h1>
      <div class="col-lg-5 offset-lg-1">
        <div class="card__wrapper">
          <h1 class="card__number confirmed">{{ confirmed }}</h1>
          <h3 class="card__title">Confirmed</h3>
        </div>
      </div>
      <div class="col-lg-5">
        <div class="card__wrapper">
          <h1 class="card__number deaths">{{ deaths }}</h1>
          <h3 class="card__title">Deaths</h3>
        </div>
      </div>
      <div class="col-lg-5 offset-lg-1">
        <div class="card__wrapper">
          <h1 class="card__number recovered">{{ recovered }}</h1>
          <h3 class="card__title">Recovered</h3>
        </div>
      </div>
      <div class="col-lg-5">
        <div class="card__wrapper">
          <h1 class="card__number active">{{ active }}</h1>
          <h3 class="card__title">Active Cases</h3>
        </div>
      </div>
    </div>
  </div>
  <p class="text-center content__last-update--title fw-bold">Last Updated</p>
  <p class="text-center content__last-update--number mb-5 pb-5">{{ lastUpdate || "Unknown" }}</p>
  <base-footer />
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { useStore } from "vuex";

import numberFormat from "../../composable/numberFormat";
import BaseFooter from "../../components/BaseFooter.vue";
import BaseNavbar from "../../components/BaseNavbar.vue";

export default {
  components: {
    BaseFooter,
    BaseNavbar
  },
  setup() {
    const store = useStore();

    const confirmed = ref(0);
    const recovered = ref(0);
    const deaths = ref(0);
    const active = ref(0);
    const lastUpdate = ref(null);

    const indonesiaCovData = computed(() => store.state.indonesiaCovidData);
    const getIndonesiaCovData = () => store.dispatch("getIndonesiaCovData");

    getIndonesiaCovData().then(() => {
      const dataObj = indonesiaCovData.value["penambahan"];
      confirmed.value = numberFormat(dataObj["positif"]);
      recovered.value = numberFormat(dataObj["sembuh"]);
      deaths.value = numberFormat(dataObj["meninggal"]);
      active.value = numberFormat(dataObj["dirawat"]);
      lastUpdate.value = dataObj["created"];
    });

    return {
      indonesiaCovData,
      confirmed,
      recovered,
      deaths,
      active,
      lastUpdate
    };
  }
};
</script>
