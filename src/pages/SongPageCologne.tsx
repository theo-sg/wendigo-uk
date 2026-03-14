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
                src="https://open.spotify.com/embed/track/4Gjr70aFJj9fSkjMiwyO8J?utm_source=generator&theme=0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Cologne on Spotify"
              />
            </div>

            <div className="embed-frame-wrap song-page-youtube-wrap">
              <div className="youtube-embed-wrap">
                <iframe
                  className="youtube-embed"
                  src="https://www.youtube.com/embed/4UlLylL1jbc"
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
                src="https://bandcamp.com/EmbeddedPlayer/v=2/track=2344788709/size=large/bgcol=0b0b0b/linkcol=ffffff/tracklist=false/artwork=small/"
                title="Cologne on Bandcamp"
                seamless
              >
                <a href="https://wendigo-uk.bandcamp.com/track/cologne">Cologne by wendigo</a>
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
