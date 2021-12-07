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
      <div class="row card__wrapper">
        <div class="col-lg-6 card__wrapper--confirmed">
          <h1>Confirmed</h1>
          <h3>{{ confirmed }}</h3>
        </div>
        <div class="col-lg-6 card__wrapper--deaths">
          <h1>Deaths</h1>
          <h3>{{ deaths }}</h3>
        </div>
      </div>
    </div>
    <p>{{ lastUpdated }}</p>
    <router-link class="btn btn-primary" to="/">Back</router-link>
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
<style scoped>
.card__wrapper--confirmed,
.card__wrapper--deaths {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
