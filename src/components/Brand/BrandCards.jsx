import { Link } from 'react-router-dom'

import disney from '../../../public/assets/images/disney.png'
import marvel from '../../../public/assets/images/marvel.png'
import nationalGeographic from '../../../public/assets/images/nationalG.png'
import pixar from '../../../public/assets/images/pixar.png'
import starwar from '../../../public/assets/images/starwar.png'
import star from '../../../public/assets/images/star.png'

import disneyVideo from '../../../public/assets/videos/disney.mp4'
import pixarVideo from '../../../public/assets/videos/pixar.mp4'
import marvelVideo from '../../../public/assets/videos/marvel.mp4'
import starwarVideo from '../../../public/assets/videos/star-wars.mp4'
import nationalGeographicVideo from '../../../public/assets/videos/national-geographic.mp4'
import starVideo from '../../../public/assets/videos/star.mp4'

const productionHouseList = [
  {
    id: 'disney',
    image: disney,
    video: disneyVideo
  },
  {
    id: 'pixar',
    image: pixar,
    video: pixarVideo
  },
  {
    id: 'marvel',
    image: marvel,
    video: marvelVideo
  },
  {
    id: 'starwar',
    image: starwar,
    video: starwarVideo
  },
  {
    id: 'national-geographic',
    image: nationalGeographic,
    video: nationalGeographicVideo
  },
  {
    id: 'star',
    image: star,
    video: starVideo
  }
]

export function BrandCards() {
  return (
    <div className='flex gap-2 mt-8 mb-8 md:gap-5 p-2 px-5 md:px-16'>
      {productionHouseList.map((item) => (
        <Link to={`/brand/${item.id}`} key={item.id}>
          <div
            key={item.id}
            className='border-[3px] border-gray-800
                  rounded-lg hover:scale-110 transition-all duration-300
                  ease-in-out cursor-pointer relative shadow-xl 
                  shadow-black hover:border-gray-100'
          >
            <video
              src={item.video}
              autoPlay
              loop
              playsInline
              muted
              className='absolute z-0 top-0 rounded-md opacity-0 hover:opacity-60'
            />
            <img src={item.image} className='w-full z-[1] opacity-100' />
          </div>
        </Link>
      ))}
    </div>
  )
}
