import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import HomeSections from './components/home/HomeSections'
import FooterSection from './components/layout/FooterSection'
import HeroSection from './components/layout/HeroSection'
import { EXTERNAL_LINKS } from './constants/links'
import PressKitPage from './pages/PressKitPage'

import SongPageXXII from './pages/SongPageXXII'
import SongPageCologne from './pages/SongPageCologne'
import SongPageKrakensbane from './pages/SongPageKrakensbane'
import SongPageXVI from './pages/SongPageXVI'

import './App.css'

function App() {
  const location = useLocation()
  const pathname = location.pathname.toLowerCase().replace(/\/+$/, '') || '/'
  const isHomePage = pathname === '/'

  useEffect(() => {
    if (!isHomePage) {
      return
    }

    const existingScript = document.getElementById('bandsintown-widget-script')
    if (existingScript) {
      existingScript.remove()
    }

    const widgetScript = document.createElement('script')
    widgetScript.id = 'bandsintown-widget-script'
    widgetScript.src = EXTERNAL_LINKS.embeds.bandsintownWidgetScript
    widgetScript.async = true
    document.body.appendChild(widgetScript)

    return () => {
      widgetScript.remove()
    }
  }, [isHomePage])

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      return
    }

    const initialScrollTimer = window.setTimeout(() => {
      const targetId = decodeURIComponent(location.hash.slice(1))
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        const blockAlignment = targetId.toLowerCase() === 'news' ? 'start' : 'center'
        targetElement.scrollIntoView({ behavior: 'smooth', block: blockAlignment })
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      }
    }, 80)

    return () => {
      window.clearTimeout(initialScrollTimer)
    }
  }, [location.pathname, location.hash])

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="page-wrapper">
            <HeroSection />
            <HomeSections />
            <FooterSection />
          </div>
        }
      />
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route
        path="/music/xvi"
        element={
          <div className="page-wrapper">
            <SongPageXVI />
          </div>
        }
      />
      <Route
        path="/music/xxii"
        element={
          <div className="page-wrapper">
            <SongPageXXII />
            <FooterSection />
          </div>
        }
      />
      <Route
        path="/music/cologne"
        element={
          <div className="page-wrapper">
            <SongPageCologne />
            <FooterSection />
          </div>
        }
      />
      <Route
        path="/music/krakensbane"
        element={
          <div className="page-wrapper">
            <SongPageKrakensbane />
            <FooterSection />
          </div>
        }
      />
      <Route
        path="/press"
        element={
          <div className="page-wrapper">
            <HeroSection />
            <PressKitPage />
            <FooterSection />
          </div>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
