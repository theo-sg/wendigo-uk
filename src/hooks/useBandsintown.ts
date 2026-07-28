import { useEffect, useState } from 'react'
import type { LiveShow } from '../constants/liveShows'

interface BandsintownOffer {
  type?: string
  url?: string
  status?: string
}

interface BandsintownVenue {
  name?: string
  latitude?: number
  longitude?: number
  city?: string
  region?: string
  country?: string
  street_address?: string
  location?: string
}

interface BandsintownEvent {
  id: number | string
  artist_id?: number | string
  url?: string
  on_sale_datetime?: string
  datetime?: string
  starts_at?: string
  title?: string
  venue?: BandsintownVenue
  lineup?: string[]
  description?: string
  thumbnail_url?: string
  offers?: BandsintownOffer[]
}

const BANDSINTOWN_API_APP_ID = import.meta.env.VITE_BANDSINTOWN_APP_ID || 'wendigo_artist'
const ARTIST_ID = import.meta.env.VITE_BANDSINTOWN_ARTIST_ID || '15590407'

function formatArtistName(artist: string) {
  return artist
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

interface EventOverrides {
  venue?: string
  headliner?: string
  lineup?: string[]
}

const EVENT_OVERRIDES: Record<string, EventOverrides> = {
  '108656390': {
    venue: 'barfly, camden',
    headliner: 'Jam Merchants',
    lineup: ['Jam Merchants', 'wendigo'],
  },
  '108688201': {
    venue: 'the victoria, dalston',
    headliner: 'Bella Artois',
    lineup: ['Bella Artois', 'Jan Echo', 'MOMOTUSKAN', 'wendigo'],
  },
  '108707746' : {
    venue: 'new cross inn, new cross',
    headliner: 'Stepover',
    lineup: ['Stepover', 'wendigo', 'Goo'],
  },
}

function getEventOverrides(event: BandsintownEvent): EventOverrides {
  return EVENT_OVERRIDES[String(event.id)] ?? {}
}

function toEventDate(event: BandsintownEvent) {
  const rawDate = event.datetime || event.starts_at || ''
  return rawDate ? new Date(rawDate) : null
}

export function parseBandsintownEvents(events: BandsintownEvent[]): LiveShow[] {
  const now = Date.now()

  return events
    .map((event) => {
      const date = toEventDate(event)

      if (!date || Number.isNaN(date.getTime()) || date.getTime() < now) {
        return null
      }

      const lineup = (event.lineup ?? [])
        .map((artist) => artist.trim())
        .filter(Boolean)
        .map(formatArtistName)

      const ticketUrl = event.offers?.find((offer) => offer.url)?.url ?? event.url ?? ''
      const overrides = getEventOverrides(event)
      const manualVenue = overrides.venue ?? null
      const manualHeadliner = overrides.headliner ?? null
      const manualLineup = overrides.lineup?.map((artist) => artist.trim()).filter(Boolean)
      const resolvedLineup = manualLineup?.length
        ? manualLineup
        : manualHeadliner
          ? [manualHeadliner, ...lineup.filter((artist) => artist !== manualHeadliner)]
          : lineup

      return {
        show: {
          id: `event-${event.id}`,
          dayLabel: date.getDate().toString().padStart(2, '0'),
          monthLabel: date.toLocaleString('en-US', { month: 'short' }),
          yearLabel: date.getFullYear().toString(),
          venueLabel: manualVenue ?? event.venue?.name ?? 'TBC',
          cityLabel: event.venue?.city ?? 'TBC',
          countryLabel: event.venue?.country ?? 'TBC',
          lineup: resolvedLineup,
          ticketUrl,
        } as LiveShow,
        dateValue: date.getTime(),
      }
    })
    .filter((entry): entry is { show: LiveShow; dateValue: number } => entry !== null)
    .sort((left, right) => left.dateValue - right.dateValue)
    .map((entry) => entry.show)
}

export function useBandsintown() {
  const [shows, setShows] = useState<LiveShow[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchShows = async () => {
      try {
        setLoading(true)

        const listResponse = await fetch(
          `https://rest.bandsintown.com/artists/id_${encodeURIComponent(ARTIST_ID)}/events?app_id=${BANDSINTOWN_API_APP_ID}&date=upcoming`
        )

        if (!listResponse.ok) {
          throw new Error('Failed to fetch events from Bandsintown')
        }

        const summaryEvents: BandsintownEvent[] = await listResponse.json()
        const parsedShows = parseBandsintownEvents(summaryEvents)
        setShows(parsedShows.length > 0 ? parsedShows : [])
        setError(null)
      } catch (err) {
        console.error('Error fetching Bandsintown events:', err)
        setError(err instanceof Error ? err.message : 'An error occurred')
        setShows([])
      } finally {
        setLoading(false)
      }
    }

    fetchShows()
  }, [])

  return { shows, loading, error }
}
