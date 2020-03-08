const state = {
    portfolio: []
}

const getters = {
    myStocks: state => {
       return state.portfolio;
    }
}

const mutations = {
    buyStock: (state, payload) => {
        
        let stockIndex = state.portfolio.findIndex(s => s.id == payload.id); 
        
        if (stockIndex == -1) {
            state.portfolio.push(payload);
        }
    }
}

const actions = {
    buyStock: ( { commit }, payload ) => {
        commit('buyStock', payload);
    } 
}

export default {
    state,
    getters,
    mutations,
    actions
}