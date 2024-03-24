export default {
  namespaced: true,
  state: {
    buttonClickCounts: {
      btn1: 0,
      btn2: 0,
      btn3: 0,
      btn4: 0
    }
  },
  getters: {
    getCounts: (state) => state.buttonClickCounts
  },
  mutations: {
    incrementCount: (state, name) => {
      state.buttonClickCounts[name] += 1
    }
  },
  actions: {
    incrementCount: ({ commit }, name) => {
      commit('incrementCount', name)
    }
  }
}
