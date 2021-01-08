<template>
  <main id="home">
    <Top h1="E-wallet" cardType="Active card" />
    <Card :userCard="activeCard" />
    <CardStack />
    <button @click="showAddView">Add New Card</button>
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
    showAddView() {
      this.$router.push('/add')
    },
  },
}
</script>
