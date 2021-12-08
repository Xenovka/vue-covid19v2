<template>
  <base-navbar />
  <div class="container p-4">
    <h1 class="about__main-title text-center">About Us</h1>
    <p class="about__main-description text-center">This group is consist of three members, they are</p>
    <div class="row">
      <div class="col-lg-4 col-md-4">
        <div class="card__member-wrapper">
          <h2 class="card__member-name">Christine</h2>
          <img src="../assets/tine.jpg" alt="tine pic" />
        </div>
      </div>
      <div class="col-lg-4 col-md-4">
        <div class="card__member-wrapper">
          <h2 class="card__member-name">Michael Alexander</h2>
          <img src="../assets/mike.jpg" alt="mike pic" />
        </div>
      </div>
      <div class="col-lg-4 col-md-4">
        <div class="card__member-wrapper">
          <h2 class="card__member-name">Wendyanto</h2>
          <img src="../assets/wendy.jpg" alt="wendy pic" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseNavbar from "../components/BaseNavbar.vue";

export default {
  components: {
    BaseNavbar
  }
};
</script>

<style scoped>
.about__main-title {
  font-size: 4rem;
  font-weight: 700;
  text-transform: uppercase;
}

.about__main-description {
  font-size: 1.6rem;
  margin-bottom: 6rem;
}

.card__member-wrapper > img {
  width: 80%;
  height: 80%;
  margin-top: 1rem;
  border-radius: 6px;
  box-shadow: 0px 15px 30px 10px rgba(0, 0, 0, 0.2);
}

.card__member-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
