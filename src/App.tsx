import { useEffect } from 'react'
import HomeSections from './components/home/HomeSections'
import FooterSection from './components/layout/FooterSection'
import HeroSection from './components/layout/HeroSection'
import { type NavItem } from './constants/navigation'
import EpkPage from './pages/EpkPage'
import MusicPage from './pages/MusicPage'
import './App.css'

function App() {
  const pathname = window.location.pathname.toLowerCase()
  const isMusicPage = pathname.startsWith('/music')
  const isEpkPage = pathname.startsWith('/epk')
  const isHomePage = !isMusicPage && !isEpkPage

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
    widgetScript.src = 'https://widgetv3.bandsintown.com/main.min.js'
    widgetScript.async = true
    document.body.appendChild(widgetScript)

    return () => {
      widgetScript.remove()
    }
  }, [isHomePage])

  useEffect(() => {
    if (!isHomePage) {
      return
    }

    const scrollToHashTarget = () => {
      const { hash } = window.location
      if (!hash) {
        return
      }

      const targetId = decodeURIComponent(hash.slice(1))
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }

    const initialScrollTimer = window.setTimeout(scrollToHashTarget, 80)
    window.addEventListener('hashchange', scrollToHashTarget)

    return () => {
      window.clearTimeout(initialScrollTimer)
      window.removeEventListener('hashchange', scrollToHashTarget)
    }
  }, [isHomePage])

  const getNavHref = (item: NavItem) => {
    if (!isHomePage) {
      return item.musicHref ?? '/#merch'
    }

    return item.homeHref ?? '#merch'
  }

  if (isMusicPage) {
    return (
      <div className="page-wrapper">
        <HeroSection activeNavId="music" getNavHref={getNavHref} />
        <MusicPage />
      </div>
    )
  }

  if (isEpkPage) {
    return (
      <div className="page-wrapper">
        <HeroSection getNavHref={getNavHref} />
        <EpkPage />
      </div>
    )
  }

  return (
    <div className="page-wrapper">
      <HeroSection getNavHref={getNavHref} />
      <HomeSections />
      <FooterSection />
    </div>
  )
}

export default App
