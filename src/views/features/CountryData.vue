<template>
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
        <div class="col-lg-6">
          <div class="card__wrapper">
            <h3 class="card__number confirmed">{{ confirmed }}</h3>
            <h1 class="card__title">Confirmed</h1>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="card__wrapper">
            <h3 class="card__number deaths">{{ deaths }}</h3>
            <h1 class="card__title">Deaths</h1>
          </div>
        </div>
      </div>
      <p class="text-center content__last-update--title fw-bold">Last Updated</p>
      <p class="text-center content__last-update--number">{{ lastUpdated || "Unknown" }}</p>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { watch } from "@vue/runtime-core";
export default {
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
          confirmed.value = confCases;
          deaths.value = deathCases;
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
