import { useEffect } from 'react'
import HomeSections from './components/home/HomeSections'
import FooterSection from './components/layout/FooterSection'
import HeroSection from './components/layout/HeroSection'
import { type NavItem } from './constants/navigation'
import PressKitPage from './pages/PressKitPage'
import MusicPage from './pages/MusicPage'
import SongPageA from './pages/SongPageA'
import SongPageB from './pages/SongPageB'
import SongPageC from './pages/SongPageC'
import './App.css'

function App() {
  const pathname = window.location.pathname.toLowerCase()
  const isMusicPage = pathname.startsWith('/music')
  const isPressKitPage = pathname.startsWith('/press')
  const isHomePage = !isMusicPage && !isPressKitPage
  const musicSubpage = pathname.replace(/^\/music\/?/, '')

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
    const musicPageContent = (() => {
      if (musicSubpage === 'a') {
        return <SongPageA />
      }

      if (musicSubpage === 'b') {
        return <SongPageB />
      }

      if (musicSubpage === 'c') {
        return <SongPageC />
      }

      return <MusicPage />
    })()

    return (
      <div className="page-wrapper">
        <HeroSection activeNavId="music" getNavHref={getNavHref} />
        {musicPageContent}
        <FooterSection />
      </div>
    )
  }

  if (isPressKitPage) {
    return (
      <div className="page-wrapper">
        <HeroSection getNavHref={getNavHref} />
        <PressKitPage />
        <FooterSection />
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
