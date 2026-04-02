import { Link } from 'react-router-dom'
import { HOME_SONG_ORDER, SONGS } from '../../constants/songs'


export default function MusicSection() {
  return (
    <section id="music" className="section home-anchor-section music-page-section">
      <div className="page-padding">
        <div className="container padding-top">
          <h1 className="anchor-title">music</h1>

          <div className="music-song-gallery" aria-label="Song pages">
            {HOME_SONG_ORDER.map((slug) => {
              const song = SONGS[slug]

              return (
                <Link key={song.slug} className="music-song-card" to={`/music/${song.slug}`} aria-label={song.title}>
                <img
                  className="music-song-cover"
                  src={song.cover}
                  alt={`${song.title} cover art`}
                  loading="lazy"
                />
              </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
