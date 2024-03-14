export default {
  namespaced: true,
  state: {
    counts: {
        b1: 0,
        b2: 0,
        b3: 0,
        b4: 0,
        b5: 0,
        b6: 0
    }
  },
  getters: {
    getButtonCounts: (state) => state.counts
  },
  mutations: {
    incrementButtonCount: (state, name) => {
      state.counts[name] += 1;
    }
  },
  actions: {
    incrementButtonCount: ({ commit }, name) => {
      commit('incrementButtonCount', name)
    }
  }
}
