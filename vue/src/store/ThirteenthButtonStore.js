const state = {
    blackButtonCount: 0,
    blueButtonCount: 0,
    greenButtonCount: 0,
    redButtonCount: 0,
};

const getters = {
    getBlackButtonCount: (state) => state.blackButtonCount,
    getBlueButtonCount: (state) => state.blueButtonCount,
    getGreenButtonCount: (state) => state.greenButtonCount,
    getRedButtonCount: (state) => state.redButtonCount,
};

const mutations = {
    incrementBlackButtonCount(state) {
        state.blackButtonCount+=1;
    },
    incrementBlueButtonCount(state) {
        state.blueButtonCount+=1;
    },
    incrementGreenButtonCount(state) {
        state.greenButtonCount+=1;
    },
    incrementRedButtonCount(state) {
        state.redButtonCount+=1;
    },
};

const actions = {
    incrementBlackButtonCount({ commit }) {
        commit("incrementBlackButtonCount");
    },
    incrementBlueButtonCount({ commit }) {
        commit("incrementBlueButtonCount");
    },
    incrementGreenButtonCount({ commit }) {
        commit("incrementGreenButtonCount");
    },
    incrementRedButtonCount({ commit }) {
        commit("incrementRedButtonCount");
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};