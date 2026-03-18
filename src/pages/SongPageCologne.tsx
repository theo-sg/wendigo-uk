import { EXTERNAL_LINKS } from '../constants/links'
import { Link } from 'react-router-dom'

export default function SongPageCologne() {
  return (
    <section className="section home-anchor-section music-page-section song-page-section song-page-cologne">
      <div className="page-padding">
        <div className="container padding-top">
          <h1 className="anchor-title song-page-title-amador">cologne</h1>
          <Link className="song-back-link" to="/">back to home</Link>
          <p className="song-page-intro-copy">stream the song and watch the video below.</p>

          <div className="song-page-media-stack">
            <div className="embed-frame-wrap song-page-spotify-wrap">
              <iframe
                className="spotify-embed spotify-embed-compact"
                src={EXTERNAL_LINKS.tracks.cologne.spotifyEmbed}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Cologne on Spotify"
              />
            </div>

            <div className="embed-frame-wrap song-page-youtube-wrap">
              <div className="youtube-embed-wrap">
                <iframe
                  className="youtube-embed"
                  src={EXTERNAL_LINKS.tracks.cologne.youtubeEmbed}
                  title="Cologne video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="embed-frame-wrap song-page-bandcamp-wrap">
              <iframe
                className="song-bandcamp-embed"
                src={EXTERNAL_LINKS.tracks.cologne.bandcampEmbed}
                title="Cologne on Bandcamp"
                seamless
              >
                <a href={EXTERNAL_LINKS.tracks.cologne.bandcamp}>Cologne by wendigo</a>
              </iframe>
            </div>
          </div>

          <div className="song-lyrics-section">
            <h2 className="song-lyrics-title">lyrics</h2>
            <div className="song-lyrics-box">
              <p>
              i stood aside <br />
              i stood like summer before fall <br />
              and it fucked me up <br />
              it fucked me up to make that call <br />
              op den fiets man, in defeat <br />
              we run away to smoke a slice of guilt <br />
              the drive to self destruct <br />
              crash out and burn all of the bridges that we built <br />
              <br />
              so why’d you throw dirt on my name? <br />
              <br />
              look in my eyes <br />
              tell another white lie <br />
              ‘cause each word, yeah each line <br />
              carved in the back of my mind <br />
              i don’t wanna do it alone <br />
              yeah <br />
              we won’t make it out of cologne <br />
              <br />
              white shirt, sweet scent <br />
              you turn some heads now, don’t you boy? <br />
              sweet nineteen <br />
              so why’s there still this sorrow in my joy? <br />
              <br />
              and why’d you throw dirt on my name? <br />
              <br />
              look in my eyes <br />
              tell another white lie <br />
              ‘cause each word, yeah each line <br />
              carved in the back of my mind <br />
              i don’t wanna do it alone <br />
              yeah <br />
              we won’t make it out of cologne <br />
              <br />
              you procure the knife <br />
              so damn gently <br />
              and then blame me just for flinching <br />
              if you wanted to come, then why’d you throw dirt on my name? <br />
              <br />
              look in my eyes <br />
              tell another white lie <br />
              ‘cause each word, yeah each line <br />
              carved in the back of my mind <br />
              i don’t wanna do it alone <br />
              yeah <br />
              we won’t make it out of cologne <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
