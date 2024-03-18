export default {
    namespaced: true,
    state: {
        btn1stCounts: {
            btn1: 0,
            btn2: 0,
            btn3: 0,
            btn4: 0,
            btn5: 0,
            btn6: 0
        }
    },
    getters: {
        getCount: (state) => state.btn1stCounts
    },
    mutations: {
        incrementButtonCount: (state, btnKey) => {
            state.btn1stCounts[btnKey] += 1
        }
    },
    actions: {
        incrementButtonCount: ({ commit }, btnKey) => {
            commit('incrementButtonCount', btnKey)
        }
    }
}