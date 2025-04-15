import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Guide from './pages/Guide'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/about" element={<About />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
