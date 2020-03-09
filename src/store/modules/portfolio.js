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
        
        const stockIndex = state.portfolio.findIndex(s => s.id == payload.id); 
        
        if (stockIndex == -1) {
            state.portfolio.push(payload);
        }
    },
    sellStock: (state, payload) => {
        
        if (payload.qty == 0) {
            const stockIndex = state.portfolio.findIndex(s => s.id == payload.id); 
            state.portfolio.splice(stockIndex, 1);
        }
    }
}

const actions = {
    buyStock: ( { commit }, payload ) => {
        commit('buyStock', payload);
    },
    sellStock: ( { commit }, payload ) => {
        commit('sellStock', payload);
    }  
}

export default {
    state,
    getters,
    mutations,
    actions
}