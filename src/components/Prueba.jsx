import { useEffect, useState } from 'react'
import { getTrendingMovies, imageUrlBaseOriginal } from '../services/api'

export function Prueba() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    getTrendingMovies().then((data) => setMovies(data.results))
  }, [])

  return (
    <>
      <div>
        <h1 className='text-2xl font-bold'>Trending</h1>
        <div className='flex flex-wrap'>
          {movies.map((movie) => (
            <div key={movie.id} className='w-1/6 p-2'>
              <img
                src={imageUrlBaseOriginal + movie.poster_path}
                className='w-[110px] md:w-[200px] rounded-lg hover:border-[3px] border-gray-200 cursor-pointer hover:scale-110 transition-all ease-in'
                alt={movie.title || movie.name}
              />
            </div>
          ))}
        </div>
        <div className='flex flex-wrap'>
          {movies.map((movie) => (
            <div
              key={movie.id}
              className='flex overflow-x-auto gap-8 scrollbar-none scroll-smooth pt-4 px-3 pb-4'
            >
              <section className='hover:scale-105 transition-all ease-in'>
                <img
                  src={imageUrlBaseOriginal + movie.backdrop_path}
                  className='w-[110px] md:w-[260px] rounded-lg hover:border-[3px] border-gray-400 cursor-pointer'
                />
                <h2 className='w-[110px] md:w-[260px] text-white mt-2'>
                  {movie.title || movie.name}
                </h2>
              </section>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
