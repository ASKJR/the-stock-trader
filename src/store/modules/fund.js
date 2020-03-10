const state = {
    fund: 10000.00
}

const getters = {
    totalAvailableFunds: state => {
        return state.fund
    }
}

const mutations = {
    incrementFunds: (state, payload) => {
        state.fund += payload;
    },
    decrementFunds: (state, payload) => {
        state.fund -= payload;
    },
    loadFunds: (state, payload) => {
        state.fund = payload;
    }
}

const actions = {
    incrementFunds: ({ commit }, payload) => {
        commit('incrementFunds', payload);
    },
    decrementFunds: ({ commit }, payload) => {
        commit('decrementFunds', payload);
    },
    loadFunds: ({ commit }, payload) => {
        commit('loadFunds', payload);
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}