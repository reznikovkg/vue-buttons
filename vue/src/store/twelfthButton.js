export default {
  namespaced: true,
  state: {
    numbers: Array(6).fill(0)
  },
  getters: {
    getNumber: state => index => state.numbers[index]
  },
  mutations: {
    setNumber: (state, index) => {
      state.numbers.splice(index, 1, state.numbers[index] + 1)
    }
  },
  actions: {
    setNumber: ({ commit }, index) => {
      commit('setNumber', index)
    }
  }
}
