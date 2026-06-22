import { Link } from 'react-router-dom'
import xviAudio from '../assets/clips/XVIXVIXVIXVIXVIXVI.wav'

export default function SongPageTower() {
  return (
    <section className="section home-anchor-section music-page-section song-page-section song-page-tower">
      <div className="page-padding">
        <div className="container padding-top">
          <h1>why's it gotta be the sixteenth card?</h1>
          <audio controls style={{ marginTop: '1rem', marginBottom: '1rem', width: '100%' }}>
            <source src={xviAudio} type="audio/wav" />
            Your browser does not support the audio element.
          </audio>
          <Link className="song-back-link" to="/">back to home</Link>
        </div>
      </div>
    </section>
  )
}