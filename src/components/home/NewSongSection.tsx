import towerImage from '../../assets/many hands tower.jpg'
import SafeIframe from '../common/SafeIframe'
import { EXTERNAL_LINKS } from '../../constants/links'

const TOWER_SPOTIFY_EMBED = EXTERNAL_LINKS.tracks.tower.spotifyEmbed

export default function NewSongSection() {
  return (
    <section className="section new-song-section">
      <div className="page-padding">
        <div className="container padding-top">
          <div className="new-song-visual">
            <img
              alt="Wendigo Tower promo artwork."
              className="new-song-photo"
              loading="lazy"
              src={towerImage}
            />
            <h2 className="new-song-title">
              <span className="new-song-title-main">tower</span>
              <span className="new-song-title-sub">out now</span>
            </h2>

            <div className="embed-frame-wrap song-page-spotify-wrap">
              <SafeIframe
                className="spotify-embed spotify-embed-compact"
                src={TOWER_SPOTIFY_EMBED}
                title="Tower on Spotify"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              />
            </div>

            <div className="embed-frame-wrap new-song-instagram-wrap">
              <div className="youtube-embed-wrap tower-preview-wrap">
                <SafeIframe
                  className="youtube-embed"
                  src={EXTERNAL_LINKS.tracks.tower.youtubeEmbed}
                  title="Tower official music video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
