import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes  } from './routes'
import { store } from './store/store'
import { numberToMoney } from './helper/money'

Vue.use(VueRouter)

Vue.filter('money', (value) => {
    return numberToMoney(value);
})

const router = new VueRouter({
    routes,
    mode: 'history'
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
