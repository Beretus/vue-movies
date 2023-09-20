<script setup>
// import axios from 'axios'

import { onMounted, ref } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import HeaderMovie from '../components/HeaderMovie.vue'
import MovieItem from '../components/MovieItem.vue'
import MovieService from '../services/MovieService.js'
const trendingMovies = ref(null)
const trendingSeries = ref(null)
const popularMovies = ref(null)

const props = defineProps(['trendingMovies', 'trendingSeries'])

onMounted(() => {
  MovieService.getTrendingMovies()
    .then((response) => {
      trendingMovies.value = response.data.results
    })
    .catch(function (error) {
      console.error(error)
    })

  MovieService.getTrendingSeries()
    .then((response) => {
      trendingSeries.value = response.data.results
    })
    .catch(function (error) {
      console.error(error)
    })

  MovieService.getPopularMovies()
    .then((response) => {
      popularMovies.value = response.data.results
    })
    .catch(function (error) {
      console.error(error)
    })
})
</script>

<template>
  <Carousel class="header-carousel" :autoplay="10000" :wrap-around="true">
    <Slide v-for="popularMovie in popularMovies" :key="popularMovie.id">
      <HeaderMovie :popular-movie="popularMovie" />
    </Slide>
  </Carousel>
  <div class="trendingMovies">
    <p class="carousel-title">Trending Movies</p>
    <carousel :items-to-show="5" :wrap-around="true">
      <slide v-for="trendingMovie in trendingMovies" :key="trendingMovie.id">
        <MovieItem class="carousel__item" :trending-movie="trendingMovie" />
      </slide>
    </carousel>

    <p class="carousel-title">Trending Series</p>
    <carousel :items-to-show="5" :wrap-around="true">
      <slide v-for="trendingSerie in trendingSeries" :key="trendingSerie.id">
        <MovieItem class="carousel__item" :trending-serie="trendingSerie" />
      </slide>
    </carousel>
  </div>
</template>

<style scoped>
.trendingMovies {
  max-width: 1280px;
  margin: auto;
}

.header-carousel {
  margin: -70px 0 70px 0;
  z-index: 10;
}

.carousel-title {
  color: white;
  font-weight: 900;
  font-size: 1rem;
  margin-top: 4rem;
}
</style>
