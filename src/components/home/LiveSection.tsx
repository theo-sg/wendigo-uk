import ExternalLink from '../common/ExternalLink'
import { EventStructuredData } from '../common/StructuredData'
import { useBandsintown } from '../../hooks/useBandsintown'

export default function LiveSection() {
  const { shows: LIVE_SHOWS, loading } = useBandsintown()

  return (
    <section id="live" className="section home-anchor-section">
      {LIVE_SHOWS.map((show) => (
        <EventStructuredData key={`structured-${show.id}`} show={show} />
      ))}
      <div className="page-padding">
        <div className="container padding-top">
          <h2 className="anchor-title section-title-center">live</h2>
          <div className="live-widget-card">
            {loading ? (
              <div style={{ padding: '2rem', textAlign: 'center' }}>
                <p>Loading upcoming shows...</p>
              </div>
            ) : LIVE_SHOWS.length === 0 ? (
              <div style={{ padding: '2rem', textAlign: 'center' }}>
                <p>no upcoming shows</p>
              </div>
            ) : (
              <div className="live-grid" role="table" aria-label="upcoming live shows">
                {LIVE_SHOWS.map((show) => (
                  <div className="live-grid-row" role="row" key={show.id}>
                  <span className="live-col live-date" role="cell">
                    <span className="live-date-day">{show.dayLabel}</span>
                    <span className="live-date-month">{show.monthLabel}</span>
                  </span>

                  <span className="live-col live-location" role="cell">
                    <span className="live-venue">{show.venueLabel},</span>
                    <span className="live-city">{show.cityLabel}, {show.countryLabel}</span>
                  </span>

                  <span className="live-col live-lineup" role="cell">
                    {show.lineup.map((band) => (
                      <span className="live-band" key={`${show.id}-${band}`}>
                        {band}
                      </span>
                    ))}
                  </span>

                  <span className="live-col live-ticket" role="cell">
                    <ExternalLink href={show.ticketUrl} target="_blank" className="live-ticket-link">
                      tickets
                    </ExternalLink>
                  </span>
                </div>
              ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
