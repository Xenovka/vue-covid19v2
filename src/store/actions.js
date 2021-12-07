import getCovidData from "../composable/getCovidData";

export default {
  async getGlobalData({ commit }) {
    const result = await getCovidData("https://covid-api.mmediagroup.fr/v1/cases?country=Global");
    commit("updateGlobalData", result);
  },
  async getGlobalVaccination({ commit }) {
    const result = await getCovidData("https://covid-api.mmediagroup.fr/v1/vaccines?country=Global");
    commit("updateGlobalVaccinationData", result);
  },
  async getIndonesiaCovData({ commit }) {
    const result = await getCovidData("https://apicovid19indonesia-v2.vercel.app/api/indonesia/more");
    commit("updateIndonesiaCovidData", result);
  },
  async getIndonesiaVaccination({ commit }) {
    const result = await getCovidData("https://covid-api.mmediagroup.fr/v1/vaccines?country=Indonesia");
    commit("updateIndonesiaVaccinationData", result);
  },
  async getProvincesCovidData({ commit }, province = "") {
    const result = await getCovidData("https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi");
    commit("updateProvincesCovidData", result);

    if (!province) return;

    console.log(province);

    for (let i = 0; i < result.length; i++) {
      if (result[i]["provinsi"] === province) {
        commit("updateProvincesSingleData", result[i]);
        return;
      }
    }
  }
};
