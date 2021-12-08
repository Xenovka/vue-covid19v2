<template>
  <base-navbar />
  <div class="container p-4 text-center" v-if="provincesCovData">
    <select v-model="selected">
      <option disabled selected :value="null">Select Province</option>
      <option v-for="province in provinces" :value="province" :key="province">
        {{ province }}
      </option>
    </select>
    <div v-if="selected">
      <h1 class="content__province-name">{{ provinceName }}</h1>
      <div class="row g-5 card__content-wrapper">
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
        <base-footer />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref, watch } from "vue";
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
        confirmed.value = numberFormat(kasus);
        recovered.value = numberFormat(sembuh);
        deaths.value = numberFormat(meninggal);
        active.value = numberFormat(dirawat);
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
@media only screen and (max-width: 992px) {
  .card__content-wrapper {
    margin: 0 auto;
  }
}
</style>
