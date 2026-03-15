import { useEffect } from 'react'
import HomeSections from './components/home/HomeSections'
import FooterSection from './components/layout/FooterSection'
import HeroSection from './components/layout/HeroSection'
import { type NavItem } from './constants/navigation'
import { EXTERNAL_LINKS } from './constants/links'
import PressKitPage from './pages/PressKitPage'
import MusicPage from './pages/MusicPage'

import SongPageXXII from './pages/SongPageXXII'
import SongPageCologne from './pages/SongPageCologne'
import SongPageKrakensbane from './pages/SongPageKrakensbane'

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
    widgetScript.src = EXTERNAL_LINKS.embeds.bandsintownWidgetScript
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
    const isSongPage = ['xxii', 'cologne', 'krakensbane'].includes(musicSubpage)

    const musicPageContent = (() => {
      if (musicSubpage === 'xxii') {
        return <SongPageXXII />
      }

      if (musicSubpage === 'cologne') {
        return <SongPageCologne />
      }

      if (musicSubpage === 'krakensbane') {
        return <SongPageKrakensbane />
      }

      return <MusicPage />
    })()

    if (isSongPage) {
      return (
        <div className="page-wrapper">
          {musicPageContent}
          <FooterSection />
        </div>
      )
    }

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
