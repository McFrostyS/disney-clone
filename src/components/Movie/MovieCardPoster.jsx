import { Link } from 'react-router-dom'
import { imageUrlBaseOriginal } from '../../services/api'

export function MovieCardPoster({ movie }) {
  return (
    <>
      <Link to={`/play/${movie.id}`}>
        <img
          src={imageUrlBaseOriginal + movie.poster_path}
          className='w-[280px] h-[350px] rounded-lg hover:border-[3px] 
                  border-gray-100 cursor-pointer shadow-xl shadow-black hover:scale-110 transition-all ease-in'
          alt={movie.title || movie.name}
        />
      </Link>
    </>
  )
}
