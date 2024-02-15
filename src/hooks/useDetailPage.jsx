import { useState, useEffect } from 'react'
import { API_KEY, API_URL } from '../services/api'

const useDetailPage = (movieId) => {
  const [singleMovie, setSingleMovie] = useState({})
  const [recommended, setRecommended] = useState([])
  const [videos, setVideos] = useState([])
  const [cast, setCast] = useState([])

  useEffect(() => {
    window.scrollTo(0, 0)

    // Fetch movie details and videos
    const fetchMovieDetails = async () => {
      const response = await fetch(
        `${API_URL}/movie/${movieId}?api_key=${API_KEY}&append_to_response=videos`
      )
      const data = await response.json()
      setSingleMovie(data)
      setVideos(data.videos.results)
    }

    // Fetch recommended movies
    const fetchRecommendedMovies = async () => {
      const response = await fetch(
        `${API_URL}/movie/${movieId}/recommendations?api_key=${API_KEY}&language=en-US&page=1`
      )
      const data = await response.json()
      setRecommended(data.results)
    }

    // Fetch movie credits
    const fetchMovieCredits = async () => {
      const response = await fetch(
        `${API_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
      )
      const data = await response.json()
      setCast(data.cast)
    }

    fetchMovieDetails()
    fetchRecommendedMovies()
    fetchMovieCredits()
  }, [movieId])

  return { singleMovie, recommended, videos, cast }
}

export default useDetailPage
