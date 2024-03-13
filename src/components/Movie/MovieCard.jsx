import { imageUrlBaseOriginal } from '../../services/api'
import { Link } from 'react-router-dom'
import defaultImage from '../../../public/assets/images/imageNotFound.png'

export function MovieCard({ movie }) {
  const imageUrl = movie.backdrop_path
    ? imageUrlBaseOriginal + movie.backdrop_path
    : defaultImage

  return (
    <Link to={`/play/${movie.id}`}>
      <section className='hover:scale-105 transition-all ease-in relative'>
        <img
          src={imageUrl}
          className='w-[260px] rounded-lg shadow-xl 
          shadow-black border-[3px] border-[#1A1D29] hover:border-gray-100 cursor-pointer'
          alt={movie.title || movie.name}
        />

        {!movie.backdrop_path && (
          <div className='absolute inset-0 flex items-end p-2'>
            <p className='overflow-ellipsis overflow-hidden'>
              {movie.title || movie.name}
            </p>
          </div>
        )}
      </section>
    </Link>
  )
}
