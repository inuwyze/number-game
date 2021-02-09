import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import keypad from './components/keypad'
Vue.component('keypad',keypad)
import button from './components/button'
Vue.component('btn',button)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
