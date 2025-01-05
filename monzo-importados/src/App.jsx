//App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Products from './pages/Products.jsx'
import Perfumes from './pages/Perfumes.jsx'
import Decants from './pages/Decants.jsx'
import Perfumeros from './pages/Perfumeros.jsx'
import Tecnologia from './pages/Tecnologia.jsx'
import Otros from './pages/Otros.jsx'
import Cart from './pages/Cart.jsx'
import NotFound from './pages/NotFound.jsx'
import ScrollToTopButton from './components/ScrollToTopButton.jsx'
import ItemDetail from './components/ItemDetail.jsx'; // Nueva vista de detalle
import CartIcon from './components/CartIcon.jsx';
import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/perfumes" element={<Perfumes />} />
        <Route path="/decants" element={<Decants />} />
        <Route path="/perfumeros" element={<Perfumeros />} />
        <Route path="/tecnologia" element={<Tecnologia />} />
        <Route path="/otros" element={<Otros />} />
        <Route path="/product/:id" element={<ItemDetail />} /> {/* Ruta dinámica */}
        <Route path="/cart" element={<Cart />} />

        {/* Ruta 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ScrollToTopButton /> {/* Botón para subir arriba */}
      <CartIcon /> {/* Botón para subir arriba */}
    </BrowserRouter>
    </>
  )
}

export default App