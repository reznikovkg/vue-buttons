import modals from './modals'

export default {
    namespaced: true,
    state: {
        buttonValues: {
            button1: 0,
            button2: 0,
            button3: 0,
            button4: 0
        },
        key: 21,
        buttons: []
    },
    getters: {
        getButtonValues: (state) => state.
    },
    mutations: {
        incrementButtonValue(state, buttonName) {
            state.buttonValues[buttonName]++;
        }
    },
    modules: {
        modals
    }
}
