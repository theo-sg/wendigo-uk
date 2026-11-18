import FateCover from '../assets/coverimage/fate.png'
import CrescentMoonAudio from '../assets/music/WDG_CrescentMoon_Master_44.1k24bit.mp3'
import TowerAudio from '../assets/music/WDG_Tower_Master_44.1k24bit.mp3'
import XXIIAudio from '../assets/music/WDG_XXII_Master_44.1k24bit.mp3'
import AllSeeingEyeAudio from '../assets/music/WDG_AllSeeingEye_Master_44.1k24bit.mp3'
import SEO from '../components/common/SEO'

const pressPhotoModules = import.meta.glob('../assets/pressphotos/*.jpg', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

const pressPhotos = Object.entries(pressPhotoModules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, src]) => src)

export default function FatePressPage() {
  return (
    <>
      <SEO
        title="FATE EP (press release)"
        description="Official press page for WENDIGO's debut EP FATE, released 26 November 2026."
        image={FateCover}
        url="/press/fate"
        type="music.song"
      />

      <section className="section home-anchor-section press-kit-page-section fate-press-page">
        <div className="page-padding">
          <div className="container padding-top">
            <header className="press-kit-header fate-press-header">

            <div className="fate-press-artwork" aria-label="FATE EP artwork">
              <img
                className="fate-press-cover"
                src={FateCover}
                alt="FATE EP cover"
                loading="eager"
              />
            </div>
              <p><b>our debut EP, out 26 november 2026</b></p>
            </header>

            <article className="fate-press-release" aria-labelledby="fate-release-heading">
              <h1 id="fate-release-heading" className="anchor-title">press release</h1>
              <p className="press-kit-copy">
                <b>FATE</b> is London-based three-piece alternative rock band <b>wendigo</b>'s debut EP. The four-track record was recorded in Birmingham in January, showcasing the band's self-described <b>“di-gaze”</b> sound, which blends the raw energy of grunge and alternative rock, 
                the expansive textures of shoegaze, and a modern approach to production brought to life with <a href="https://zigproductionhouse.com/">ZIG PRODUCTION HOUSE</a>. 
                <b>wendigo</b> began as a solo project by songwriter <b>Theo Stewart Griffiths</b>, later joined by bassist <b>Toby Hawkings</b> and drummer <b>Rhys Caswell</b> and forming a full band, 
                gaining some traction with shows in London, Brighton and Birmingham over 2025/2026. 
              </p>
              <p className="press-kit-copy">
                The EP is a collection of four songs, with themes of indifference, frustration, and the collision of the digital and natural world that is all around us in 2026. Unlike the Gen X grunge movement that heavily inspired the band, 
                <b>wendigo</b> speaks to the Gen Z zeitgeist - capturing creeping paranoia, frustration with a world that feels indifferent, and using apathy as a coping mechanism.

                <br /><br />
                Opener <b>CRESCENT MOON</b>, serves as a space-rock/shoegaze introduction to the EP drawing from bands like <b>Failure</b> and <b>HUM</b>, exploding and collapsing into huge walls of sound and quieter, pumping bass-drum sections, and taking dynamic contrast to the extreme.  

                <br /><br />
                Lead single <b>TOWER</b>, which is the band's most successful track with 10K streams in the first month of release, is a dark and explosive love song, tugging at the fear that you will be the one that hurts the person you love most, 
                that channels <b>Hozier's</b> poetic lyricism with <b>Cleopatrick's</b> huge, riff-heavy guitar work. 

                <br /><br />
                This is followed up by <b>XXII</b>, which takes a darker, more introspective turn, moving the EP in a more menacing direction, the core of the band's sound. The <b>Interpol</b>-tinged song talks on being taken advantage of, 
                reflecting on how you can be praised for something that you never wanted in the first place.

                <br /><br />
                <b>ALL SEEING EYE</b> rounds off the EP with a slow, sinister and evil slinking riff inspired by <b>Tigercub</b> and <b>Queens of the Stone Age</b>, marking the band's heaviest song to date, while undertaking a very lyrically direct 
                dismantling of toxic masculinity, "locker room" culture, predatory behaviour of men, and holding them accountable.

                <br /><br />
                FATE was created with the help of many talented collaborators, including recording engineers Liam Chapman and Spencer Withey, mix/master engineer Jig Dubé, 
                cover artist Molly, and photographers/videographers Ethne, Viki, Matt, Mariia and Polly.
                </p>
            </article>



            <section className="fate-tracklist" aria-labelledby="fate-tracklist-heading">
              <h2 id="fate-tracklist-heading" className="anchor-title section-title-center">tracklist</h2>
              <ol>
                <li>
                  <span>1</span>
                  <b>CRESCENT MOON</b>
                  <audio className="fate-track-player" controls preload="metadata" src={CrescentMoonAudio} aria-label="Play CRESCENT MOON" />
                </li>
                <li>
                  <span>2</span>
                  <b>TOWER</b>
                  <audio className="fate-track-player" controls preload="metadata" src={TowerAudio} aria-label="Play TOWER" />
                </li>
                <li>
                  <span>3</span>
                  <b>XXII</b>
                  <audio className="fate-track-player" controls preload="metadata" src={XXIIAudio} aria-label="Play XXII" />
                </li>
                <li>
                  <span>4</span>
                  <b>ALL SEEING EYE</b>
                  <audio className="fate-track-player" controls preload="metadata" src={AllSeeingEyeAudio} aria-label="Play ALL SEEING EYE" />
                </li>
              </ol>
            </section>

            <section className="fate-press-photos" aria-labelledby="fate-photos-heading">
              <h2 id="fate-photos-heading" className="anchor-title section-title-center">press photos</h2>
              <div className="fate-press-photo-grid">
                {pressPhotos.map((image, index) => (
                  <img key={index} src={image} alt={`Wendigo press photo ${index + 1}`} loading="lazy" decoding="async" />
                ))}
              </div>
            </section>

          </div>
        </div>
      </section>
    </>
  )
}
