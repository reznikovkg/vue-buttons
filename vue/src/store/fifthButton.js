export default {
  namespaced: true,
  state: {
    btn5Counts: {
      btn5_1: 0,
      btn5_2: 0,
      btn5_3: 0,
      btn5_4: 0,
      btn5_5: 0
    }
  },
  getters: {
    getCount: (state) => state.btn5Counts
  },
  mutations: {
    upCount: (state, btnName) => {
      state.btn5Counts[btnName] += 1
    }
  },
  actions: {
    upCount: ({commit}, btnName) => {
      commit('upCount', btnName)
    }
  }
}
