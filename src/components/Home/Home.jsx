import { BrandCards } from '../Brand/BrandCards'
import { ImageSlider } from '../ImageSlider/ImageSlider'
import { HomeRows } from './HomeRows'

export function Home() {
  window.scrollTo(0, 0)
  return (
    <>
      <ImageSlider />
      <BrandCards />
      <HomeRows />
    </>
  )
}
