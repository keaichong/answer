export default {
  initData({ commit }) {
      console.log('created中initdata')
    commit("INIT_DATA");
  },
  addItem({ commit, state }, param) {
    console.log('additem obj',param);
    commit("REMEBER_ITEM", param);
    if (state.itemNum < state.problems.length) {
      commit("ADD_ITEM", 1);
    }
  }
};
