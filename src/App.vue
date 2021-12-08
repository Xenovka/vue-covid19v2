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

.card__content-wrapper {
  width: 100%;
}

.card__wrapper {
  height: 110%;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.2) 1px 2px 6px 0px;
}

.container {
  margin-top: 5rem;
}

select {
  font-size: 1.6rem !important;
  padding: 1rem 2rem;
  border-radius: 6px;
  outline: none;
  border: 2px solid #ccc;
}

select > option {
  font-size: 1.6rem;
}

p {
  font-size: 1.4rem;
}

.confirmed {
  color: #f77f00;
}

.deaths {
  color: #e63946;
}

.active {
  color: #ee9b00;
}

.recovered {
  color: #76c893;
}

.vaccines {
  color: #2ec4b6;
}

.content__province-name,
.content__country-name,
.content__title {
  font-size: 3.6rem;
  font-weight: 700;
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.content__title {
  margin-top: 0px !important;
  margin-bottom: 1rem;
}

.card__vaccine--title {
  font-size: 2.8rem;
  font-weight: 600;
  padding-top: 2rem;
  margin-bottom: -1rem;
}

.card__title {
  font-size: 1.4rem;
}

.card__number {
  letter-spacing: 1px;
  font-size: 4.4rem;
  font-weight: 700;
}

.content__last-update--title {
  margin-top: 4rem !important;
}
</style>
