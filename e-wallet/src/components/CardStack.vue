<template>
  <section class="card-stack">
    <Card v-for="card of cards" :key="card.id" :userCard="card" />
  </section>
</template>

<script>
import Card from '../components/Card'
export default {
  components: {
    Card,
  },
  computed: {
    cards() {
      return this.$root.cards
    },
  },
}
</script>

<style lang="scss" scoped>
.card-stack {
  margin: 2rem 0 12rem;
  display: grid;
  grid-auto-rows: 4rem;
}
</style>
