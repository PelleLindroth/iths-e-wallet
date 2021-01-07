<template>
  <div class="home-view">
    <Top h1="E-WALLET" cardType="ACTIVE CARD" />
    <Card :userCard="activeCard" />
    <CardStack />
    <a href="#" class="cta">Add New Card</a>
  </div>
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
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 4rem;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 700;
  text-decoration: none;
  color: #000;
  border: 0.125rem solid #000;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 0.5rem;
  margin: 2rem 0;
}
</style>
