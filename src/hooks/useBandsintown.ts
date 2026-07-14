import { useEffect, useState } from 'react'
import type { LiveShow } from '../constants/liveShows'
import { FALLBACK_LIVE_SHOWS } from '../constants/liveShows'

interface BandsinownEvent {
  id: number
  artist_id: number
  url: string
  on_sale_datetime: string
  datetime: string
  title: string
  venue: {
    name: string
    latitude: number
    longitude: number
    city: string
    region: string
    country: string
  }
  lineup: string[]
  description: string
  thumbnail_url: string
}

const BANDSINTOWN_API_APP_ID = import.meta.env.VITE_BANDSINTOWN_APP_ID || 'wendigo_artist'
const ARTIST_NAME = 'wendigo'

export function useBandsintown() {
  const [shows, setShows] = useState<LiveShow[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchShows = async () => {
      try {
        setLoading(true)
        const response = await fetch(
          `https://rest.bandsintown.com/artists/${ARTIST_NAME}/events?app_id=${BANDSINTOWN_API_APP_ID}`
        )

        if (!response.ok) {
          throw new Error('Failed to fetch events from Bandsintown')
        }

        const data: BandsinownEvent[] = await response.json()

        // Parse Bandsintown events into LiveShow format
        const parsedShows = data.map((event) => {
          const date = new Date(event.datetime)
          const dayLabel = date.getDate().toString().padStart(2, '0')
          const monthLabel = date.toLocaleString('en-US', { month: 'short' })

          return {
            id: `event-${event.id}`,
            dayLabel,
            monthLabel,
            venueLabel: event.venue.name,
            cityLabel: event.venue.city,
            countryLabel: event.venue.country,
            lineup: event.lineup.map((artist) =>
              artist
                .split(' ')
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')
            ),
            ticketUrl: event.url,
          } as LiveShow
        })

        setShows(parsedShows.length > 0 ? parsedShows : FALLBACK_LIVE_SHOWS)
        setError(null)
      } catch (err) {
        console.error('Error fetching Bandsintown events:', err)
        setError(err instanceof Error ? err.message : 'An error occurred')
        setShows(FALLBACK_LIVE_SHOWS)
      } finally {
        setLoading(false)
      }
    }

    fetchShows()
  }, [])

  return { shows, loading, error }
}
