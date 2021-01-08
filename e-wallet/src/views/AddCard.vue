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
    <a href="#" class="cta">Add Card</a>
  </main>
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
  data() {
    return {
      newCard: {
        id: '0',
        holder: '',
        vendor: 'blank',
        number: '',
        validMonth: 'MM',
        validYear: 'YY',
      },
    }
  },
  methods: {
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
