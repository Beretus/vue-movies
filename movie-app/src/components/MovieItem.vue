<script setup>
import { ref } from 'vue'

defineProps({
  trendingMovie: Object,
  trendingSerie: Array
})

const showDetails = ref(true)
</script>

<template>
  <div
    v-if="trendingMovie"
    class="movie-container"
    @mouseover="showDetails = true"
    @mouseleave="showDetails = false"
    :style="{
      'background-image': 'url(http://image.tmdb.org/t/p/w200/' + trendingMovie.poster_path + ')'
    }"
  >
    <div v-if="showDetails" class="movie-info">
      <p>{{ trendingMovie.title }}</p>
      <p>{{ trendingMovie.release_date }}</p>
      <p>{{ trendingMovie.id }}</p>
    </div>
  </div>
  <div
    v-if="trendingSerie"
    class="movie-container"
    @mouseover="showDetails = true"
    @mouseleave="showDetails = false"
    :style="{
      'background-image': 'url(http://image.tmdb.org/t/p/w200/' + trendingSerie.poster_path + ')'
    }"
  >
    <div v-if="showDetails" class="movie-info">
      <p>{{ trendingSerie.name }}</p>
      <p>{{ trendingSerie.first_air_date }}</p>
      <p>{{ trendingSerie.id }}</p>
    </div>
  </div>
</template>

<style scoped>
div.movie-container {
  width: 200px;
  height: 300px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

div.movie-container:hover {
  cursor: pointer;
}

p {
  color: white;
  font-weight: 700;
}
</style>
