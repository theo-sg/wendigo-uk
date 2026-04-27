export default function TechRiderPage() {
  return (
    <div className="tech-rider-container" style={{ padding: '20px', textAlign: 'center' }}>
      {/* Try embed first */}
      <embed
        src="/WENDIGO_ARTIST_TECH_RIDER_2026.pdf"
        type="application/pdf"
        width="100%"
        height="800px"
        style={{ border: 'none' }}
      />
      {/* Fallback: Try object tag for browsers that don't support embed */}
      <object
        data="/WENDIGO_ARTIST_TECH_RIDER_2026.pdf"
        type="application/pdf"
        width="100%"
        height="800px"
        style={{ display: 'none', border: 'none' }}
      >
        {/* Final fallback: iframe */}
        <iframe
          src="/WENDIGO_ARTIST_TECH_RIDER_2026.pdf"
          width="100%"
          height="800px"
          style={{ border: 'none' }}
          title="Wendigo Tech Rider"
        >
          <p>
            Your browser does not support PDFs.{' '}
            <a href="/WENDIGO_ARTIST_TECH_RIDER_2026.pdf" download>
              Download the tech rider
            </a>
          </p>
        </iframe>
      </object>
      {/* Always provide download link */}
      <p style={{ marginTop: '10px' }}>
        <a href="/WENDIGO_ARTIST_TECH_RIDER_2026.pdf" download>
          Download Tech Rider (PDF)
        </a>
      </p>
    </div>
  );
}
