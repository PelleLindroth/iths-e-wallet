<template>
  <header class="top">
    <h1>{{ h1 }}</h1>
    <p class="card-type">{{ cardType }}</p>
  </header>
</template>

<script>
export default {
  props: {
    cardType: String,
    h1: String,
  },
}
</script>

<style lang="scss" scoped>
.top {
  display: flex;
  flex-direction: column;
  text-transform: uppercase;

  h1,
  p {
    text-align: center;
  }

  h1 {
    flex: 2;
    font-family: Source Sans Pro, sans-serif;
    font-size: 2rem;
    line-height: 2rem;
    padding: 1.5rem 0;
  }

  p {
    color: rgba(0, 0, 0, 0.4);
    flex: 1;
    font-size: 0.8rem;
    font-weight: 600;
    padding: 0.25rem;
  }
}
</style>
