<template>
  <div class="container p-4 text-center" v-if="provincesCovData">
    <select v-model="selected">
      <option v-for="province in provinces" :value="province" :key="province">
        {{ province }}
      </option>
    </select>
    <h1 class="content__province-name">{{ provinceName }}</h1>
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
</template>

<script>
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    const provinces = ref([]);
    const selected = ref(null);
    const provinceName = ref("");
    const confirmed = ref(0);
    const recovered = ref(0);
    const deaths = ref(0);
    const active = ref(0);

    const provincesCovData = computed(() => store.state.provincesCovidData);
    const provincesSingleData = computed(() => store.state.provincesSingleData);
    const getProvincesCovidData = async (province) => store.dispatch("getProvincesCovidData", province);

    watch(selected, (v) => {
      getProvincesCovidData(v).then(() => {
        const { provinsi, kasus, dirawat, sembuh, meninggal } = provincesSingleData.value;
        provinceName.value = provinsi;
        confirmed.value = kasus;
        recovered.value = sembuh;
        deaths.value = meninggal;
        active.value = dirawat;
      });
    });

    getProvincesCovidData("").then(() => {
      for (let data of provincesCovData.value) {
        provinces.value.push(data["provinsi"]);
      }
    });

    return {
      provincesCovData,
      provincesSingleData,
      provinces,
      selected,
      provinceName,
      confirmed,
      recovered,
      deaths,
      active
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
