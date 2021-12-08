<template>
  <base-navbar />
  <div class="container p-4 d-flex justify-content-center" v-if="globalCovidData">
    <div class="row g-5 card__content-wrapper">
      <h1 class="content__title text-center">Global Covid Cases</h1>
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
      <h1 class="card__vaccine--title text-center">Global Vaccination Data</h1>
      <div class="col-lg-5 offset-lg-1">
        <div class="card__wrapper">
          <h1 class="card__number vaccines">{{ vaccineFDose }}</h1>
          <h3 class="card__title">First Dose</h3>
        </div>
      </div>
      <div class="col-lg-5">
        <div class="card__wrapper">
          <h1 class="card__number vaccines">{{ vaccineSDose }}</h1>
          <h3 class="card__title">Second Dose</h3>
        </div>
      </div>
      <base-footer />
    </div>
  </div>
</template>

<script>
import { computed, ref } from "@vue/runtime-core";
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
    const deaths = ref(0);
    const vaccineFDose = ref(0);
    const vaccineSDose = ref(0);

    const globalCovidData = computed(() => store.state.globalCovidData);
    const globalVaccinationData = computed(() => store.state.globalVaccinationData);
    const getGlobalData = async () => store.dispatch("getGlobalData");
    const getGlobalVaccination = async () => store.dispatch("getGlobalVaccination");

    getGlobalData().then(() => {
      const dataObj = globalCovidData.value["All"];
      confirmed.value = numberFormat(dataObj.confirmed);
      deaths.value = numberFormat(dataObj.deaths);
    });

    getGlobalVaccination().then(() => {
      const dataObj = globalVaccinationData.value["All"];
      vaccineSDose.value = numberFormat(dataObj["people_partially_vaccinated"]);
      vaccineFDose.value = numberFormat(dataObj["people_vaccinated"]);
    });

    return {
      globalCovidData,
      confirmed,
      deaths,
      vaccineFDose,
      vaccineSDose
    };
  }
};
</script>
