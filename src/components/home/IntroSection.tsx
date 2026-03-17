import MailerLiteHtmlForm from './MailerLiteHtmlForm.tsx'

export default function IntroSection() {
  return (
    <section className="section home-intro-section">
      <div className="page-padding">
        <div className="container padding-top">
          <div className="main-content" style={{ display: 'flex', justifyContent: 'center' }}>
            <h4>three piece di-gaze band from london, uk.</h4>
          </div>
          <MailerLiteHtmlForm />
        </div>
      </div>
    </section>
  )
}
