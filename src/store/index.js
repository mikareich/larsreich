import Vue from "vue";
import Vuex from "vuex";
import VueMeta from "vue-meta";

Vue.use(Vuex);
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
});

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {}
});
