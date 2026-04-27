import PressKitLiveImage1 from '../assets/liveimage/DSC05223.jpg'
import PressKitLiveImage2 from '../assets/liveimage/DSC05485.jpg'
import PressKitLiveImage3 from '../assets/liveimage/DSC05537.jpg'
import PressKitGalleryImage1 from '../assets/heroimage/_DSF0113.jpg'
import PressKitGalleryImage2 from '../assets/heroimage/_DSF9736.jpg'
import PressKitGalleryImage3 from '../assets/heroimage/_DSF9786.jpg'
import { EXTERNAL_LINKS } from '../constants/links'
import ExternalLink from '../components/common/ExternalLink'

import PressKitMainImage from '../assets/liveimage/_DSF9775.jpg'

export default function PressKitPage() {
  return (
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

          <div className="press-kit-live-strip" aria-label="Wendigo live photos">
            <img alt="Wendigo live photo 1" className="press-kit-live-strip-image" loading="lazy" decoding="async" src={PressKitLiveImage1} />
            <img alt="Wendigo live photo 2" className="press-kit-live-strip-image" loading="lazy" decoding="async" src={PressKitLiveImage2} />
            <img alt="Wendigo live photo 3" className="press-kit-live-strip-image" loading="lazy" decoding="async" src={PressKitLiveImage3} />
          </div>

          <p className="press-kit-copy">
            we've built up momentum, with three singles released, <b><ExternalLink href={EXTERNAL_LINKS.tracks.xxii.spotify} target="_blank">XXII</ExternalLink></b>, <b><ExternalLink href={EXTERNAL_LINKS.tracks.krakensbane.spotify} target="_blank">KRAKENSBANE</ExternalLink></b>, and <b><ExternalLink href={EXTERNAL_LINKS.tracks.cologne.spotify} target="_blank">COLOGNE</ExternalLink></b> each hitting over one thousand streams in their first week of release.
            these releases, as well as two huge headline shows at <b><ExternalLink href={EXTERNAL_LINKS.instagramPosts.camdenAssembly} target="_blank">camden assembly</ExternalLink></b> on 5th march 2026, and <b><ExternalLink href={EXTERNAL_LINKS.instagramPosts.offTheCuff} target="_blank">off the cuff</ExternalLink></b> in brixton on 15th august 2025. these have gained us a growing fanbase and a wave of recognition from the press, with our <b><ExternalLink href={EXTERNAL_LINKS.press.voxwaveArticle} target="_blank">interview with voxwave for XXII</ExternalLink></b> being a particular highlight.
          </p>


          <div className="press-kit-gallery" aria-label="Press kit gallery">
            <img alt="Wendigo gallery image 1" className="press-kit-gallery-image" loading="lazy" decoding="async" src={PressKitGalleryImage1} />
            <img alt="Wendigo gallery image 2" className="press-kit-gallery-image" loading="lazy" decoding="async" src={PressKitGalleryImage2} />
            <img alt="Wendigo gallery image 3" className="press-kit-gallery-image" loading="lazy" decoding="async" src={PressKitGalleryImage3} />
          </div>

          <p className="press-kit-copy">
            wendigo started as a solo project by singer/guitarist <b>theo stewart griffiths</b>, who has played across the uk in many bands, from underground club shows, to regional tours. it has now evolved into a full band 
            with the addition of bassist <b>toby hawkings</b>, an active member of the west sussex arts, film, and music scene, and drummer <b>rhys caswell</b>, who works as a FOH engineer and audio technician, in addition to touring the uk with various bands. the three of us are united by a shared aesthetic vision for wendigo, and a desire to create music that pushes boundaries and connects with listeners on a deep and visceral level.
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

        </div>
      </div>
    </section>
  )
}
