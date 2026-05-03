import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.tsx'
import ErrorBoundary from './components/common/ErrorBoundary.tsx'
import { initializeAnalytics } from './utils/analytics.ts'

// Initialize Google Analytics
initializeAnalytics({
  measurementId: import.meta.env.VITE_GA_MEASUREMENT_ID || '',
  enabled: import.meta.env.VITE_ANALYTICS_ENABLED !== 'false',
})

// Setup global error tracking
window.__trackError = (error: Error, errorInfo: React.ErrorInfo) => {
  // Log to console in development
  if (import.meta.env.DEV) {
    console.error('Error tracked:', error, errorInfo)
  }

  // Send to error tracking service in production (e.g., Sentry)
  if (import.meta.env.PROD && window.gtag) {
    window.gtag('event', 'exception', {
      description: `${error.toString()}: ${errorInfo.componentStack}`,
      fatal: false,
    })
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
  </StrictMode>,
)
