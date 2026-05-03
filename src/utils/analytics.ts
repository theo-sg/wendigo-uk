/**
 * Google Analytics initialization and tracking
 * Usage: initializeAnalytics() in main.tsx
 */

export type AnalyticsConfig = {
  measurementId: string
  enabled: boolean
}

export function initializeAnalytics(config: AnalyticsConfig) {
  if (!config.enabled || typeof window === 'undefined') {
    return
  }

  // Load Google Analytics script
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${config.measurementId}`
  document.head.appendChild(script)

  // Initialize gtag
  window.dataLayer = window.dataLayer || []
  function gtag(..._args: unknown[]) {
    window.dataLayer?.push(arguments)
  }
  gtag('js', new Date())
  gtag('config', config.measurementId, {
    page_path: window.location.pathname,
    anonymize_ip: true,
  })

  // Store gtag function globally
  window.gtag = gtag
}

export function trackPageView(path: string, title: string) {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID
  if (typeof window !== 'undefined' && window.gtag && measurementId) {
    window.gtag('config', measurementId, {
      page_path: path,
      page_title: title,
    })
  }
}

export function trackEvent(eventName: string, eventParams?: Record<string, string | number>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams)
  }
}

// Extend window interface
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}
