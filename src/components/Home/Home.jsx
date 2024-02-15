import { Header } from '../Header/Header'
import { BrandCards } from '../Brand/BrandCards'
import { ImageSlider } from '../ImageSlider/ImageSlider'
import { HomeRows } from './HomeRows'

export function Home() {
  return (
    <>
      <Header />
      <ImageSlider />
      <BrandCards />
      <HomeRows />
    </>
  )
}
