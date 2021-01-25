<template>
  <article class="confirmation-modal">
    <div class="modal-content">
      <h1>ARE YOU SURE?</h1>
      <div class="buttons">
        <button @click="cancelDelete" class="no">CANCEL</button>
        <button @click="performDelete" class="yes">DELETE</button>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  methods: {
    cancelDelete() {
      this.$emit('cancelDelete')
    },
    performDelete() {
      this.$emit('performDelete')
    },
  },
}
</script>

<style lang="scss" scoped>
.confirmation-modal {
  background-color: rgba(255, 255, 255, 0.7);
  display: grid;
  height: 100vh;
  place-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 100;

  .modal-content {
    align-items: center;
    background: linear-gradient(
        0.689turn,
        hsla(0, 0%, 100%, 0.15),
        hsla(0, 0%, 100%, 0) 99.07%
      ),
      #ffae34;
    border-radius: 0.7rem;
    -webkit-box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.4);
    box-shadow: 0 0 0.7rem rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    height: 10rem;
    justify-content: space-between;
    padding: 2rem;
    max-width: 75%;

    h1 {
      color: #fff;
    }
    .buttons {
      display: flex;
      justify-content: space-between;

      button {
        background: transparent;
        border: 2px solid #fff;
        border-radius: 0.2rem;
        color: white;
        display: flex;
        font-weight: 700;
        justify-content: center;
        margin: 1rem;
        min-width: 5rem;
        outline: none;
        padding: 0.5rem;
      }
    }
  }
}
</style>
