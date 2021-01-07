<template>
  <div class="add-card-view">
    <Top h1="ADD NEW CARD" cardType="NEW CARD" />
    <Card />
    <CardForm />
  </div>
</template>

<script>
import Top from '../components/Top'
import Card from '../components/Card'
import CardForm from '../components/CardForm'
export default {
  components: {
    Top,
    Card,
    CardForm,
  },
}
</script>

<style></style>
