import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='iniciar-sesion' element={<SignIn />} />
          <Route path='productos' element={<Products />} />
          <Route path='detalle-producto/:idProducto' element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
