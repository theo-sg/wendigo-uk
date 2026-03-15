import { EXTERNAL_LINKS } from '../constants/links'

export default function SongPageKrakensbane() {
  return (
    <section className="section home-anchor-section music-page-section song-page-section">
      <div className="page-padding">
        <div className="container padding-top">
          <h1 className="anchor-title song-page-title-amador">krakensbane</h1>
          <a className="song-back-link" href="/">back to home</a>
          <p className="song-page-intro-copy">stream the song and watch the video below.</p>

          <div className="song-page-media-stack">
            <div className="embed-frame-wrap song-page-spotify-wrap">
              <iframe
                className="spotify-embed spotify-embed-compact"
                src={EXTERNAL_LINKS.tracks.krakensbane.spotifyEmbed}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Krakensbane on Spotify"
              />
            </div>

            <div className="embed-frame-wrap song-page-youtube-wrap">
              <div className="youtube-embed-wrap">
                <iframe
                  className="youtube-embed"
                  src={EXTERNAL_LINKS.tracks.krakensbane.youtubeEmbed}
                  title="Krakensbane video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="embed-frame-wrap song-page-youtube-wrap">
              <div className="youtube-embed-wrap">
                <iframe
                  className="youtube-embed"
                  src={EXTERNAL_LINKS.tracks.krakensbane.youtubeLiveEmbed}
                  title="Krakensbane video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="embed-frame-wrap song-page-bandcamp-wrap">
              <iframe
                className="song-bandcamp-embed"
                src={EXTERNAL_LINKS.tracks.krakensbane.bandcampEmbed}
                title="Krakensbane on Bandcamp"
                seamless
              >
                <a href={EXTERNAL_LINKS.tracks.krakensbane.bandcamp}>Krakensbane by wendigo</a>
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
