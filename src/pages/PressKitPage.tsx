import PressKitLiveImage1 from '../assets/liveimage/DSC05223.jpg'
import PressKitLiveImage2 from '../assets/liveimage/DSC05485.jpg'
import PressKitLiveImage3 from '../assets/liveimage/DSC05537.jpg'
import PressKitGalleryImage1 from '../assets/heroimage/_DSF0113.jpg'
import PressKitGalleryImage2 from '../assets/heroimage/_DSF9736.jpg'
import PressKitGalleryImage3 from '../assets/heroimage/_DSF9786.jpg'

export default function PressKitPage() {
  return (
    <section className="section home-anchor-section music-page-section press-kit-page-section">
      <div className="page-padding">
        <div className="container padding-top">
          <div className="press-kit-header">
            <h1 className="anchor-title">press kit</h1>
          </div>

          <div className="press-kit-live-strip" aria-label="Wendigo live photos">
            <img alt="Wendigo live photo 1" className="press-kit-live-strip-image" loading="lazy" src={PressKitLiveImage1} />
            <img alt="Wendigo live photo 2" className="press-kit-live-strip-image" loading="lazy" src={PressKitLiveImage2} />
            <img alt="Wendigo live photo 3" className="press-kit-live-strip-image" loading="lazy" src={PressKitLiveImage3} />
          </div>

          <p className="press-kit-copy">
            we are a three piece alternative rock band from london, uk, who aim to create raw, visceral music, and to match that sincerity with our live performances. our self-coined ‘di-gaze’ sound draws inspiration from bands such as tigercub, cleopatrick, zig mentality and julie.
            with three singles released, <b><a href="https://open.spotify.com/track/6ZFQFPBkSi6qdJTUIaqan0?si=e3aa641b51df4607">XXII</a></b>, <b><a href="https://open.spotify.com/track/2D0VTDX74gfaY4SJ8Txal3?si=6a76f62a763d49f4">KRAKENSBANE</a></b>, and <b><a href="https://open.spotify.com/track/4Gjr70aFJj9fSkjMiwyO8J?si=8d876aa26a3342e8">COLOGNE</a></b> each hitting over one thousand streams in their first week of release, and an EP releasing this summer, we’re carving our own audiovisual identity through our work.
          </p>

          <div className="press-kit-gallery" aria-label="Press kit gallery">
            <img alt="Wendigo gallery image 1" className="press-kit-gallery-image" loading="lazy" src={PressKitGalleryImage1} />
            <img alt="Wendigo gallery image 2" className="press-kit-gallery-image" loading="lazy" src={PressKitGalleryImage2} />
            <img alt="Wendigo gallery image 3" className="press-kit-gallery-image" loading="lazy" src={PressKitGalleryImage3} />
          </div>

          <p className="press-kit-copy">
            starting as a solo project, and expanding into a full band in twenty twenty-five, wendigo have already established ourselves as a band which values creativity and taking a radical approach to songwriting and performing.
            our first major headline show in august twenty twenty-five at off the cuff, brixton, marked a breakthrough moment with a new wave of recognition for us. 
            collectively we are seasoned performers, having played extensively across the uk in various bands, from underground club shows, to regional tours. wendigo brings together the experience, passion, and drive, that we have amassed from our previous projects in one focused outlet.
            our next single, XXII, releases february twenty-sixth.
          </p>
        </div>
      </div>
    </section>
  )
}
