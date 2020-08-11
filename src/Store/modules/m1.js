export default {
  state: {
    count: 87,
  },
  getters: {
    getCount: (state) => {
      return state.count;
    },
  },
  mutations: {
    addCount: (state, arg) => {
      state.count += arg;
    },
  },
  actions: {
    asyncAddCount({ commit }, arg) {
      setTimeout(() => {
        commit("addCount", arg);
      }, 1000);
    },
  },
};
