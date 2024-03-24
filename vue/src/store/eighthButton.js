export default {
  namespaced: true,
  state: {
    btn8thCounts: {
      btn1: 0,
      btn2: 0,
      btn3: 0,
      btn4: 0
    }
  },
  getters: {
    getCount: (state) => state.btn8thCounts
  },
  mutations: {
    incrementButtonCount: (state, btnKey) => {
      state.btn8thCounts[btnKey] += 1
    }
  },
  actions: {
    incrementButtonCount: ({ commit }, btnKey) => {
      commit('incrementButtonCount', btnKey)
    }
  }
}
