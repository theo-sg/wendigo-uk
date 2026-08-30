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
        title="wendigo - official website"
        description="official wendigo website — stream music, view tour dates, and buy merch."
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
