const state = {
    portfolio: []
}

const getters = {
    myStocks: state => {
       return state.portfolio;
    }
}

const mutations = {
    addStock: (state, payload) => {
        
        let stockIndex = state.portfolio.findIndex(s => s.id == payload.id); 
        
        if (stockIndex == -1) {
            state.portfolio.push(payload);
        }
    }
}

const actions = {
    addStock: ( { commit }, payload ) => {
        commit('addStock', payload);
    } 
}

export default {
    state,
    getters,
    mutations,
    actions
}