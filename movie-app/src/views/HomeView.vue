<script setup>
// import axios from 'axios'

import { onMounted, ref } from 'vue'
import MovieItem from '../components/MovieItem.vue'
import MovieService from '../services/MovieService.js'

const trendingMovies = ref(null)
const props = defineProps(['trendingMovies'])

onMounted(() => {
  MovieService.getTrending()
    .then((response) => {
      trendingMovies.value = response.data.results
    })
    .catch(function (error) {
      console.error(error)
    })
})
</script>

<template>
  <MovieItem
    v-for="trendingMovie in trendingMovies"
    :key="trendingMovie.id"
    :trending-movie="trendingMovie"
  />
</template>

<style scoped></style>
