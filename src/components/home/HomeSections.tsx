import IntroSection from './IntroSection'
import LiveSection from './LiveSection'
import MerchSection from './MerchSection'
import MusicSection from './MusicSection'
import NewSongSection from './NewSongSection'
import NewsSection from './NewsSection'
import SEO from '../common/SEO'

export default function HomeSections() {
  return (
    <>
      <SEO
        title="Wendigo - Official Website"
        description="Discover Wendigo, the alternative rock band. Stream new music, watch videos, check live shows, and explore the latest news."
        url="/"
      />
      <div className="home-main-sections">
        <IntroSection />
        <NewSongSection />
        <LiveSection />
        <MerchSection />
        <MusicSection />
        <NewsSection />
      </div>
    </>
  )
}
