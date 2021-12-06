<template>
  <div class="container p-4">
    <h1 class="text-center features__main-title">Features</h1>
    <div class="features__button-wrapper d-flex justify-content-evenly">
      <router-link class="btn btn-primary" to="/global-data">Global Covid Data</router-link>
      <router-link class="btn btn-primary" to="/indonesia">Indonesia Covid Data</router-link>
      <router-link class="btn btn-primary" to="/province">Data By Province</router-link>
      <router-link class="btn btn-primary" to="/daily">Daily Covid Data</router-link>
      <router-link class="btn btn-primary" to="/country">Specific Country Data</router-link>
    </div>
  </div>
</template>

<script>
export default {
  setup() {}
};
</script>

<style></style>
