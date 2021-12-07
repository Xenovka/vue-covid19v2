<template>
  <div class="container p-4 text-center" v-if="provincesCovData">
    <select v-model="selected">
      <option disabled selected :value="null">Select Country</option>
      <option v-for="province in provinces" :value="province" :key="province">
        {{ province }}
      </option>
    </select>
    <div v-if="selected">
      <h1 class="content__province-name">{{ provinceName }}</h1>
      <div class="row card__wrapper">
        <div class="col-lg-6 card__wrapper--confirmed">
          <h3 class="card__title">Confirmed</h3>
          <h1 class="card__number">{{ confirmed }}</h1>
        </div>
        <div class="col-lg-6 card__wrapper--deaths">
          <h3 class="card__title">Deaths</h3>
          <h1 class="card__number">{{ deaths }}</h1>
        </div>
        <div class="col-lg-6 card__wrapper--recovered">
          <h3 class="card__title">Recovered</h3>
          <h1 class="card__number">{{ recovered }}</h1>
        </div>
        <div class="col-lg-6 card__wrapper--active">
          <h3 class="card__title">Active Cases</h3>
          <h1 class="card__number">{{ active }}</h1>
        </div>
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

<style scoped></style>
