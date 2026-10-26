import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import Menu from './components/Menu.jsx'
import Meals from './components/Meals.jsx'
import About from './components/About.jsx'
import Gallery from './components/Gallery.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx'
import Preloader from './components/Preloader.jsx'
import { useCallback, useState } from 'react'

export default function App() {
  const [ready, setReady] = useState(false)
  const reveal = useCallback(() => setReady(true), [])

  return (
    <div className={`app ${ready ? 'ready' : ''}`}>
      <Preloader onReveal={reveal} />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Menu />
        <Meals />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
