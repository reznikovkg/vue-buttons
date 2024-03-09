import modals from './modals'

export default {
    namespaced: true,
    state: {
        buttonValues: {
            button1: 0,
            button2: 0,
            button3: 0,
            button4: 0
        }
    },
    getters: {
        getCount: (state) => state.buttonValues
    },
    mutations: {
    },
    modules: {
        modals
    }
}
