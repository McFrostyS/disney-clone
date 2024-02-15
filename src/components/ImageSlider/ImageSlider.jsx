import Slider from 'react-slick'
import { sliderImages, imageSliderConfig } from '../../utils/sliderConfg.jsx'
import { Link } from 'react-router-dom'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './ImageSlider.css'

export function ImageSlider() {
  return (
    <article>
      <Slider className='imageSlider' {...imageSliderConfig}>
        {sliderImages.map((image) => (
          <div className='relative p-2' key={image.id}>
            <div className=''>
              <Link to={`/play/${image.movieId}`}>
                <img
                  className='w-full h-full min-h-96 object-cover rounded hover:border-[3px] border-gray-100 cursor-pointer
                  box-border transition-all duration-75 ease-in-out'
                  src={image.url}
                  alt='Slider Image'
                />
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </article>
  )
}
