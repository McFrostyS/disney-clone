import { BrandCards } from '../Brand/BrandCards'
import { ImageSlider } from '../ImageSlider/ImageSlider'
import { HomeRows } from './HomeRows'

export function Home() {
  return (
    <>
      <ImageSlider />
      <BrandCards />
      <HomeRows />
    </>
  )
}
