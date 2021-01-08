<template>
  <article class="card" :class="userCard.vendor" @click="setActive">
    <header>
      <img src="../../assets/chip-light.svg" alt="chip" class="chip" />
      <img
        :src="require(`../../assets/vendor-${userCard.vendor}.svg`)"
        :alt="vendor"
      />
    </header>
    <section class="number">{{ formattedNumber }}</section>
    <section class="info">
      <aside class="holder">
        <span>CARDHOLDER NAME</span>
        <p>{{ userCard.holder }}</p>
      </aside>
      <aside class="valid">
        <span>VALID UNTIL</span>
        <p>{{ validDate }}</p>
      </aside>
    </section>
  </article>
</template>

<script>
export default {
  computed: {
    formattedNumber() {
      return `
      ${this.userCard.number.slice(0, 4)}
      ${this.userCard.number.slice(4, 8)}
      ${this.userCard.number.slice(8, 12)}
      ${this.userCard.number.slice(12, 16)}
      `
    },
    validDate() {
      return `${this.userCard.validMonth} / ${this.userCard.validYear}`
    },
    vendor() {
      switch (this.userCard.vendor) {
        case 'bitcoin':
          return 'Bitcoin Inc'
        case 'blockchain':
          return 'Blockchain Inc'
        case 'evil':
          return 'Evil Corp'
        case 'ninja':
          return 'Ninja Bank'
        default:
          return ''
      }
    },
  },
  methods: {
    setActive() {
      this.$emit('setActive', this.userCard.id)
    },
  },
  props: {
    userCard: Object,
  },
}
</script>

<style lang="scss" scoped>
.card {
  background: #eee;
  border-radius: 0.6rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.4);
  -webkit-box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.4);
  display: grid;
  max-width: 24rem;
  gap: 0.5rem 0;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 2.8rem;
  height: 14rem;
  padding: 1rem;
  text-shadow: -1px -1px 2px hsla(0, 0%, 100%, 0.4);

  header {
    align-items: flex-start;
    -webkit-box-align: start;
    -webkit-box-pack: justify;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: start;
    -ms-flex-pack: justify;
    grid-column: auto/span 2;
    grid-row: auto/span 2;
    justify-content: space-between;

    .chip {
      margin-top: auto;
    }
  }

  .info,
  .number {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    grid-column: auto/span 2;
    grid-row: auto/span 1;
  }

  .number {
    font-size: 1.6rem;
    letter-spacing: 0.05rem;
    padding: 0.5rem 0 0;
    text-transform: uppercase;
  }

  .info {
    -webkit-box-flex: 1;
    flex: 1;
    -ms-flex: 1;

    aside {
      display: block;

      span {
        display: block;
        font-size: 0.7rem;
        text-transform: uppercase;
        margin: 0 0 0.25rem;
      }

      p {
        display: block;
        margin: 0;
        padding: 0;
        text-transform: uppercase;
      }
    }

    .holder {
      flex: 1;
    }

    .valid {
      span {
        text-align: right;
      }
    }
  }
}

.bitcoin {
  background: linear-gradient(
      0.689turn,
      hsla(0, 0%, 100%, 0.15),
      hsla(0, 0%, 100%, 0) 99.07%
    ),
    #ffae34;
  color: #222;
}

.blockchain {
  background: linear-gradient(248.52deg, rgba(0, 0, 0, 0.15) 1.49%, transparent),
    #8b58f9;
  color: #fff;
}

.evil {
  background: linear-gradient(248.3deg, rgba(0, 0, 0, 0.16), transparent),
    #f33355;
  color: #fff;
}

.ninja {
  background: linear-gradient(
      248.3deg,
      hsla(0, 0%, 100%, 0.15),
      hsla(0, 0%, 100%, 0)
    ),
    #222;
  color: #fff;
}
</style>
