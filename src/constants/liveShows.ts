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

export const LIVE_SHOWS: LiveShow[] = []

export const FALLBACK_LIVE_SHOWS: LiveShow[] = [
  {
    id: 'JAM-MERCHANTS-BARFLY-JULY-31-2026',
    dayLabel: '31',
    monthLabel: 'Jul',
    venueLabel: 'Barfly, Camden',
    cityLabel: 'London',
    countryLabel: 'UK',
    lineup: ['Jam Merchants', 'wendigo'],
    ticketUrl: 'http://www.eventbrite.co.uk/e/1991504616919/?discount=WENDIGO',
  },
]
