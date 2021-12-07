<template>
  <router-view></router-view>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@100;200;300;400;500;600;700&family=IBM+Plex+Sans:wght@100;200;300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  font-size: 62.5%;
  font-family: "IBM Plex Sans", sans-serif;
}

.card__number {
  font-family: "IBM Plex Mono", monospace;
}

.card__wrapper--confirmed,
.card__wrapper--deaths,
.card__wrapper--recovered,
.card__wrapper--active {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
