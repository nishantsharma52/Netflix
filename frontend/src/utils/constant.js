export const API_END_POINT = "http://localhost:8080/api/v1/user"

export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGM5YjFjMWUzMTE3YTE5ZjQ0N2Q0NWJmM2U0YTdmMSIsIm5iZiI6MTc3NDUyNzY3OC40MDIsInN1YiI6IjY5YzUyNGJlODE2NmE2NjBmNjYyY2MxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UI6Vdr7bm3MyAhTSeof1FzY6sda_6sBmuoL3vbJmHSA'
  }
};

export const Now_Playing_Movie = "https://api.themoviedb.org/3/movie/now_playing"
export const Popular_Movie = "https://api.themoviedb.org/3/movie/popular"
export const Top_Rated_movie = "https://api.themoviedb.org/3/movie/top_rated"
export const Upcoming_Movie = "https://api.themoviedb.org/3/movie/upcoming"

export const Banner_Url = "https://image.tmdb.org/t/p/w500"
export const SEARCH_MOVIE_URL = "https://api.themoviedb.org/3/search/movie?query="