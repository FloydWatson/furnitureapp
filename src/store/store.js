import Vue from "vue";
import Vuex from "vuex";

import furniture from "./modules/furniture";

Vue.use(Vuex);

const store = new Vuex.Store({
  // import your furniture module
  modules: {
    furniture,
  },
});

export default store;
