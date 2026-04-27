export const NAV_ITEMS = [
  { id: 'live', label: 'live', href: '/#live' },
  { id: 'merch', label: 'merch', href: '/#merch' },
  { id: 'music', label: 'music', href: '/#music' },
  { id: 'video', label: 'video', href: '/#video' },
  { id: 'news', label: 'news', href: '/#news' },
] as const

export type NavItem = (typeof NAV_ITEMS)[number]
