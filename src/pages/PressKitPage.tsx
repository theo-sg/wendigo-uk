import PressKitLiveImage1 from '../assets/liveimage/DSC05223.jpg'
import PressKitLiveImage2 from '../assets/liveimage/DSC05485.jpg'
import PressKitLiveImage3 from '../assets/liveimage/DSC05537.jpg'
import PressKitLiveImage4 from '../assets/liveimage/DSC_0207 (1)-press.jpg'
import PressKitLiveImage5 from '../assets/liveimage/___DSC02367-press.jpg'
import PressKitLiveImage6 from '../assets/liveimage/___DSC02470-press.jpg'
import PressKitGalleryImage1 from '../assets/heroimage/_DSF0113-gallery.jpg'
import PressKitGalleryImage2 from '../assets/heroimage/_DSF9736-gallery.jpg'
import PressKitGalleryImage3 from '../assets/heroimage/_DSF9786-gallery.jpg'
import { EXTERNAL_LINKS } from '../constants/links'
import ExternalLink from '../components/common/ExternalLink'
import SEO from '../components/common/SEO'
import { SHOW_HISTORY } from '../constants/liveShows'

import PressKitMainImage from '../assets/liveimage/_DSF9775-press.jpg'

export default function PressKitPage() {
  return (
    <>
      <SEO
        title="Press Kit - Wendigo"
        description="Official press kit for Wendigo, alternative rock band from London. Includes bio, photos, videos, and contact information for press inquiries."
        image={PressKitMainImage}
        url="/press"
      />
      <section className="section home-anchor-section music-page-section press-kit-page-section">
      <div className="page-padding">
        <div className="container padding-top">
          <div className="press-kit-header">
            <h1 className="anchor-title">press kit</h1>
          </div>

          <div className="press-kit-main" aria-label="Press kit main image">
            <img alt="Wendigo press kit main image" className="press-kit-main-image" loading="lazy" decoding="async" src={PressKitMainImage} />
          </div>
          <p className="press-kit-copy">
            <b>wendigo</b> is a three piece alternative rock band from london, uk. our self-coined <b>‘di-gaze’</b> sound channels the rawness of grunge and alt rock and the sonic experimentation of shoegaze - pushing both to their absolute limits with a modern approach to production, coupled with energetic live performances. 
            
          </p>

          <div className="press-kit-live-gallery-continuation" aria-label="Additional Wendigo live photos">
            <div className="press-kit-live-strip" aria-label="Additional Wendigo live photos">
              <img alt="Wendigo live performance 4" className="press-kit-live-strip-image" loading="lazy" decoding="async" src={PressKitLiveImage4} />
              <img alt="Wendigo live performance 5" className="press-kit-live-strip-image" loading="lazy" decoding="async" src={PressKitLiveImage5} />
              <img alt="Wendigo live performance 6" className="press-kit-live-strip-image" loading="lazy" decoding="async" src={PressKitLiveImage6} />
            </div>

            <p className="press-kit-copy">
              we've built up momentum, with four singles released so far. <b><ExternalLink href={EXTERNAL_LINKS.tracks.xxii.spotify} target="_blank">XXII</ExternalLink></b>, <b><ExternalLink href={EXTERNAL_LINKS.tracks.krakensbane.spotify} target="_blank">KRAKENSBANE</ExternalLink></b>, and <b><ExternalLink href={EXTERNAL_LINKS.tracks.cologne.spotify} target="_blank">COLOGNE</ExternalLink></b> each hitting over one thousand streams in their first week of release, and our latest single <b><ExternalLink href={EXTERNAL_LINKS.tracks.tower.spotify} target="_blank">TOWER</ExternalLink></b>, a dark and explosive love song that channels Hozier's poetic lyricism with Cleopatrick's snarling guitar work, out at the end of june 2026, which reached 10k streams in just over a month.
              these releases, as well as two huge headline shows at <b><ExternalLink href={EXTERNAL_LINKS.instagramPosts.camdenAssembly} target="_blank">camden assembly</ExternalLink></b> on 5th march 2026, and <b><ExternalLink href={EXTERNAL_LINKS.instagramPosts.offTheCuff} target="_blank">off the cuff</ExternalLink></b> in brixton on 15th august 2025. these have gained us a growing fanbase and a wave of recognition from the press, with our <b><ExternalLink href={EXTERNAL_LINKS.press.voxwaveArticle} target="_blank">interview with voxwave for XXII</ExternalLink></b> being a particular highlight.
            </p>
            
          </div>

          <div className="press-kit-live-strip" aria-label="Wendigo live photos">
            <img alt="Wendigo live photo 1" className="press-kit-live-strip-image" loading="lazy" decoding="async" src={PressKitLiveImage1} />
            <img alt="Wendigo live photo 2" className="press-kit-live-strip-image" loading="lazy" decoding="async" src={PressKitLiveImage2} />
            <img alt="Wendigo live photo 3" className="press-kit-live-strip-image" loading="lazy" decoding="async" src={PressKitLiveImage3} />
          </div>

          

          <p className="press-kit-copy">
            our debut, four-track EP <b>FATE</b> is releasing on 26 november. recorded in january in birmingham, uk, <b>FATE</b> is a di-gaze statement of intent, consolidating our sound.
            lyrically drawing on themes of inevitability, coming-of-age, indifference, toxic masculinity and self-sabotage, it opens on the space-rock tinged track <b>CRESCENT MOON</b> and dissolves over 15 minutes into an evil and heavy finale with <b>ALL SEEING EYE</b>.
          </p>


          <div className="press-kit-gallery" aria-label="Press kit gallery">
            <img alt="Wendigo gallery image 1" className="press-kit-gallery-image" loading="lazy" decoding="async" src={PressKitGalleryImage1} />
            <img alt="Wendigo gallery image 2" className="press-kit-gallery-image" loading="lazy" decoding="async" src={PressKitGalleryImage2} />
            <img alt="Wendigo gallery image 3" className="press-kit-gallery-image" loading="lazy" decoding="async" src={PressKitGalleryImage3} />
          </div>

          <p className="press-kit-copy">
            wendigo started as a solo project by singer/guitarist and songwriter <b>theo stewart griffiths</b>, who has played across the uk in many bands on many instruments, from underground club shows, to regional tours. it has now evolved into a full band 
            with the addition of bassist <b>toby hawkings</b>, an active member of the west sussex arts, film, and music scene, and drummer <b>rhys caswell</b>, who works as a FOH engineer and audio technician, in addition to touring the uk with various bands. the three of us are united by a shared aesthetic vision for wendigo, and a desire to create music that pushes boundaries and connects with listeners on a deep and visceral level.

          <br /><br />
            credits to <a href="https://www.instagram.com/ethnephoto/">@ethnephoto</a> <a href="https://www.instagram.com/matt.exp2/">@matt.exp2</a> <a href="https://www.instagram.com/pollymoana.jpeg/">@pollymoana.jpeg</a> <a href="https://www.instagram.com/vikikovacsphotography/">@vikikovacsphotography</a> for photography + videography
          </p>

          <div className="press-kit-video-section" aria-label="Wendigo video">
            <div className="youtube-embed-wrap">
              <iframe
                className="youtube-embed"
                src={EXTERNAL_LINKS.tracks.krakensbane.youtubeLiveEmbed}
                title="KRAKENSBANE LIVE AT CAMDEN ASSEMBLY"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>



          <section className="press-kit-show-history" aria-label="Wendigo show history">
            <h2 className="anchor-title section-title-center">show history</h2>
            <div className="live-widget-card press-kit-live-history-card">
              <div className="live-grid" role="table" aria-label="previous live shows">
                {SHOW_HISTORY.map((show) => (
                  <div className="live-grid-row press-kit-history-row" role="row" key={show.id}>
                    <div className="live-col live-date" role="cell">
                      <span className="live-date-day">{show.dayLabel}</span>
                      <span className="live-date-meta">
                        <span className="live-date-month">{show.monthLabel}</span>
                        <span className="live-date-year">{show.yearLabel}</span>
                      </span>
                    </div>

                    <div className="live-col live-lineup" role="cell">
                      <span className="live-lineup-text">
                        <span className="live-headliner">{show.lineup[0]}</span>
                        {show.lineup.length > 1 ? (
                          <span className="live-lineup-support">supporting {show.lineup.slice(1).join(', ')}</span>
                        ) : (
                          <span className="live-lineup-support">headline show</span>
                        )}
                      </span>
                    </div>

                    <div className="live-col live-location" role="cell">
                      <span className="live-venue">{show.venueLabel}</span>
                      <span className="live-city">{show.cityLabel}, {show.countryLabel}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

        </div>
      </div>
    </section>
    </>
  )
}
