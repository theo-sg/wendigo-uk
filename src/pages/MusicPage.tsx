import SongCoverCologne from '../assets/coverimage/cologne.jpg'
import SongCoverKrakensbane from '../assets/coverimage/krakensbane.jpg'
import SongCoverXXII from '../assets/coverimage/xxii.jpg'

const songs = [
  { title: 'XXII', href: '/music/xxii', cover: SongCoverXXII },
  { title: 'COLOGNE', href: '/music/cologne', cover: SongCoverCologne },
  { title: 'KRAKENSBANE', href: '/music/krakensbane', cover: SongCoverKrakensbane },
]

export default function MusicPage() {
  return (
    <section id="music" className="section home-anchor-section music-page-section">
      <div className="page-padding">
        <div className="container padding-top">
          <h1 className="anchor-title">music</h1>

          <div className="music-song-gallery" aria-label="Song pages">
            {songs.map((song) => (
              <a key={song.href} className="music-song-card" href={song.href} aria-label={song.title}>
                <img
                  className="music-song-cover"
                  src={song.cover}
                  alt={`${song.title} cover art`}
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
