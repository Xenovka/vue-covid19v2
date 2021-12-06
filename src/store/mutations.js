export default {
  updateGlobalData(state, data) {
    state.globalCovidData = data;
  },
  updateGlobalVaccinationData(state, data) {
    state.globalVaccinationData = data;
  }
};
