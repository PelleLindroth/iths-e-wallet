<template>
  <article class="card" :class="card.vendor" @click="setActive">
    <header>
      <img src="../../assets/chip-light.svg" alt="chip" class="chip" />
      <img
        v-if="card.vendor != 'blank'"
        :src="require(`../../assets/vendor-${card.vendor}.svg`)"
        :alt="vendor"
      />
    </header>
    <section class="number">{{ formattedNumber }}</section>
    <section class="info">
      <aside class="holder">
        <span>Cardholder name</span>
        <p>{{ card.holder }}</p>
      </aside>
      <aside class="valid">
        <span>Valid until</span>
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
      ${this.card.number.slice(0, 4)}
      ${this.card.number.slice(4, 8)}
      ${this.card.number.slice(8, 12)}
      ${this.card.number.slice(12, 16)}
      `
    },
    holder() {
      return this.card.holder
    },
    validDate() {
      return `${this.card.validMonth} / ${this.card.validYear}`
    },
    vendor() {
      switch (this.card.vendor) {
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
      this.$emit('setActive', this.card.id)
    },
  },
  props: {
    card: Object,
  },
}
</script>

<style lang="scss" scoped>
.card {
  max-width: 24rem;
  height: 14rem;
  border-radius: 0.6rem;
  background: #eee;
  padding: 1rem;
  -webkit-box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.4);
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.4);
  display: grid;
  gap: 0.5rem 0;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 2.8rem;
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
    font-size: 1.55rem;
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

.blank {
  background: linear-gradient(
      237.75deg,
      hsla(0, 0%, 100%, 0.24),
      hsla(0, 0%, 100%, 0)
    ),
    #d0d0d0;
}
</style>
