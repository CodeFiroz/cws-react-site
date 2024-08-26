import './assets/style.css'
import './assets/responsive.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Career from './Pages/Career/Career'
import Contact from './Pages/Contact/Contact'
import LogoPortfolio from './Pages/LogoPortfolio/LogoPortfolio'
import WebPortfolio from './Pages/WebPortfolio/WebPortfolio'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {

  return (
    
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/portfolio" element={<WebPortfolio />} />
        <Route path="/logo-portfolio" element={<LogoPortfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>

  )
}

export default App
