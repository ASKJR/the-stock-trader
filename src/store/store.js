import Vue from 'vue'
import Vuex from 'vuex'
import fund from './modules/fund'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        fund
    }
})