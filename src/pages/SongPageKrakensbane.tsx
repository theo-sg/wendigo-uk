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
                src="https://open.spotify.com/embed/track/2D0VTDX74gfaY4SJ8Txal3?utm_source=generator&theme=0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Krakensbane on Spotify"
              />
            </div>

            <div className="embed-frame-wrap song-page-youtube-wrap">
              <div className="youtube-embed-wrap">
                <iframe
                  className="youtube-embed"
                  src="https://www.youtube.com/embed/6UwWjaHzBnw"
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
                  src="https://www.youtube.com/embed/7m4SaaN7rzk"
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
                src="https://bandcamp.com/EmbeddedPlayer/v=2/track=4285040030/size=large/bgcol=0b0b0b/linkcol=ffffff/tracklist=false/artwork=small/"
                title="Krakensbane on Bandcamp"
                seamless
              >
                <a href="https://wendigo-uk.bandcamp.com/track/krakensbane">Krakensbane by wendigo</a>
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
