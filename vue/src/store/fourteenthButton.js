export default {
  namespaced: true,
  state: {
    buttons: [0, 0, 0, 0],
  },
  getters: {
    getButtonCount: state => index => state.buttons[index]
  },
  mutations: {
    incrementButton(state, index) {
      state.buttons.splice(index, 1, state.buttons[index] + 1);
    }
  },
  actions: {
    incrementButton( {commit}, index) {
      commit('incrementButton', index);
    }
  }
}
