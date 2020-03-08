import { numberToMoney } from '../../helper/money'

const state = {
    fund: 12599.99
}

const getters = {
    totalAvailableFunds: state => {
        return numberToMoney(state.fund)
    }
}

const mutations = {
    incrementFunds: (state, payload) => {
        state.fund += payload;
    },
    decrementFunds: (state, payload) => {
        state.fund -= payload;
    } 
}

const actions = {
    incrementFunds: ({ commit }, payload) => {
        commit('incrementFunds', payload);
    },
    decrementFunds: ({ commit }, payload) => {
        commit('decrementFunds', payload);
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}