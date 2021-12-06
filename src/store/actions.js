export default {
  async getGlobalData({ commit }) {
    const fetchData = await fetch("https://covid-api.mmediagroup.fr/v1/cases?country=Global");
    const result = await fetchData.json();
    commit("updateGlobalData", result);
  },
  async getGlobalVaccination({ commit }) {
    const fetchData = await fetch("https://covid-api.mmediagroup.fr/v1/vaccines?country=Global");
    const result = await fetchData.json();
    commit("updateGlobalVaccinationData", result);
  }
};
