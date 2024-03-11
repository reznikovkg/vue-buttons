
export default {
  namespaced: true,
  state: {
    buttonCounts: {
      btn1: 0,
      btn2: 0,
      btn3: 0,
      btn4: 0,
    }
  },
  getters: {
    getCounts: (state) => state.buttonCounts
  },
  mutations: {
    incrCount: (state, name) => {
      state.buttonCounts[name] += 1
    }
  },
  actions: {
    incrCount: ({ commit }, name) => {
      commit('incrCount', name)
    }
  }
}
