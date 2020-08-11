export default {
  state: {
    num: 97,
  },
  getters: {
    getNum: (state) => {
      return state.num;
    },
  },
  mutations: {
    addNum: (state, arg) => {
      state.num += arg;
    },
  },
  actions: {
    asyncAddNum({ commit }, arg) {
      setTimeout(() => {
        commit("addNum", arg);
      }, 1000);
    },
  },
};
