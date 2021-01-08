import Vue from 'vue'
import App from './App.vue'
import router from './router'
import cards from '../data/cards'

Vue.config.productionTip = false

new Vue({
  data() {
    return {
      activeCard: cards[0],
      cards: cards
    }
  },
  methods: {
    addCard(card) {
      this.cards.push(card)
    },
    deleteCard(id) {
      this.cards = this.cards.filter(card => card.id != id)
      this.activeCard = this.cards[0]
    },
    setActiveCard(id) {
      this.activeCard = this.cards.find(card => card.id == id)
    }
  },
  router,
  render: h => h(App)
}).$mount('#app')