<template>
  <base-navbar />
  <div class="container p-4 text-center" v-if="countryCovData">
    <select v-model="selected">
      <option disabled selected :value="null">Select Country</option>
      <option v-for="country in countries" :value="country" :key="country">
        {{ country }}
      </option>
    </select>
    <div v-if="selected">
      <h1 class="content__country-name">{{ countryName }}</h1>
      <div class="row g-5 card__content-wrapper">
        <div class="col-lg-5 offset-lg-1">
          <div class="card__wrapper">
            <h3 class="card__number confirmed">{{ confirmed }}</h3>
            <h1 class="card__title">Confirmed</h1>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="card__wrapper">
            <h3 class="card__number deaths">{{ deaths }}</h3>
            <h1 class="card__title">Deaths</h1>
          </div>
        </div>
      </div>
      <p class="text-center content__last-update--title fw-bold">Last Updated</p>
      <p class="text-center content__last-update--number mb-5 pb-5">{{ lastUpdated || "Unknown" }}</p>
      <base-footer />
    </div>
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { watch } from "@vue/runtime-core";

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

    const countries = ref([]);
    const selected = ref(null);
    const countryName = ref("");
    const confirmed = ref(0);
    const deaths = ref(0);
    const lastUpdated = ref(null);

    const countryCovData = computed(() => store.state.countryCovidData);
    const getCountryCovidData = async (country) => store.dispatch("getCountryCovidData", country);

    watch(selected, (v) => {
      for (let country in countryCovData.value) {
        if (country === v) {
          const { confirmed: confCases, deaths: deathCases, updated } = countryCovData.value[country]["All"];
          countryName.value = country;
          confirmed.value = numberFormat(confCases);
          deaths.value = numberFormat(deathCases);
          lastUpdated.value = updated;
        }
      }
    });

    getCountryCovidData().then(() => {
      for (let country in countryCovData.value) {
        countries.value.push(country);
      }
    });

    return {
      countryCovData,
      countries,
      selected,
      countryName,
      confirmed,
      deaths,
      lastUpdated
    };
  }
};
</script>
