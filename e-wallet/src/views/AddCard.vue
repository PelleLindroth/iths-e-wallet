<template>
  <main class="add-card">
    <Top h1="ADD NEW CARD" cardType="NEW CARD" />
    <Card :userCard="newCard" />
    <CardForm
      @editHolder="editHolder"
      @editMonth="editMonth"
      @editNumber="editNumber"
      @editVendor="editVendor"
      @editYear="editYear"
    />
    <button @click="addCard">Add Card</button>
  </main>
</template>

<script>
import { uid } from 'uid'
import Top from '../components/Top'
import Card from '../components/Card'
import CardForm from '../components/CardForm'
export default {
  components: {
    Top,
    Card,
    CardForm,
  },
  data() {
    return {
      newCard: {
        holder: '',
        vendor: 'blank',
        number: '',
        validMonth: 'MM',
        validYear: 'YY',
      },
    }
  },
  methods: {
    addCard() {
      this.newCard.id = uid(12)
      this.$root.addCard(this.newCard)
      this.$router.push('/')
    },
    editHolder(holder) {
      this.newCard.holder = holder
    },
    editMonth(month) {
      this.newCard.validMonth = month
    },
    editNumber(number) {
      this.newCard.number = number
    },
    editVendor(vendor) {
      this.newCard.vendor = vendor
    },
    editYear(year) {
      this.newCard.validYear = year
    },
  },
}
</script>
