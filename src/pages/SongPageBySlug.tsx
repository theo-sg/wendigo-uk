import { Navigate, Link, useParams } from 'react-router-dom'
import ExternalLink from '../components/common/ExternalLink'
import SafeIframe from '../components/common/SafeIframe'
import SEO from '../components/common/SEO'
import { MusicRecordingStructuredData } from '../components/common/StructuredData'
import { getSongBySlug } from '../constants/songs'

export default function SongPageBySlug() {
  const { slug } = useParams()

  if (!slug) {
    return <Navigate to="/" replace />
  }

  const song = getSongBySlug(slug)

  if (!song) {
    return <Navigate to="/" replace />
  }
  const hasSpotify = Boolean(song.spotifyEmbed)
  const hasYoutube = Boolean(song.youtubeEmbeds?.length)
  const hasBandcamp = Boolean(song.bandcampEmbed || song.bandcampUrl)
  const hasLyrics = Boolean(song.lyrics)

  return (
    <>
      <SEO
        title={`${song.title} - Wendigo`}
        description={hasLyrics ? `Listen to ${song.title} by Wendigo. Stream on Spotify, watch the official video, and read lyrics.` : `View the ${song.title} page by Wendigo. Details and media will be added soon.`}
        image={song.cover}
        url={`/music/${slug}`}
        type="music.song"
      />
      {hasLyrics ? <MusicRecordingStructuredData song={song} /> : null}
      <section className={`section home-anchor-section music-page-section song-page-section ${song.themeClassName}`}>
        <div className="page-padding">
          <div className="container padding-top">
            <h1 className="anchor-title song-page-title-amador">{song.title}</h1>
            <Link className="song-back-link" to="/">
              back to home
            </Link>
            <p className="song-page-intro-copy">
              {hasSpotify || hasYoutube || hasBandcamp || hasLyrics
                ? 'stream the song and watch the video below.'
                : 'track details coming soon.'}
            </p>

            <div className="song-page-media-stack">
              {hasSpotify ? (
                <div className="embed-frame-wrap song-page-spotify-wrap">
                  <SafeIframe
                    className="spotify-embed spotify-embed-compact"
                    src={song.spotifyEmbed}
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    title={`${song.title} on Spotify`}
                  />
                </div>
              ) : null}

              {hasYoutube ? song.youtubeEmbeds!.map((video) => (
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
              )) : null}

              {hasBandcamp ? (
                <div className="embed-frame-wrap song-page-bandcamp-wrap">
                  <SafeIframe
                    className="song-bandcamp-embed"
                    src={song.bandcampEmbed}
                    title={`${song.title} on Bandcamp`}
                  />
                  <p className="song-bandcamp-fallback">
                    <ExternalLink href={song.bandcampUrl!} target="_blank">
                      open on bandcamp
                    </ExternalLink>
                  </p>
                </div>
              ) : null}
            </div>

            {hasLyrics ? (
              <div className="song-lyrics-section">
                <h2 className="song-lyrics-title">lyrics</h2>
                <div className="song-lyrics-box">
                  <p className="song-lyrics-text">{song.lyrics}</p>
                </div>
              </div>
            ) : (
              <div className="song-lyrics-section">
                <h2 className="song-lyrics-title">details</h2>
                <div className="song-lyrics-box">
                  <p className="song-lyrics-text">this page is reserved for a future song. add the track details and lyrics when you’re ready.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
