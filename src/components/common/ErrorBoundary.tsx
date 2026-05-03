import type { ReactNode } from 'react'
import { Component } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
    // Send to error tracking service here (e.g., Sentry)
    if (typeof window !== 'undefined' && window.__trackError) {
      window.__trackError(error, errorInfo)
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null })
    window.location.href = '/'
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            backgroundColor: '#000000',
            color: '#ffffff',
            fontFamily: 'sans-serif',
            padding: '20px',
            textAlign: 'center',
          }}
        >
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Something went wrong</h1>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#cccccc' }}>
            We encountered an unexpected error. Please try refreshing the page.
          </p>
          {import.meta.env.DEV && this.state.error && (
            <details
              style={{
                maxWidth: '600px',
                marginBottom: '2rem',
                padding: '1rem',
                backgroundColor: '#1a1a1a',
                borderRadius: '8px',
                textAlign: 'left',
              }}
            >
              <summary style={{ cursor: 'pointer', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                Error details (development only)
              </summary>
              <pre
                style={{
                  overflow: 'auto',
                  fontSize: '0.85rem',
                  color: '#ff6b6b',
                  margin: 0,
                }}
              >
                {this.state.error.toString()}
              </pre>
            </details>
          )}
          <button
            onClick={this.handleReset}
            style={{
              padding: '12px 24px',
              fontSize: '1rem',
              backgroundColor: '#ffffff',
              color: '#000000',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'opacity 0.2s',
            }}
            onMouseOver={(e) => (e.currentTarget.style.opacity = '0.8')}
            onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Return to home
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

// Extend window to support error tracking
declare global {
  interface Window {
    __trackError?: (error: Error, errorInfo: React.ErrorInfo) => void
  }
}
