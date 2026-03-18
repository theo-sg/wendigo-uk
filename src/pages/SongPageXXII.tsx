import { EXTERNAL_LINKS } from '../constants/links'
import { Link } from 'react-router-dom'

export default function SongPageXXII() {
  return (
    <section className="section home-anchor-section music-page-section song-page-section song-page-xxii">
      <div className="page-padding">
        <div className="container padding-top">
          <h1 className="anchor-title song-page-title-amador">xxii</h1>
          <Link className="song-back-link" to="/">back to home</Link>
          <p className="song-page-intro-copy">stream the song and watch the video below.</p>

          <div className="song-page-media-stack">
            <div className="embed-frame-wrap song-page-spotify-wrap">
              <iframe
                className="spotify-embed spotify-embed-compact"
                src={EXTERNAL_LINKS.tracks.xxii.spotifyEmbed}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="XXII on Spotify"
              />
            </div>

            <div className="embed-frame-wrap song-page-youtube-wrap">
              <div className="youtube-embed-wrap">
                <iframe
                  className="youtube-embed"
                  src={EXTERNAL_LINKS.tracks.xxii.youtubeEmbed}
                  title="XXII official video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="embed-frame-wrap song-page-bandcamp-wrap">
              <iframe
                className="song-bandcamp-embed"
                src={EXTERNAL_LINKS.tracks.xxii.bandcampEmbed}
                title="XXII on Bandcamp"
                seamless
              >
                <a href={EXTERNAL_LINKS.tracks.xxii.bandcamp}>XXII by wendigo</a>
              </iframe>
            </div>
          </div>

          <div className="song-lyrics-section">
            <h2 className="song-lyrics-title">lyrics</h2>
            <div className="song-lyrics-box">
              <p>
                the first time I understood it <br />
                bated breath and curses under blackened trees, baby please <br />
                yeah <br />
                <br />
                oh oh, oh oh <br />
                i’m sick, i’m sick, i’m sick <br />
                <br />
                just a pat on my back then <br />
                ‘good job, great work, a man now’ whatever that means <br />
                is nothing sacred anymore? <br />
                it was worth it, right? right? <br />
                learn to hate it like a father hates his son <br />
                golden boy who can do no wrong <br /> 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
