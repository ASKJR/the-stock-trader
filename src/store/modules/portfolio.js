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
    },
    loadPortfolio: (state, payload) => {
        if (payload.portfolio.length == 0) {
            state.portfolio = [];
        } else {
            state.portfolio = payload.stocks.filter(s => {
                const stockIndex = payload.portfolio.findIndex(portS => portS.id == s.id);
                if (stockIndex != -1) {
                    s.qty = payload.portfolio[stockIndex].qty;
                    return s;
                } 
            });
        }
    }

}

const actions = {
    buyStock: ( { commit }, payload ) => {
        commit('buyStock', payload);
    },
    sellStock: ( { commit }, payload ) => {
        commit('sellStock', payload);
    },
    loadPortfolio: ( { commit }, payload ) => {
        commit('loadPortfolio', payload);
    }    
}

export default {
    state,
    getters,
    mutations,
    actions
}