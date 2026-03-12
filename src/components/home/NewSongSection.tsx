import xxiiImage from '../../assets/S0119128.JPEG'

export default function NewSongSection() {
  return (
    <section className="section new-song-section">
      <div className="page-padding">
        <div className="container padding-top">
          <div className="new-song-visual">
            <img
              alt="Wendigo promo portrait in dark tones."
              className="new-song-photo"
              loading="lazy"
              src={xxiiImage}
            />
            <h2 className="new-song-title">
              <span className="new-song-title-main">xxii</span>
              <span className="new-song-title-sub">is nothing sacred anymore?</span>
            </h2>
            <div className="embed-frame-wrap new-song-embed-wrap">
              <iframe
                className="spotify-embed spotify-embed-compact"
                src="https://open.spotify.com/embed/track/6ZFQFPBkSi6qdJTUIaqan0?utm_source=generator&theme=0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Wendigo latest single on Spotify"
              />
            </div>

            <div className="embed-frame-wrap new-song-youtube-wrap">
              <div className="youtube-embed-wrap">
                <iframe
                  className="youtube-embed"
                  src="https://www.youtube.com/embed/VgJuSft0uD0"
                  title="Wendigo video preview"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
