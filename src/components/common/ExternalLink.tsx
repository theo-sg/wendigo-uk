import type { AnchorHTMLAttributes, ReactNode } from 'react'

type ExternalLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  href: string
  children: ReactNode
}

function mergeRel(existingRel: string | undefined, extraRelTokens: string[]) {
  const relTokens = new Set((existingRel || '').split(/\s+/).filter(Boolean))

  extraRelTokens.forEach((token) => {
    relTokens.add(token)
  })

  return Array.from(relTokens).join(' ')
}

export default function ExternalLink({ target, rel, children, ...rest }: ExternalLinkProps) {
  const opensNewTab = target === '_blank'
  const safeRel = opensNewTab ? mergeRel(rel, ['noopener', 'noreferrer']) : rel

  return (
    <a {...rest} target={target} rel={safeRel}>
      {children}
    </a>
  )
}
