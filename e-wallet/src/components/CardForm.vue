<template>
  <section class="card-form">
    <label for="number" class="col-2">Card Number</label>
    <input
      @keyup="editNumber"
      type="text"
      name="number"
      maxlength="16"
      placeholder="XXXX XXXX XXXX XXXX"
      class="col-2"
      v-model="cardNumber"
    />
    <label for="cardholder" class="col-2">Cardholder Name</label>
    <input
      @keyup="editHolder"
      type="text"
      name="cardholder"
      placeholder="Firstname Lastname"
      class="col-2"
      v-model="cardHolder"
    />
    <label for="month" class="col-1">Month</label>
    <label for="year" class="col-1">Year</label>
    <select @change="editMonth" name="month" class="col-1" v-model="validMonth">
      <option hidden selected></option>
      <option value="01">01</option>
      <option value="02">02</option>
      <option value="03">03</option>
      <option value="04">04</option>
      <option value="05">05</option>
      <option value="06">06</option>
      <option value="07">07</option>
      <option value="08">08</option>
      <option value="09">09</option>
      <option value="10">10</option>
      <option value="11">11</option>
      <option value="12">12</option></select
    >
    <select
      @change="editYear"
      name="year"
      class="col-1"
      value=""
      v-model="validYear"
    >
      <option hidden selected></option>
      <option value="21">21</option>
      <option value="22">22</option>
      <option value="23">23</option>
      <option value="24">24</option>
      <option value="25">25</option></select
    >
    <label for="vendor" class="col-2">Vendor</label>
    <select @change="editVendor" name="vendor" class="col-2" v-model="vendor">
      <option hidden selected></option>
      <option value="Bitcoin Inc">Bitcoin Inc</option>
      <option value="Blockchain Inc">Blockchain Inc</option>
      <option value="Evil Corp">Evil Corp</option>
      <option value="Ninja Bank">Ninja Bank</option></select
    >
  </section>
</template>

<script>
export default {
  data() {
    return {
      cardHolder: '',
      cardNumber: '',
      validMonth: '',
      validYear: '',
      vendor: '',
    }
  },
  methods: {
    editHolder() {
      this.$emit('editHolder', this.cardHolder)
    },
    editMonth() {
      this.$emit('editMonth', this.validMonth)
    },
    editNumber() {
      this.$emit('editNumber', this.cardNumber)
    },
    editVendor() {
      switch (this.vendor) {
        case 'Bitcoin Inc':
          this.$emit('editVendor', 'bitcoin')
          break
        case 'Blockchain Inc':
          this.$emit('editVendor', 'blockchain')
          break
        case 'Evil Corp':
          this.$emit('editVendor', 'evil')
          break
        case 'Ninja Bank':
          this.$emit('editVendor', 'ninja')
          break
      }
    },
    editYear() {
      this.$emit('editYear', this.validYear)
    },
  },
}
</script>

<style lang="scss" scoped>
.card-form {
  margin: 2rem 0 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 1rem;

  input,
  select {
    border: 1px solid #000;
    border-radius: 0.25rem;
    padding: 0.5rem;
    height: 2.6rem;
    margin: 0 0 0.8rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 1rem;
    width: 100%;
  }

  label {
    padding: 0.25rem 0;
    font-size: 0.7rem;
    text-transform: uppercase;
  }

  .col-1 {
    grid-column: auto / span 1;
  }
  .col-2 {
    grid-column: auto / span 2;
  }
}
</style>
