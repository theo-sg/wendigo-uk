import heroImage from '../../assets/heroimage/_DSF9736.jpg'
import logo from '../../assets/logo/logo.svg'
import { NAV_ITEMS, type NavItem } from '../../constants/navigation'

type HeroSectionProps = {
  activeNavId?: NavItem['id']
  getNavHref: (item: NavItem) => string
}

export default function HeroSection({ activeNavId, getNavHref }: HeroSectionProps) {
  return (
    <section className="section hero-section">
      <div className="hero_main">
        <div className="hero-bg-image-wrap">
          <img alt="wendigo" className="hero-bg-image" loading="eager" sizes="(max-width: 2778px) 100vw, 2778px" src={heroImage} />
        </div>
        <a aria-label="Go to homepage" className="hero-logo-link" href="/">
          <img alt="Logo" className="hero-logo" src={logo} />
        </a>
      </div>
      <nav className="hero-navbar" aria-label="Main">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            className={`hero-nav-link${item.id === activeNavId ? ' is-active' : ''}`}
            href={getNavHref(item)}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </section>
  )
}
