import type { ReactNode } from 'react'
import FooterSection from './FooterSection'
import HeroSection from './HeroSection'

type PageShellProps = {
  children: ReactNode
  includeHero?: boolean
  includeFooter?: boolean
}

export default function PageShell({ children, includeHero = false, includeFooter = false }: PageShellProps) {
  return (
    <div className="page-wrapper">
      {includeHero ? <HeroSection /> : null}
      {children}
      {includeFooter ? <FooterSection /> : null}
    </div>
  )
}
