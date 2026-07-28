import ExternalLink from '../common/ExternalLink'
import { EventStructuredData } from '../common/StructuredData'
import { useBandsintown } from '../../hooks/useBandsintown'

function buildLineupText(lineup: string[]) {
  const cleanLineup = lineup.map((artist) => artist.trim()).filter(Boolean)
  const headliner = cleanLineup[0] ?? 'tbc'
  const supportActs = cleanLineup.slice(1)

  return {
    headliner,
    supportActs,
  }
}

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
              <div className="live-state-block">
                <p>Loading upcoming shows...</p>
              </div>
            ) : LIVE_SHOWS.length === 0 ? (
              <div className="live-state-block">
                <p>no upcoming shows</p>
              </div>
            ) : (
              <div className="live-grid" role="table" aria-label="upcoming live shows">
                {LIVE_SHOWS.map((show) => {
                  const { headliner, supportActs } = buildLineupText(show.lineup)

                  return (
                    <div className="live-grid-row" role="row" key={show.id}>
                      <div className="live-col live-date" role="cell">
                        <span className="live-date-day">{show.dayLabel}</span>
                        <span className="live-date-month">{show.monthLabel}</span>
                        <span className="live-date-year">{show.yearLabel}</span>
                      </div>

                      <div className="live-col live-lineup" role="cell">
                        <span className="live-lineup-text">
                          <span className="live-headliner">{headliner}</span>
                          {supportActs.length > 0 ? (
                            <span className="live-lineup-support">ft. {supportActs.join(', ')}</span>
                          ) : null}
                        </span>
                      </div>

                      <div className="live-col live-location" role="cell">
                        <span className="live-venue">{show.venueLabel}</span>
                        <span className="live-city">{show.cityLabel}, {show.countryLabel}</span>
                      </div>

                      <div className="live-col live-ticket" role="cell">
                        <ExternalLink href={show.ticketUrl} target="_blank" className="live-ticket-link">
                          tickets
                        </ExternalLink>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
