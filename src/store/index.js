import Vuex from "vuex";
import Vue from "vue";
import mutations from "./mutations";
import actions from "./actions";
import state from "./state";
Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  actions,
  mutations
});
export default store;
