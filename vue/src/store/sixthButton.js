import modals from './modals'

export default {
  namespaced: true,
  state: {
    buttonCounts: {
      button1: 0,
      button2: 0,
      button3: 0,
      button4: 0,
    }
  },
  getters: {
    getCounts: (state) => state.buttonCounts
  },
  mutations: {
    incrementCount: (state, name) => {
      state.buttonCounts[name] += 1
    }
  },
  actions: {
    incrementCount: ({ commit }, name) => {
      commit('incrementCount', name)
    }
  },
  modules: {
    modals
  }
}
