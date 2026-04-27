import xxiiImage from '../../assets/S0119128.JPEG'
import { EXTERNAL_LINKS } from '../../constants/links'
import SafeIframe from '../common/SafeIframe'

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
              <SafeIframe
                className="spotify-embed spotify-embed-compact"
                src={EXTERNAL_LINKS.tracks.xxii.spotifyEmbed}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                title="Wendigo latest single on Spotify"
              />
            </div>

            <div className="embed-frame-wrap new-song-youtube-wrap">
              <div className="youtube-embed-wrap">
                <SafeIframe
                  className="youtube-embed"
                  src={EXTERNAL_LINKS.tracks.xxii.youtubeEmbed}
                  title="Wendigo video preview"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          <div className="new-song-video-embed">
            <div className="youtube-embed-wrap">
              <SafeIframe
                className="youtube-embed"
                src={EXTERNAL_LINKS.tracks.krakensbane.youtubeLiveEmbed}
                title="KRAKENSBANE LIVE AT CAMDEN ASSEMBLY"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
