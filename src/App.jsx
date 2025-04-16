import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Guide from './pages/Guide'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  return (
    <BrowserRouter>
      <div id="app-wrapper">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
