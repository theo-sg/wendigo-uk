export default function MusicPage() {
  return (
    <section className="section home-anchor-section music-page-section">
      <div className="page-padding">
        <div className="container padding-top">
          <h1 className="anchor-title">discography</h1>
          <p className="anchor-copy"></p>
          <div className="embed-frame-wrap">
            <iframe
              className="spotify-embed"
              src="https://open.spotify.com/embed/artist/192tykkkWwzLE5PiX3quDp?utm_source=generator"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Wendigo discography on Spotify"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
