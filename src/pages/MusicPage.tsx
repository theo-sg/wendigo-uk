export default function MusicPage() {
  return (
    <section className="section home-anchor-section music-page-section">
      <div className="page-padding">
        <div className="container padding-top">
          <h1 className="anchor-title">music</h1>
          <p className="anchor-copy"></p>

          <div className="music-song-links" aria-label="Song pages">
            <a className="music-song-link" href="/music/a">A</a>
            <a className="music-song-link" href="/music/b">B</a>
            <a className="music-song-link" href="/music/c">C</a>
          </div>

          <div className="embed-frame-wrap">
            <iframe
              className="spotify-embed"
              src="https://open.spotify.com/embed/artist/192tykkkWwzLE5PiX3quDp?utm_source=generator"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Wendigo music on Spotify"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
