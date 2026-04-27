import IntroSection from './IntroSection'
import LiveSection from './LiveSection'
import MerchSection from './MerchSection'
import MusicSection from './MusicSection'
import NewSongSection from './NewSongSection'
import NewsSection from './NewsSection'

export default function HomeSections() {
  return (
    <div className="home-main-sections">
      <IntroSection />
      <NewSongSection />
      <LiveSection />
      <MerchSection />
      <MusicSection />      
      <NewsSection />
    </div>
  )
}
