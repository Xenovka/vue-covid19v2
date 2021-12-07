<template>
  <div class="container p-4 d-flex justify-content-center" v-if="globalCovidData">
    <div class="row g-5 card__content-wrapper">
      <h1 class="content__title text-center">Global Covid Cases</h1>
      <div class="col-lg-6">
        <div class="card__wrapper">
          <h1 class="card__number confirmed">{{ confirmed }}</h1>
          <h3 class="card__title">Confirmed</h3>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card__wrapper">
          <h1 class="card__number deaths">{{ deaths }}</h1>
          <h3 class="card__title">Deaths</h3>
        </div>
      </div>
      <h1 class="card__vaccine--title text-center">Vaccination</h1>
      <div class="col-lg-6">
        <div class="card__wrapper">
          <h1 class="card__number vaccines">{{ vaccineFDose }}</h1>
          <h3 class="card__title">First Dose</h3>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card__wrapper">
          <h1 class="card__number vaccines">{{ vaccineSDose }}</h1>
          <h3 class="card__title">Second Dose</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
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
      confirmed.value = globalCovidData.value["All"].confirmed;
      deaths.value = globalCovidData.value["All"].deaths;
    });

    getGlobalVaccination().then(() => {
      vaccineSDose.value = globalVaccinationData.value["All"]["people_partially_vaccinated"];
      vaccineFDose.value = globalVaccinationData.value["All"]["people_vaccinated"];
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
