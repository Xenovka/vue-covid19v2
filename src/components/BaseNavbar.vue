<template>
  <div class="button__wrapper">
    <router-link class="btn btn__home" to="/">Back</router-link>
  </div>
</template>

<style scoped>
.button__wrapper {
  position: absolute;
  left: 1%;
  top: 2%;
}

.btn__home {
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 1px;
  background-color: #ccc;
  padding: 1rem 2.4rem;
}
</style>
