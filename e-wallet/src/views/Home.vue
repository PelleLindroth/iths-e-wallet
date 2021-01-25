<template>
  <main id="home">
    <ConfirmationModal
      @cancelDelete="closeModal"
      @performDelete="deleteCard"
      v-show="showModal"
    />
    <Top h1="E-wallet" cardType="Active card" />
    <Card v-if="this.$root.cards.length" :card="activeCard" />
    <button
      v-if="this.$root.cards.length"
      @click="openModal"
      class="delete-button"
    >
      Delete this card
    </button>
    <CardStack />
    <button @click="showAddView" class="footer-button" ref="button">
      Add New Card
    </button>
  </main>
</template>

<script>
import Top from '../components/Top'
import Card from '../components/Card'
import CardStack from '../components/CardStack'
import ConfirmationModal from '../components/ConfirmationModal'

export default {
  components: {
    Top,
    Card,
    CardStack,
    ConfirmationModal,
  },
  computed: {
    activeCard() {
      return this.$root.activeCard
    },
  },
  data() {
    return {
      showModal: false,
    }
  },
  methods: {
    closeModal() {
      this.showModal = false
      document.body.style.overflow = 'scroll'
    },
    deleteCard() {
      this.$root.deleteCard(this.activeCard.id)
      this.showModal = false
      document.body.style.overflow = 'scroll'

      if (!this.$root.cards.length) {
        this.$refs.button.style.marginTop = 'auto'
      }
    },
    openModal() {
      window.scrollTo(0, 0)
      this.showModal = true
      document.body.style.overflow = 'hidden'
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
  font-size: 0.7rem;
  font-weight: 700;
  height: 2rem;
  justify-content: center;
  margin: 1rem auto;
  outline: none;
  text-decoration: none;
  text-transform: uppercase;
  width: 45%;
}
</style>
