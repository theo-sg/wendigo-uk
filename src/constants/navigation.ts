export const NAV_ITEMS = [
  { id: 'live', label: 'live', homeHref: '#live', musicHref: '/#live' },
  { id: 'music', label: 'music', homeHref: '/music', musicHref: '/music' },
  { id: 'merch', label: 'merch', homeHref: '#merch', musicHref: '/#merch' },
] as const

export type NavItem = (typeof NAV_ITEMS)[number]
