<script setup>
defineProps({
  trendingMovie: Object,
  trendingSerie: Object
})

// const showDetails = ref(true)
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
    <div class="movie-info">
      <p>{{ trendingMovie.title }}</p>
      <div class="score">
        <i class="bx bxs-star" style="color: #ffd902"></i>
        <p>{{ trendingMovie.vote_average.toFixed(1) }}</p>
      </div>
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
    <div class="movie-info">
      <p>{{ trendingSerie.name }}</p>
      <div class="score">
        <i class="bx bxs-star" style="color: #ffd902"></i>
        <p>{{ trendingSerie.vote_average.toFixed(1) }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
div.movie-container {
  width: 300px;
  height: 300px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  border-radius: 10px;
  box-shadow: -1px -62px 189px -28px rgba(0, 0, 0, 1) inset;
  -webkit-box-shadow: -1px -62px 189px -28px rgba(0, 0, 0, 1) inset;
  -moz-box-shadow: -1px -62px 189px -28px rgba(0, 0, 0, 1) inset;
}

div.movie-container:hover {
  cursor: pointer;
}

div.movie-container .movie-info .score {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

div .movie-container .movie-info {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px;
}

p {
  color: white;
  font-weight: 700;
}

i {
  margin-right: 5px;
}
</style>
