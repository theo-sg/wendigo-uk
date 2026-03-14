export const NAV_ITEMS = [
  { id: 'live', label: 'live', homeHref: '#live', musicHref: '/#live' },
  { id: 'music', label: 'music', homeHref: '/music#music', musicHref: '/music#music' },
  { id: 'merch', label: 'merch', homeHref: '#merch', musicHref: '/#merch' },
  { id: 'news', label: 'news', homeHref: '#news', musicHref: '/#news' },
] as const

export type NavItem = (typeof NAV_ITEMS)[number]
