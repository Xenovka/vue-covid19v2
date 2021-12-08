<template>
  <base-navbar />
  <div class="container p-4 d-flex justify-content-center" v-if="indonesiaCovData">
    <div class="row g-5 card__content-wrapper">
      <h1 class="content__title text-center">Indonesia Covid Cases</h1>
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
      <h1 class="card__vaccine--title text-center">Vaccination Data</h1>
      <div class="col-lg-5 offset-lg-1">
        <div class="card__wrapper">
          <h1 class="card__number vaccines">{{ fDoseVaccination }}</h1>
          <h3 class="card__title">First Dose</h3>
        </div>
      </div>
      <div class="col-lg-5">
        <div class="card__wrapper">
          <h1 class="card__number vaccines">{{ sDoseVaccination }}</h1>
          <h3 class="card__title">Second Dose</h3>
        </div>
      </div>
      <base-footer />
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
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
    const fDoseVaccination = ref(0);
    const sDoseVaccination = ref(0);

    const indonesiaCovData = computed(() => store.state.indonesiaCovidData);
    const indonesiaVaccinationData = computed(() => store.state.indonesiaVaccinationData);
    const getIndonesiaCovidData = async () => store.dispatch("getIndonesiaCovData");
    const getIndonesiaVaccinationData = async () => store.dispatch("getIndonesiaVaccination");

    getIndonesiaCovidData().then(() => {
      const dataObj = indonesiaCovData.value["total"];
      confirmed.value = numberFormat(dataObj["positif"]);
      recovered.value = numberFormat(dataObj["sembuh"]);
      deaths.value = numberFormat(dataObj["meninggal"]);
      active.value = numberFormat(dataObj["dirawat"]);
    });

    getIndonesiaVaccinationData().then(() => {
      const dataObj = indonesiaVaccinationData.value["All"];
      fDoseVaccination.value = numberFormat(dataObj["people_partially_vaccinated"]);
      sDoseVaccination.value = numberFormat(dataObj["people_vaccinated"]);
    });

    return {
      indonesiaCovData,
      confirmed,
      recovered,
      deaths,
      active,
      fDoseVaccination,
      sDoseVaccination
    };
  }
};
</script>
