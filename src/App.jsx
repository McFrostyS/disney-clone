import { BrandPage } from './components/Brand/BrandPage'
import { DetailPage } from './components/DetailPage/DetailPage'
import { Home } from './components/Home/Home'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/play/:movieId' element={<DetailPage />} />
        <Route path='/brand/:brand' element={<BrandPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
