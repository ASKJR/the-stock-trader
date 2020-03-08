import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes  } from './routes'
import Vuex from 'vuex'

Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter({
    routes,
    mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
