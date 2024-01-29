const API_URL = 'https://api.themoviedb.org/3'
const API_KEY = '2ec0d66f5bdf1dd12eefa0723f1479cf'
export const imageUrlBase500 = 'https://image.tmdb.org/t/p/w500'
export const imageUrlBaseOriginal = 'https://image.tmdb.org/t/p/original'
export const movieUrlBase = `${API_URL}/movie?api_key=${API_KEY}`

export const getTrendingMovies = async () => {
  const response = await fetch(`${API_URL}/trending/all/day?api_key=${API_KEY}`)
  const data = await response.json()
  return data
}
