//App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Products from './pages/Products.jsx'
import Perfumes from './pages/Perfumes.jsx'
import Perfumeros from './pages/Perfumeros.jsx'
import Tecnologia from './pages/Tecnologia.jsx'
import Otros from './pages/Otros.jsx'
import NotFound from './pages/NotFound.jsx'
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
        <Route path="/perfumeros" element={<Perfumeros />} />
        <Route path="/tecnologia" element={<Tecnologia />} />
        <Route path="/otros" element={<Otros />} />

        {/* Ruta 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
