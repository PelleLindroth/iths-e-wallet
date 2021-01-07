import Vue from 'vue'
import App from './App.vue'
import router from './router'
import cards from '../data/cards'

Vue.config.productionTip = false

new Vue({
  data() {
    return {
      cards: cards
    }
  },
  router,
  render: h => h(App)
}).$mount('#app')