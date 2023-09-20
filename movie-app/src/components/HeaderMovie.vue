<script setup>
import { ref } from 'vue'

defineProps({
  popularMovie: Object
})

const showDetails = ref(true)
</script>

<template>
  <header
    :style="{
      'background-image': 'url(http://image.tmdb.org/t/p/w1280/' + popularMovie.backdrop_path + ')'
    }"
  >
    <div class="movie-info">
      <h2 class="title">{{ popularMovie.title }}</h2>
      <p>{{ popularMovie.release_date }}</p>
      <p class="description">
        {{ popularMovie.overview }}
      </p>
      <div class="buttons">
        <button class="btn-trailer">Watch Trailer</button>
        <button class="btn-watchlist">Add to watchlist</button>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  height: 500px;
  background-image: url(../assets/Bitmap.jpg);
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin-top: -70px;
  -webkit-box-shadow: inset 10px 10px 300px 137px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: inset 10px 10px 300px 137px rgba(0, 0, 0, 0.6);
  box-shadow: inset 10px 10px 300px 137px rgba(0, 0, 0, 0.6);
}

.movie-info {
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 2rem;
  color: white;
  justify-content: flex-start;
  align-items: flex-start;
}

.movie-info .description {
  text-align: left;
}

.buttons {
  margin-top: 1rem;
}

.buttons .btn-trailer {
  background-color: rgb(99, 0, 99);
  border-radius: 17px;
  border: 2px solid rgb(61, 1, 61);
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-size: 17px;
  padding: 13px 21px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #2f6627;
}

.buttons .btn-trailer:hover {
  background-color: rgb(122, 1, 122);
}

.buttons .btn-watchlist {
  background-color: transparent;
  border-radius: 17px;
  border: 2px solid rgb(61, 1, 61);
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-size: 17px;
  padding: 13px 21px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #2f6627;
  margin-left: 1rem;
}

.buttons .btn-watchlist:hover {
  background-color: rgb(99, 0, 99);
}
</style>
