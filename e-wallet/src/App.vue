<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
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
}
</style>
