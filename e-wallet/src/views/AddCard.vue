<template>
  <main class="add-card">
    <Top h1="ADD NEW CARD" cardType="NEW CARD" />
    <Card :card="newCard" />
    <CardForm
      @editNumber="editNumber"
      @editHolder="editHolder"
      @editMonth="editMonth"
      @editYear="editYear"
      @editVendor="editVendor"
    />
    <div class="error-container">
      <p v-show="error" class="error-message">
        {{ errorMessage }}
      </p>
    </div>
    <button @click="addCard" class="footer-button">Add Card</button>
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
      error: false,
      errorMessage: '',
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
      if (!this.validateInput()) return

      this.newCard.id = uid(12)
      this.$root.addCard(this.newCard)

      if (this.$root.cards.length == 1) {
        this.$root.setActiveCard(this.newCard.id)
      }

      this.$router.push('/')
    },
    editNumber(number) {
      this.newCard.number = number
    },
    editHolder(holder) {
      this.newCard.holder = holder
    },
    editMonth(month) {
      this.newCard.validMonth = month
    },
    editYear(year) {
      this.newCard.validYear = year
    },
    editVendor(vendor) {
      this.newCard.vendor = vendor
    },
    validateInput() {
      this.error = false

      if (this.newCard.number.length < 16) {
        this.errorMessage = 'Card number must be 16 digits'
        this.error = true
        return false
      } else if (Number.isNaN(+this.newCard.number)) {
        this.errorMessage = 'Card number can only contain digits'
        this.error = true
        return false
      } else if (!this.newCard.holder.length) {
        this.errorMessage = 'Please submit a cardholder name'
        this.error = true
        return false
      } else if (Number.isNaN(+this.newCard.validMonth)) {
        this.errorMessage = 'Please enter a valid month'
        this.error = true
        return false
      } else if (Number.isNaN(+this.newCard.validYear)) {
        this.errorMessage = 'Please enter a valid year'
        this.error = true
        return false
      } else if (this.newCard.vendor == 'blank') {
        this.errorMessage = 'Please submit card vendor'
        this.error = true
        return false
      }

      return true
    },
  },
}
</script>

<style lang="scss" scoped>
.error-container {
  min-height: 1rem;

  p {
    color: red;
    font-size: 0.8rem;
    text-transform: uppercase;
  }
}
</style>
