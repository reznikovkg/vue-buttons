export default {
  namespaced: true,
  state: {
    buttonValues: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  getters: {
    getButtonValues: (state) => state.buttonValues
  },
  mutations: {
    incrementButtonValue: (state, buttonIndex) => {
      state.buttonValues[buttonIndex] += 1;
      state.buttonValues = [...state.buttonValues];
    }
  },
  actions: {
    incrementButtonValue: ({ commit }, buttonIndex) => {
      commit('incrementButtonValue', buttonIndex)
    }
  }
}
