import Vue from "vue";
import Vuex from "vuex";
import newsPosts from "./newsPosts";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    newsPosts,
  },
});
