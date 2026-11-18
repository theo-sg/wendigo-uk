export type LiveShow = {
  id: string
  dayLabel: string
  monthLabel: string
  yearLabel: string
  venueLabel: string
  cityLabel: string
  countryLabel: string
  lineup: string[]
  ticketUrl: string
}

export const LIVE_SHOWS: LiveShow[] = []

export type ShowHistory = {
  id: string
  dayLabel: string
  monthLabel: string
  yearLabel: string
  venueLabel: string
  cityLabel: string
  countryLabel: string
  lineup: string[]
}

export const SHOW_HISTORY: ShowHistory[] = [
  {
    id: 'nxi-2026-09-22',
    dayLabel: '22',
    monthLabel: 'sep',
    yearLabel: '2026',
    venueLabel: 'new cross inn',
    cityLabel: 'new cross, london',
    countryLabel: 'uk',
    lineup: ['wendigo', 'Stepover'],
  },
  {
    id: 'rossi-bar-2026-09-08',
    dayLabel: '08',
    monthLabel: 'sep',
    yearLabel: '2026',
    venueLabel: 'rossi bar',
    cityLabel: 'brighton',
    countryLabel: 'uk',
    lineup: ['wendigo', 'Long Suffering Wife'],
  },
  {
    id: 'victoria-dalston-2026-08-07',
    dayLabel: '07',
    monthLabel: 'aug',
    yearLabel: '2026',
    venueLabel: 'the victoria',
    cityLabel: 'dalston, london',
    countryLabel: 'uk',
    lineup: ['wendigo', 'Jan Echo', 'Bella Artois'],
  },
  {
    id: 'barfly-2026-07-31',
    dayLabel: '31',
    monthLabel: 'jul',
    yearLabel: '2026',
    venueLabel: 'barfly',
    cityLabel: 'camden, london',
    countryLabel: 'uk',
    lineup: ['wendigo', 'Jam Merchants'],
  },
  {
    id: 'victoria-dalston-2026-04-24',
    dayLabel: '24',
    monthLabel: 'apr',
    yearLabel: '2026',
    venueLabel: 'the victoria',
    cityLabel: 'dalston, london',
    countryLabel: 'uk',
    lineup: ['wendigo', 'Jan Echo', 'Laid Off'],
  },
  {
    id: 'camden-assembly-2026-03-05',
    dayLabel: '05',
    monthLabel: 'mar',
    yearLabel: '2026',
    venueLabel: 'camden assembly',
    cityLabel: 'camden, london',
    countryLabel: 'uk',
    lineup: ['wendigo'],
  },
  {
    id: 'off-the-cuff-2025-08-15',
    dayLabel: '15',
    monthLabel: 'aug',
    yearLabel: '2025',
    venueLabel: 'off the cuff',
    cityLabel: 'brixton, london',
    countryLabel: 'uk',
    lineup: ['wendigo'],
  },
  {
    id: 'wickfest-2025-06-15',
    dayLabel: '15',
    monthLabel: 'jun',
    yearLabel: '2025',
    venueLabel: 'wickfest',
    cityLabel: 'uow, coventry',
    countryLabel: 'uk',
    lineup: ['wendigo', 'uow'],
  },
  {
    id: 'the-dark-horse-2025-02-08',
    dayLabel: '08',
    monthLabel: 'feb',
    yearLabel: '2025',
    venueLabel: 'the dark horse',
    cityLabel: 'birmingham',
    countryLabel: 'uk',
    lineup: ['wendigo', 'My Last Dxchess'],
  },
  {
    id: 'the-rainbow-2025-01-17',
    dayLabel: '17',
    monthLabel: 'jan',
    yearLabel: '2025',
    venueLabel: 'the rainbow',
    cityLabel: 'birmingham',
    countryLabel: 'uk',
    lineup: ['wendigo'],
  },
]
