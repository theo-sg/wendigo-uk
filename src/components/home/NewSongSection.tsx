import towerImage from '../../assets/many hands tower.jpg'
import SafeIframe from '../common/SafeIframe'

const TOWER_PRESAVE_URL = 'https://ffm.to/zok6aym'
const TOWER_INSTAGRAM_EMBED_URL = 'https://www.instagram.com/p/DZ44boPNHZY/embed'

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
            </h2>

            <a
              className="new-song-presave-link"
              href={TOWER_PRESAVE_URL}
              rel="noreferrer"
              target="_blank"
            >
              out june 30 - presave here
            </a>

            <div className="embed-frame-wrap new-song-instagram-wrap">
              <div className="instagram-embed-wrap">
                <SafeIframe
                  className="instagram-embed"
                  src={TOWER_INSTAGRAM_EMBED_URL}
                  title="Wendigo Tower Instagram post"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
