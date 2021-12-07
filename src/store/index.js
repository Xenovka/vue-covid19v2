import { createStore } from "vuex";

import mutations from "./mutations";
import actions from "./actions";

export default createStore({
  state: {
    globalCovidData: null,
    globalVaccinationData: null,
    indonesiaCovidData: null,
    indonesiaVaccinationData: null,
    provincesCovidData: null,
    provincesSingleData: null
  },
  mutations,
  actions,
  modules: {}
});
