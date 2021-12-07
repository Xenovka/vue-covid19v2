<template>
  <div class="container p-4 d-flex justify-content-center" v-if="indonesiaCovData">
    <div class="row card__wrapper">
      <div class="col-lg-6 card__wrapper--confirmed">
        <h1>Confirmed</h1>
        <h3>{{ confirmed }}</h3>
      </div>
      <div class="col-lg-6 card__wrapper--deaths">
        <h1>Deaths</h1>
        <h3>{{ deaths }}</h3>
      </div>
      <div class="col-lg-6 card__wrapper--recovered">
        <h1>Recovered</h1>
        <h3>{{ recovered }}</h3>
      </div>
      <div class="col-lg-6 card__wrapper--active">
        <h1>Active Cases</h1>
        <h3>{{ active }}</h3>
      </div>
      <h1 class="card__vaccine--title text-center">Vaccination</h1>
      <div class="col-lg-6 card__wrapper--vaccines">
        <h1>First Dose</h1>
        <h3>{{ fDoseVaccination }}</h3>
      </div>
      <div class="col-lg-6 card__wrapper--vaccines">
        <h1>Second Dose</h1>
        <h3>{{ sDoseVaccination }}</h3>
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

<style scoped></style>
