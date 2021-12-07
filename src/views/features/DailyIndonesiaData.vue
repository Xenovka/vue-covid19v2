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
      <div class="col-lg-6 card__wrapper--confirmed">
        <h1>Recovered</h1>
        <h3>{{ recovered }}</h3>
      </div>
      <div class="col-lg-6 card__wrapper--deaths">
        <h1>Active Cases</h1>
        <h3>{{ active }}</h3>
      </div>
    </div>
  </div>
  <p class="text-center content__last-update">{{ lastUpdate }}</p>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { useStore } from "vuex";
export default {
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
      confirmed.value = dataObj["positif"];
      recovered.value = dataObj["sembuh"];
      deaths.value = dataObj["meninggal"];
      active.value = dataObj["dirawat"];
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

<style scoped>
.card__wrapper--confirmed,
.card__wrapper--deaths,
.card__wrapper--vaccines {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
