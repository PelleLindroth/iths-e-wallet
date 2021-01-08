<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=PT+Mono&family=Source+Sans+Pro:wght@600;700&display=swap');

* {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: PT Mono, monospace;
  height: 100vh;
  margin: 0 auto;
  max-width: 24rem;
  padding: 1rem;
  -webkit-font-smoothing: antialiased;

  button.footer-button {
    align-items: center;
    background-color: #fff;
    border: 0.125rem solid #000;
    border-radius: 0.5rem;
    color: #000;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 1.2rem;
    font-weight: 700;
    height: 4rem;
    justify-content: center;
    margin: 2rem 0;
    outline: none;
    text-decoration: none;
    text-transform: uppercase;
    width: 100%;
  }
}
</style>
