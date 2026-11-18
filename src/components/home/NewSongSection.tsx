import fateLogo from '../../assets/release/fate-logo.png'
import fateCoverBackground from '../../assets/release/fate-cover-background.jpg'
import fatePreviewGif from '../../assets/release/fate-preview.gif'
import ExternalLink from '../common/ExternalLink'

const PRESAVE_URL = 'https://distrokid.com/hyperfollow/wendigo13/fate?ref=release'

export default function NewSongSection() {
  return (
    <section className="section new-song-section">
      <div className="page-padding">
        <div className="container padding-top">
          <div className="new-song-visual">
            <div className="new-song-header">
              <img
                alt="Wendigo FATE EP"
                className="new-song-logo"
                loading="eager"
                src={fateLogo}
              />
              <p><b>our debut EP, out november twenty sixth.</b></p>
            </div>

            <div
              className="new-song-cover"
              style={{ backgroundImage: `url(${fateCoverBackground})` }}
            >
              <img
                alt="FATE EP preview"
                className="new-song-gif"
                loading="eager"
                src={fatePreviewGif}
              />

              <ExternalLink
                className="merch-product-button new-song-presave"
                href={PRESAVE_URL}
                target="_blank"
                aria-label="Presave FATE on your preferred music platform"
              >
                presave now
              </ExternalLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
