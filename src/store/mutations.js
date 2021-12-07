export default {
  updateGlobalData(state, data) {
    state.globalCovidData = data;
  },
  updateGlobalVaccinationData(state, data) {
    state.globalVaccinationData = data;
  },
  updateIndonesiaCovidData(state, data) {
    state.indonesiaCovidData = data;
  },
  updateIndonesiaVaccinationData(state, data) {
    state.indonesiaVaccinationData = data;
  },
  updateProvincesCovidData(state, data) {
    state.provincesCovidData = data;
  },
  updateProvincesSingleData(state, data) {
    state.provincesSingleData = data;
  }
};
