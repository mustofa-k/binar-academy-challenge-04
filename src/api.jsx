import axios from "axios";

export const apikey = '4e08ac1036fded745b8282e890cdc358'
export  const BaseApi = 'https://api.themoviedb.org/3'
export const BaseImgUrl = 'https://image.tmdb.org/t/p/w500'


export const getMovieList = async () => {
    const movie = await axios.get(`${BaseApi}/movie/popular?api_key=${apikey}`)
    return(movie.data.results)
}

export const searchMovie = async (q) => {
    const search = await axios.get(`${BaseApi}/search/movie?query=${q}&api_key=${apikey}`)
    return search.data
}

export async function getMovieDetails(movieId) {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
        params: {
          api_key: apikey,
        },
      });
  
      return response.data;
    } catch (error) {
      console.error("Error fetching movie details:", error);
      throw error;
    }
  }