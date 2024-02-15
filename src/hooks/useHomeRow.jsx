import { useState, useEffect } from 'react'

export const useHomeRow = (fetchUrl) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(fetchUrl)
      const data = await response.json()
      setMovies(data.items)
    }
    fetchMovies()
  }, [fetchUrl])

  return { movies }
}
