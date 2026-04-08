export type LiveShow = {
  id: string
  dayLabel: string
  monthLabel: string
  venueLabel: string
  cityLabel: string
  countryLabel: string
  lineup: string[]
  ticketUrl: string
}

export const LIVE_SHOWS: LiveShow[] = [
  {
    id: 'victoria-dalston-2026-04-24',
    dayLabel: '24',
    monthLabel: 'Apr',
    venueLabel: 'The Victoria Dalston',
    cityLabel: 'London',
    countryLabel: 'UK',
    lineup: ['Laid Off', 'Jan Echo', 'Dude, My Dude', 'WENDIGO'],
    ticketUrl:
      'https://www.bandsintown.com/e/108209732-wendigo-at-the-victoria-dalston?came_from=251&utm_medium=web&utm_source=artist_page&utm_campaign=event',
  },
]
