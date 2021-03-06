const state = {
    
    stocks: [
        { id: 1, company: "BMW", price: 110, qty: 0 },

        { id: 2, company: "Google", price: 200, qty: 0 },

        { id: 3, company: "Apple", price: 250, qty: 0 },

        { id: 4, company: "Twitter", price: 8, qty:0 },

        {id: 5, company: "Facebook", price: 500, qty:0 }
    ]
}

const getters = {
    stocks: (state) => {
        return state.stocks;
    }
}

const mutations = {
    endDay: (state) => {
        state.stocks.map(stock => {
            stock.price = ((Math.random() * (1000.99 - 1.00)) + 1.00).toFixed(2);
            return stock;
        });
    },
    loadStocks: (state, payload) => {
        state.stocks = payload;
    }

}

const actions = {
    endDay: ({ commit }) => {
        commit('endDay');
    },
    loadStocks: ({ commit }, payload) => {
        commit('loadStocks', payload);
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}