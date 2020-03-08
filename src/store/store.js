import Vue from 'vue'
import Vuex from 'vuex'
import fund from './modules/fund'
import stock from './modules/stock'
import portfolio from './modules/portfolio'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        fund,
        stock,
        portfolio
    }
})