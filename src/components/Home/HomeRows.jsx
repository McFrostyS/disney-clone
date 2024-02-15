import { HomeRow } from './HomeRow'
import { HomeRowPoster } from './HomeRowPoster'
import { requests } from '../../utils/lists'

export function HomeRows() {
  return (
    <section className=''>
      <HomeRow title={'Continue Watching'} fetch={requests.fetchRandom} />
      <HomeRowPoster title={'Marvel'} fetch={requests.fetchMarvelPhases} />
      <HomeRow title={'Disney Movies'} fetch={requests.fetchDisney} />
      <HomeRow title={'Cars'} fetch={requests.fetchCars} />
      <HomeRow title={'Pixar Movies'} fetch={requests.fetchPixar} />
      <HomeRow title={'Action and Adventures'} fetch={requests.fetchMarvel} />
      <HomeRow title={'The Simpsons'} fetch={requests.fetchSimpsons} />
      <HomeRow title={'Documentaries'} fetch={requests.fetchDocumentaries} />
      <HomeRow title={'Star Wars Lego'} fetch={requests.fetchStarWarsLego} />
    </section>
  )
}
