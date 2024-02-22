import { useHomeRow } from '../../hooks/useHomeRow'
import { Skeleton } from '@mui/material'
import { sliderConfig } from '../../utils/sliderConfg'
import { MovieCardPoster } from '../Movie/MovieCardPoster'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './HomeRowPoster.css'

export const HomeRowPoster = ({ fetch, title }) => {
  const { movies } = useHomeRow(fetch)

  return (
    <>
      {movies.length > 0 ? (
        <article className='ml-10'>
          <h2 className='text-xl ml-5 font-bold'>{title}</h2>
          <Slider className='homeSliderPoster' {...sliderConfig}>
            {movies.map((movie) => (
              <MovieCardPoster id={movie.id} key={movie.id} movie={movie} />
            ))}
          </Slider>
        </article>
      ) : (
        <Skeleton animation='wave' variant='rect' width='100%' height={350} />
      )}
    </>
  )
}
