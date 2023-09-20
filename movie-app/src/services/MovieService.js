import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  withCredentials: false,
  params: { language: 'en-US' },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDVmZTM5YTMxY2UwZjI3N2ZkMzAyMGQzNTUxYTI3ZiIsInN1YiI6IjYwOWU4NTc3ODA3Mjk4MDA2ZmRhYmQxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DA5cnZRjiokZlzK76m80AAIv9Ozf08DXfz0kZnjm2x0'
  }
})

export default {
  getTrendingMovies() {
    return apiClient.get('/trending/movie/day')
  },

  getTrendingSeries() {
    return apiClient.get('/trending/tv/day')
  }
}
