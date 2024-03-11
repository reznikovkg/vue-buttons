export default {
    namespaced: true,
    state: () => ({
        blackButtonCount: 0,
        blueButtonCount: 0,
        greenButtonCount: 0,
        redButtonCount: 0,
    }),
    mutations: {
        incrementBlackButtonCount(state) {
            state.blackButtonCount += 1;
        },
        incrementBlueButtonCount(state) {
            state.blueButtonCount += 1;
        },
        incrementGreenButtonCount(state) {
            state.greenButtonCount += 1;
        },
        incrementRedButtonCount(state) {
            state.redButtonCount += 1;
        },
    },
    actions: {
        incrementBlackButtonCount({commit}) {
            commit("incrementBlackButtonCount");
        },
        incrementBlueButtonCount({commit}) {
            commit("incrementBlueButtonCount");
        },
        incrementGreenButtonCount({commit}) {
            commit("incrementGreenButtonCount");
        },
        incrementRedButtonCount({commit}) {
            commit("incrementRedButtonCount");
        },
    },
};