<template>
  <img src="../assets/covid.jpg" alt="background" />
  <div class="container p-4">
    <h1 class="text-center features__main-title">Covid-19 Data Website</h1>
    <h1 class="text-center features__secondary-title">Features</h1>
    <div class="features__button-wrapper d-flex justify-content-evenly" data-aos="zoom-in">
      <router-link class="btn btn__features" to="/indonesia">Indonesia Covid Data</router-link>
      <router-link class="btn btn__features" to="/daily">Daily Indonesia Covid Data</router-link>
      <router-link class="btn btn__features" to="/province">Data By Province</router-link>
      <router-link class="btn btn__features" to="/global-data">Global Covid Data</router-link>
      <router-link class="btn btn__features" to="/country">Specific Country Data</router-link>
    </div>
  </div>
  <base-footer />
</template>

<script>
import BaseFooter from "../components/BaseFooter.vue";

export default {
  components: {
    BaseFooter
  }
};
</script>

<style scoped>
img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1;
}

.features__main-title {
  font-size: 4.6rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 3rem;
}

.features__secondary-title {
  font-size: 2.6rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.features__button-wrapper {
  width: 40%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.btn__features {
  width: 80%;
  font-size: 1.6rem;
  font-weight: 600;
  padding: 2rem 3rem;
  background-color: #ccc;
  margin-bottom: 2.5rem;
  border-radius: 6px;
  box-shadow: 0px 10px 1px 0px rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease;
}

.btn__features:focus-within {
  transform: translateY(10px);
  box-shadow: none;
}

@media only screen and (max-width: 996px) {
  .btn__features {
    width: 100%;
  }
}

@media only screen and (max-width: 768px) {
  .btn__features {
    width: 120%;
    padding: 2rem 2rem;
    margin-bottom: 3rem;
  }

  .features__main-title {
    font-size: 3.4rem;
  }

  .features__secondary-title {
    font-size: 2.4rem;
  }
}

@media only screen and (max-width: 550px) {
  .btn__features {
    font-size: 1.4rem;
    margin-bottom: 2rem;
  }
}

@media only screen and (max-width: 480px) {
  .btn__features {
    width: 190%;
  }

  img {
    display: none;
  }
}
</style>
