import { lazy, Suspense, useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import HomeSections from './components/home/HomeSections'
import PageShell from './components/layout/PageShell'
import SongPageSkeleton from './components/common/SongPageSkeleton'
import { trackPageView } from './utils/analytics'

import './App.css'

const SongPageTower = lazy(() => import('./pages/SongPageTower'))
const SongPageBySlug = lazy(() => import('./pages/SongPageBySlug'))
const PressKitPage = lazy(() => import('./pages/PressKitPage'))
const TechRiderPage = lazy(() => import('./pages/TechRiderPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

function App() {
  const location = useLocation()

  useEffect(() => {
    // Track page views for analytics
    const pageTitle = document.title || 'Wendigo'
    trackPageView(location.pathname, pageTitle)

    // Handle scroll to top or anchor
    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      return
    }

    // Use native browser support for anchor links
    // Browser will handle this automatically after render
    const targetId = decodeURIComponent(location.hash.slice(1))
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      // Small delay to ensure element is rendered
      requestAnimationFrame(() => {
        const blockAlignment = targetId.toLowerCase() === 'news' ? 'start' : 'center'
        targetElement.scrollIntoView({ behavior: 'smooth', block: blockAlignment })
      })
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }
  }, [location.pathname, location.hash])

  return (
    <Suspense fallback={<SongPageSkeleton />}>
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
        <Route path="/music/xvi" element={<Navigate to="/songs/tower" replace />} />
        <Route path="/tower" element={<Navigate to="/songs/tower" replace />} />
        <Route
          path="/songs/tower"
          element={
            <PageShell>
              <SongPageTower />
            </PageShell>
          }
        />
        <Route
          path="/music/tower"
          element={
            <PageShell>
              <SongPageTower />
            </PageShell>
          }
        />
        <Route
          path="/songs/:slug"
          element={
            <PageShell includeFooter>
              <SongPageBySlug />
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
        <Route
          path="/tech-rider"
          element={<TechRiderPage />}
        />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  )
}

export default App
