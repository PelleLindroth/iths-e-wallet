<template>
  <main id="home">
    <Top h1="E-wallet" cardType="Active card" />
    <Card v-if="this.$root.cards.length" :userCard="activeCard" />
    <button
      v-if="this.$root.cards.length"
      @click="deleteCard"
      class="delete-button"
    >
      Delete this card
    </button>
    <CardStack />
    <button @click="showAddView" class="footer-button">Add New Card</button>
  </main>
</template>

<script>
import Top from '../components/Top'
import Card from '../components/Card'
import CardStack from '../components/CardStack'
export default {
  components: {
    Top,
    Card,
    CardStack,
  },
  computed: {
    activeCard() {
      return this.$root.activeCard
    },
  },
  methods: {
    deleteCard() {
      this.$root.deleteCard(this.activeCard.id)
    },
    showAddView() {
      this.$router.push('/add')
    },
  },
}
</script>

<style scoped>
button.delete-button {
  align-items: center;
  background-color: #fff;
  border: 0.125rem solid #000;
  border-radius: 0.5rem;
  color: #000;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 0.8rem;
  font-weight: 700;
  height: 2rem;
  justify-content: center;
  margin: 1rem auto;
  outline: none;
  text-decoration: none;
  text-transform: uppercase;
  width: 50%;
}
</style>
