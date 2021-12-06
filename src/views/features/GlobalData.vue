<template>
  <div class="container p-4 d-flex justify-content-center" v-if="globalCovidData">
    <div class="row card__wrapper">
      <div class="col-lg-6 card__wrapper--confirmed">
        <h1>Confirmed</h1>
        <h3>{{ confirmed }}</h3>
      </div>
      <div class="col-lg-6 card__wrapper--deaths">
        <h1>Deaths</h1>
        <h3>{{ deaths }}</h3>
      </div>
      <h1 class="card__vaccine--title text-center">Vaccination</h1>
      <div class="col-lg-6 card__wrapper--vaccines">
        <h1>First Dose</h1>
        <h3>{{ vaccineFDose }}</h3>
      </div>
      <div class="col-lg-6 card__wrapper--vaccines">
        <h1>Second Dose</h1>
        <h3>{{ vaccineSDose }}</h3>
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

<style>
.card__wrapper--confirmed,
.card__wrapper--deaths,
.card__wrapper--vaccines {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
