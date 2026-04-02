import { Navigate, Link, useParams } from 'react-router-dom'
import ExternalLink from '../components/common/ExternalLink'
import SafeIframe from '../components/common/SafeIframe'
import { SONGS, type SongSlug } from '../constants/songs'

export default function SongPageBySlug() {
  const { slug } = useParams<{ slug: SongSlug }>()

  if (!slug || !(slug in SONGS)) {
    return <Navigate to="/" replace />
  }

  const song = SONGS[slug as SongSlug]

  return (
    <section className={`section home-anchor-section music-page-section song-page-section ${song.themeClassName}`}>
      <div className="page-padding">
        <div className="container padding-top">
          <h1 className="anchor-title song-page-title-amador">{song.title}</h1>
          <Link className="song-back-link" to="/">
            back to home
          </Link>
          <p className="song-page-intro-copy">stream the song and watch the video below.</p>

          <div className="song-page-media-stack">
            <div className="embed-frame-wrap song-page-spotify-wrap">
              <SafeIframe
                className="spotify-embed spotify-embed-compact"
                src={song.spotifyEmbed}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                title={`${song.title} on Spotify`}
              />
            </div>

            {song.youtubeEmbeds.map((video) => (
              <div key={video.src} className="embed-frame-wrap song-page-youtube-wrap">
                <div className="youtube-embed-wrap">
                  <SafeIframe
                    className="youtube-embed"
                    src={video.src}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}

            <div className="embed-frame-wrap song-page-bandcamp-wrap">
              <SafeIframe
                className="song-bandcamp-embed"
                src={song.bandcampEmbed}
                title={`${song.title} on Bandcamp`}
              />
              <p className="song-bandcamp-fallback">
                <ExternalLink href={song.bandcampUrl} target="_blank">
                  open on bandcamp
                </ExternalLink>
              </p>
            </div>
          </div>

          <div className="song-lyrics-section">
            <h2 className="song-lyrics-title">lyrics</h2>
            <div className="song-lyrics-box">
              <p className="song-lyrics-text">{song.lyrics}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
