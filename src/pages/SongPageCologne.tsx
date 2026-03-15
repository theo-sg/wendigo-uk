import { EXTERNAL_LINKS } from '../constants/links'

export default function SongPageCologne() {
  return (
    <section className="section home-anchor-section music-page-section song-page-section">
      <div className="page-padding">
        <div className="container padding-top">
          <h1 className="anchor-title song-page-title-amador">cologne</h1>
          <a className="song-back-link" href="/">back to home</a>
          <p className="song-page-intro-copy">stream the song and watch the video below.</p>

          <div className="song-page-media-stack">
            <div className="embed-frame-wrap song-page-spotify-wrap">
              <iframe
                className="spotify-embed spotify-embed-compact"
                src={EXTERNAL_LINKS.tracks.cologne.spotifyEmbed}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Cologne on Spotify"
              />
            </div>

            <div className="embed-frame-wrap song-page-youtube-wrap">
              <div className="youtube-embed-wrap">
                <iframe
                  className="youtube-embed"
                  src={EXTERNAL_LINKS.tracks.cologne.youtubeEmbed}
                  title="Cologne video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="embed-frame-wrap song-page-bandcamp-wrap">
              <iframe
                className="song-bandcamp-embed"
                src={EXTERNAL_LINKS.tracks.cologne.bandcampEmbed}
                title="Cologne on Bandcamp"
                seamless
              >
                <a href={EXTERNAL_LINKS.tracks.cologne.bandcamp}>Cologne by wendigo</a>
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
