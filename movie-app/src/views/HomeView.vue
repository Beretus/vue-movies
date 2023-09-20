<script setup>
// import axios from 'axios'

import { onMounted, ref } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import MovieItem from '../components/MovieItem.vue'
import MovieService from '../services/MovieService.js'

const trendingMovies = ref(null)
const trendingSeries = ref(null)

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
})
</script>

<template>
  <div class="trendingMovies">
    <carousel :items-to-show="5" :wrap-around="true">
      <slide v-for="trendingMovie in trendingMovies" :key="trendingMovie.id">
        <MovieItem class="carousel__item" :trending-movie="trendingMovie" />
      </slide>
    </carousel>

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

.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.01);
}
</style>
