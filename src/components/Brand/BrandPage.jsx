import { useEffect } from 'react'
import { HomeRow } from '../Home/HomeRow'
import { requests } from '../../utils/lists'
import { useParams } from 'react-router-dom'
import { Header } from '../Header/Header'

import './BrandPage.css'

export const BrandPage = () => {
  const { brand } = useParams()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Header />
      <main className='brandPage'>
        <div className='background'>
          <video
            autoPlay
            src={`/src/assets/videos/${brand}-bg.mp4`}
            onEnded={(e) => e.currentTarget.load()}
            className='w-full'
          ></video>
        </div>
        <div className='min-h-[70vh] h-[30vh]'></div>
        <div className=''>
          {brand === 'marvel' ? (
            <>
              <HomeRow title='Marvel Universe' fetch={requests.fetchMarvel} />
              <HomeRow
                title='Marvel Universe: Phase One'
                fetch={requests.fetchMarvelPhaseOne}
              />
              <HomeRow
                title='Marvel Universe: Phase Two'
                fetch={requests.fetchMarvelPhaseTwo}
              />
              <HomeRow
                title='Marvel Universe: Phase Three'
                fetch={requests.fetchMarvelPhaseThree}
              />
            </>
          ) : null}
          {brand === 'pixar' ? (
            <>
              <HomeRow title='Pixar Movies' fetch={requests.fetchPixar} />
              <HomeRow title='Toy Story Collection' fetch={requests.fetchToyStory} />
              <HomeRow title='Cars Collection' fetch={requests.fetchCars} />
              <HomeRow title='Unexpected Heroes' fetch={requests.fetchUnexpectedHeroes} />
            </>
          ) : null}
          {brand === 'starwar' ? (
            <>
              <HomeRow title='Star Wars Collection' fetch={requests.fetchStarWars} />
              <HomeRow title='Star Wars Lego' fetch={requests.fetchStarWarsLego} />
            </>
          ) : null}
          {brand === 'disney' ? (
            <>
              <HomeRow title='Disney Originals' fetch={requests.fetchDisney} />
              <HomeRow title='Classics' fetch={requests.fetchDisneyClassics} />
              <HomeRow title='Series' fetch={requests.fetchDisneySeries} />
            </>
          ) : null}
          {brand === 'national-geographic' ? (
            <>
              <HomeRow title='Movies' fetch={requests.fetchNationalMovies} />
            </>
          ) : null}
          {brand === 'star' ? (
            <>
              <HomeRow title='Star Originals' fetch={requests.fetchStar} />
            </>
          ) : null}
        </div>
      </main>
    </>
  )
}
