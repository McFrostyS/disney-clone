export const API_URL = 'https://api.themoviedb.org/3'
export const API_KEY = '6ea9cb69940cbb4ef5f097247d4a7c27'
export const imageUrlBaseOriginal = 'https://image.tmdb.org/t/p/original'
export const movieUrlBase = `${API_URL}/movie?api_key=${API_KEY}`

export const getTrendingMovies = async () => {
  const response = await fetch(`${API_URL}/trending/all/day?api_key=${API_KEY}`)
  const data = await response.json()
  return data
}
