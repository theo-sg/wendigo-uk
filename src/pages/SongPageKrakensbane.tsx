import { EXTERNAL_LINKS } from '../constants/links'
import { Link } from 'react-router-dom'

export default function SongPageKrakensbane() {
  return (
    <section className="section home-anchor-section music-page-section song-page-section song-page-krakensbane">
      <div className="page-padding">
        <div className="container padding-top">
          <h1 className="anchor-title song-page-title-amador">krakensbane</h1>
          <Link className="song-back-link" to="/">back to home</Link>
          <p className="song-page-intro-copy">stream the song and watch the video below.</p>

          <div className="song-page-media-stack">
            <div className="embed-frame-wrap song-page-spotify-wrap">
              <iframe
                className="spotify-embed spotify-embed-compact"
                src={EXTERNAL_LINKS.tracks.krakensbane.spotifyEmbed}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Krakensbane on Spotify"
              />
            </div>

            <div className="embed-frame-wrap song-page-youtube-wrap">
              <div className="youtube-embed-wrap">
                <iframe
                  className="youtube-embed"
                  src={EXTERNAL_LINKS.tracks.krakensbane.youtubeEmbed}
                  title="Krakensbane video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="embed-frame-wrap song-page-youtube-wrap">
              <div className="youtube-embed-wrap">
                <iframe
                  className="youtube-embed"
                  src={EXTERNAL_LINKS.tracks.krakensbane.youtubeLiveEmbed}
                  title="Krakensbane video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="embed-frame-wrap song-page-bandcamp-wrap">
              <iframe
                className="song-bandcamp-embed"
                src={EXTERNAL_LINKS.tracks.krakensbane.bandcampEmbed}
                title="Krakensbane on Bandcamp"
                seamless
              >
                <a href={EXTERNAL_LINKS.tracks.krakensbane.bandcamp}>Krakensbane by wendigo</a>
              </iframe>
            </div>
          </div>

          <div className="song-lyrics-section">
            <h2 className="song-lyrics-title">lyrics</h2>
            <div className="song-lyrics-box">
              <p>
                something in me woke the night they took me in <br />
                blue lights eight pale arms the needles in my skin <br />
                whisper in my ear, ‘my love, have you forgot? <br />
                there’s nothing left for you but ten more weeks of rot’ <br />
                <br />
                rub salt in my wounds, i’ll learn to love the sting <br />
                begging, baby, please, but i can’t hear a thing <br />
                the oceans in my eyes are boiling red with rage <br />
                they’re boiling red <br />
                <br />
                i’ll cut you loose <br />
                now you’re sinking <br />
                so fuck what you’re thinking, yeah <br />
                when you’re staring at the bottom of the sea <br />
                <br />
                and the birds don’t sing the way they did before <br />
                and your faces have all changed <br />
                been a while since i last saw <br />
                puts its poison in my thoughts between the cracks <br />
                and there ain’t no land ahead <br />
                and the waves are turning black <br />
                <br />
                i’ll cut you loose <br />
                now you’re sinking <br />
                so fuck what you’re thinking, yeah <br />
                when you’re staring at the bottom of the sea <br />
                and i’ll cut you loose <br />
                now you’re sinking <br />
                so fuck what you’re thinking, yeah <br />
                when you’re staring at the bottom of the sea <br />
                <br />
                please don’t try to make amends <br />
                tentacles instead of veins in my throat <br />
                please don’t try to rescue me <br />
                cling to hatred like it’s keeping me afloat <br />
                <br />
                and i’ll cut you loose <br />
                now you’re sinking <br />
                so fuck what you’re thinking, yeah <br />
                when you’re staring at the bottom of the sea <br />
                and i’ll cut you loose <br />
                now you’re sinking <br />
                so fuck what you’re thinking, yeah <br />
                when you’re staring at the bottom <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
