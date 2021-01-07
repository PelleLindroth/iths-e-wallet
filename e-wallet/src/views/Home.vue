<template>
  <main id="home">
    <Top h1="E-WALLET" cardType="ACTIVE CARD" />
    <Card :userCard="activeCard" />
    <CardStack />
    <a href="#" class="cta">Add New Card</a>
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
  data() {
    return {
      activeCard: this.$root.cards[0],
    }
  },
}
</script>

<style lang="scss" scoped>
a.cta {
  align-items: center;
  border: 0.125rem solid #000;
  border-radius: 0.5rem;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  color: #000;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  -ms-flex-pack: center;
  font-size: 1.2rem;
  font-weight: 700;
  height: 4rem;
  justify-content: center;
  margin: 2rem 0;
  text-decoration: none;
  text-transform: uppercase;
}
</style>
