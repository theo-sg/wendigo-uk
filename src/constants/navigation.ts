export const NAV_ITEMS = [
  { id: 'live', label: 'live', href: '/#live' },
  { id: 'music', label: 'music', href: '/music#music' },
  { id: 'merch', label: 'merch', href: '/#merch' },
  { id: 'news', label: 'news', href: '/#news' },
] as const

export type NavItem = (typeof NAV_ITEMS)[number]
