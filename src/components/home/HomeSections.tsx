import IntroSection from './IntroSection'
import LiveSection from './LiveSection'
import MerchSection from './MerchSection'
import NewSongSection from './NewSongSection'
import NewsSection from './NewsSection'

export default function HomeSections() {
  return (
    <div className="home-main-sections">
      <IntroSection />
      <NewSongSection />
      <LiveSection />
      <MerchSection />
      <NewsSection />
    </div>
  )
}
