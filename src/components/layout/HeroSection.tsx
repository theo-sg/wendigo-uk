import type { MouseEvent } from 'react'
import heroImage from '../../assets/heroimage/_DSF9736.jpg'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/logo/logo.svg'
import { NAV_ITEMS, type NavItem } from '../../constants/navigation'

type HeroSectionProps = {
  activeNavId?: NavItem['id']
}

export default function HeroSection({ activeNavId }: HeroSectionProps) {
  const location = useLocation()

  const handleInternalNavClick = (event: MouseEvent, targetHref: string) => {
    const targetUrl = new URL(targetHref, window.location.origin)
    const normalizedCurrentPath = location.pathname.replace(/\/+$/, '') || '/'
    const normalizedTargetPath = targetUrl.pathname.replace(/\/+$/, '') || '/'
    const currentHash = location.hash || ''
    const targetHash = targetUrl.hash || ''

    if (normalizedCurrentPath !== normalizedTargetPath || currentHash !== targetHash) {
      return
    }

    event.preventDefault()

    if (!targetHash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
      return
    }

    const targetId = decodeURIComponent(targetHash.slice(1))
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      const blockAlignment = targetId.toLowerCase() === 'news' ? 'start' : 'center'
      targetElement.scrollIntoView({ behavior: 'smooth', block: blockAlignment })
    }
  }

  return (
    <section className="section hero-section">
      <div className="hero_main">
        <div className="hero-bg-image-wrap">
          <img alt="wendigo" className="hero-bg-image" loading="eager" sizes="(max-width: 2778px) 100vw, 2778px" src={heroImage} />
        </div>
        <Link
          aria-label="Go to homepage"
          className="hero-logo-link"
          to="/"
          onClick={(event) => handleInternalNavClick(event, '/')}
        >
          <img alt="Logo" className="hero-logo" src={logo} />
        </Link>
      </div>
      <nav className="hero-navbar" aria-label="Main">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.id}
            className={`hero-nav-link${item.id === activeNavId ? ' is-active' : ''}`}
            to={item.href}
            onClick={(event) => handleInternalNavClick(event, item.href)}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </section>
  )
}
