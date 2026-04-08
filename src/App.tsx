import { lazy, Suspense, useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import HomeSections from './components/home/HomeSections'
import PageShell from './components/layout/PageShell'

import './App.css'

const SongPageXVI = lazy(() => import('./pages/SongPageXVI'))
const SongPageBySlug = lazy(() => import('./pages/SongPageBySlug'))
const PressKitPage = lazy(() => import('./pages/PressKitPage'))

function App() {
  const location = useLocation()

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
    <Suspense fallback={<div className="page-wrapper" />}>
      <Routes>
        <Route
          path="/"
          element={
            <PageShell includeHero includeFooter>
              <HomeSections />
            </PageShell>
          }
        />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route
          path="/music/xvi"
          element={
            <PageShell>
              <SongPageXVI />
            </PageShell>
          }
        />
        <Route
          path="/music/:slug"
          element={
            <PageShell includeFooter>
              <SongPageBySlug />
            </PageShell>
          }
        />
        <Route
          path="/press"
          element={
            <PageShell includeHero includeFooter>
              <PressKitPage />
            </PageShell>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  )
}

export default App
