import { imageUrlBaseOriginal } from '../../services/api'
import { Link } from 'react-router-dom'

export function MovieCard({ movie }) {
  return (
    <Link to={`/play/${movie.id}`}>
      <section className='hover:scale-105 transition-all ease-in'>
        <img
          src={imageUrlBaseOriginal + movie.backdrop_path}
          className='w-[110px] md:w-[260px] rounded-lg shadow-xl 
          shadow-black hover:border-[3px] border-gray-100 cursor-pointer'
          alt={movie.title || movie.name}
        />
      </section>
    </Link>
  )
}
