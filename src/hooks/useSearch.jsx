import { useState, useEffect } from 'react'
import { API_KEY, API_URL } from '../services/api'

export function useSearch() {
  const [query, setQuery] = useState('')
  const [results, setSResults] = useState([''])

  useEffect(() => {
    if (query !== '') {
      fetch(`${API_URL}/search/movie?api_key=${API_KEY}&query=${query}`)
        .then((res) => res.json())
        .then((data) => setSResults(data.results))
    }
  }, [query])
  return { query, results, setQuery }
}
