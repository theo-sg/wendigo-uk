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
                    {(() => {
                      const lineup = show.lineup.map((artist) => artist.trim()).filter(Boolean)
                      const wendigoIndex = lineup.findIndex(
                        (artist) => artist.toLowerCase() === 'wendigo'
                      )
                      const otherActs = lineup.filter(
                        (artist) => artist.toLowerCase() !== 'wendigo'
                      )

                      const formatActs = (acts: string[]) => {
                        if (acts.length === 1) return acts[0]
                        if (acts.length === 2) return `${acts[0]} alongside ${acts[1]}`
                        return `${acts.slice(0, -1).join(', ')} alongside ${acts[acts.length - 1]}`
                      }

                      if (otherActs.length === 0) {
                        return wendigoIndex === 0
                          ? 'Wendigo headline show'
                          : 'Wendigo supporting'
                      }

                      if (wendigoIndex === 0 || wendigoIndex === -1) {
                        return `with support from ${formatActs(otherActs)}`
                      }

                      return `supporting ${otherActs[0]}${
                        otherActs.length > 1 ? ` alongside ${formatActs(otherActs.slice(1))}` : ''
                      }`
                    })()}
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
