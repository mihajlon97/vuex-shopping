import Vue from 'vue'
import App from './App'
import store from '@/store/index' // Import Store in main.js
import {currency} from './currency'

Vue.config.productionTip = false
Vue.filter('currency', currency)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: store,
  render: h => h(App)
})
