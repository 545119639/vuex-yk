import Vue from "vue";
import Vuex from "./myVuex";
import m1 from "./modules/m1";
import m2 from "./modules/m2";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    m1,
    m2,
  },
});
