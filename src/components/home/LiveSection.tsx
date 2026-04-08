import ExternalLink from '../common/ExternalLink'
import { LIVE_SHOWS } from '../../constants/liveShows.ts'
import type { LiveShow } from '../../constants/liveShows.ts'

export default function LiveSection() {
  return (
    <section id="live" className="section home-anchor-section">
      <div className="page-padding">
        <div className="container padding-top">
          <h2 className="anchor-title section-title-center">live</h2>
          <div className="live-widget-card">
            <div className="live-grid" role="table" aria-label="upcoming live shows">
              {LIVE_SHOWS.map((show: LiveShow) => (
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
          </div>
        </div>
      </div>
    </section>
  )
}
