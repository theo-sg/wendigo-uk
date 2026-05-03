import { Helmet } from 'react-helmet-async'
import type { SongPageData } from '../../constants/songs'
import type { LiveShow } from '../../constants/liveShows'

type MusicRecordingSchema = {
  "@context": "https://schema.org"
  "@type": "MusicRecording"
  name: string
  byArtist: {
    "@type": "MusicGroup"
    name: "Wendigo"
  }
  url: string
  image: string
  datePublished: string
  genre: string[]
}

type EventSchema = {
  "@context": "https://schema.org"
  "@type": "MusicEvent"
  name: string
  startDate: string
  location: {
    "@type": "Place"
    name: string
    address: {
      "@type": "PostalAddress"
      addressLocality: string
      addressCountry: string
    }
  }
  performer: {
    "@type": "MusicGroup"
    name: "Wendigo"
  }
}

export function MusicRecordingStructuredData({ song }: { song: SongPageData }) {
  const schema: MusicRecordingSchema = {
    "@context": "https://schema.org",
    "@type": "MusicRecording",
    name: song.title,
    byArtist: {
      "@type": "MusicGroup",
      name: "Wendigo"
    },
    url: `https://wendigo.uk/music/${song.slug}`,
    image: song.cover,
    datePublished: "2024", // Update with actual release date
    genre: ["Rock", "Alternative"]
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  )
}

export function EventStructuredData({ show }: { show: LiveShow }) {
  const schema: EventSchema = {
    "@context": "https://schema.org",
    "@type": "MusicEvent",
    name: `Wendigo at ${show.venueLabel}`,
    startDate: `2026-04-${show.dayLabel}`, // Format properly
    location: {
      "@type": "Place",
      name: show.venueLabel,
      address: {
        "@type": "PostalAddress",
        addressLocality: show.cityLabel,
        addressCountry: show.countryLabel
      }
    },
    performer: {
      "@type": "MusicGroup",
      name: "Wendigo"
    }
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  )
}