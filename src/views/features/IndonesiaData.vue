<template>
  <div class="container p-4 d-flex justify-content-center" v-if="indonesiaCovData">
    <div class="row g-5 card__content-wrapper">
      <h1 class="content__title text-center">Indonesia Covid Cases</h1>
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
      <div class="col-lg-6">
        <div class="card__wrapper">
          <h1 class="card__number recovered">{{ recovered }}</h1>
          <h3 class="card__title">Recovered</h3>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card__wrapper">
          <h1 class="card__number active">{{ active }}</h1>
          <h3 class="card__title">Active Cases</h3>
        </div>
      </div>
      <h1 class="card__vaccine--title text-center">Vaccination</h1>
      <div class="col-lg-6">
        <div class="card__wrapper">
          <h1 class="card__number vaccines">{{ fDoseVaccination }}</h1>
          <h3 class="card__title">First Dose</h3>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card__wrapper">
          <h1 class="card__number vaccines">{{ sDoseVaccination }}</h1>
          <h3 class="card__title">Second Dose</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
export default {
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
      confirmed.value = dataObj["positif"];
      recovered.value = dataObj["sembuh"];
      deaths.value = dataObj["meninggal"];
      active.value = dataObj["dirawat"];
    });

    getIndonesiaVaccinationData().then(() => {
      const dataObj = indonesiaVaccinationData.value["All"];
      fDoseVaccination.value = dataObj["people_partially_vaccinated"];
      sDoseVaccination.value = dataObj["people_vaccinated"];
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
