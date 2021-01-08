<template>
  <main id="home">
    <Top h1="E-wallet" cardType="Active card" />
    <Card :userCard="activeCard" />
    <CardStack />
    <a href="/add" class="cta">Add New Card</a>
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
}
</script>

<style lang="scss" scoped>
a.cta {
  align-items: center;
  border: 0.125rem solid #000;
  border-radius: 0.5rem;
  color: #000;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 1.2rem;
  font-weight: 700;
  height: 4rem;
  justify-content: center;
  margin: 2rem 0;
  text-decoration: none;
  text-transform: uppercase;
}
</style>
