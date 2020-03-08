import { numberToMoney } from '../../helper/money'

const state = {
    
    stocks: [
        { id: 1, company: "BMW", price: 110 },

        { id: 2, company: "Google", price: 200 },

        { id: 3, company: "Apple", price: 250 },

        { id: 4, company: "Twitter", price: 8 },

        {id: 5, company: "Facebook", price: 500}
    ]
}

const getters = {
    stocks: (state) => {
        return (state.stocks).map(stock => {
            stock.price = numberToMoney(stock.price);
            return stock;
        });
    }
}

const mutations = {
    endDay: (state) => {
        state.stocks.map(stock => {
            stock.price = (Math.random() * (1000.99 - 1.00)) + 1.00;
            return stock;
        })
    }
}

const actions = {
    endDay: ({ commit }) => {
        commit('endDay');
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}