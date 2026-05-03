import { Link } from 'react-router-dom'
import SEO from '../components/common/SEO'

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="Page Not Found - Wendigo"
        description="The page you're looking for doesn't exist."
        url="/404"
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          backgroundColor: '#000000',
          color: '#ffffff',
          fontFamily: '"Helvetica Neue", sans-serif',
          padding: '20px',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '4rem', fontWeight: 'bold', margin: '0 0 1rem 0' }}>404</h1>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#cccccc', fontWeight: 'normal' }}>
          Page Not Found
        </h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#999999', maxWidth: '500px' }}>
          The page you're looking for doesn't exist. Let's get you back on track.
        </p>
        <Link
          to="/"
          style={{
            padding: '12px 32px',
            fontSize: '1rem',
            backgroundColor: '#ffffff',
            color: '#000000',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
            textDecoration: 'none',
            display: 'inline-block',
            transition: 'opacity 0.2s',
          }}
          onMouseOver={(e) => (e.currentTarget.style.opacity = '0.8')}
          onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
        >
          Back to Home
        </Link>
      </div>
    </>
  )
}
