export default function SongPageSkeleton() {
  return (
    <section style={{ padding: '40px 20px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Title skeleton */}
        <div
          style={{
            height: '2.5rem',
            backgroundColor: '#333333',
            marginBottom: '1rem',
            borderRadius: '4px',
            animation: 'pulse 2s infinite',
          }}
        />

        {/* Back link skeleton */}
        <div
          style={{
            height: '1rem',
            backgroundColor: '#333333',
            width: '150px',
            marginBottom: '2rem',
            borderRadius: '4px',
            animation: 'pulse 2s infinite',
          }}
        />

        {/* Description skeleton */}
        <div
          style={{
            height: '1rem',
            backgroundColor: '#333333',
            marginBottom: '2rem',
            borderRadius: '4px',
            animation: 'pulse 2s infinite',
          }}
        />

        {/* Embed skeletons */}
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            style={{
              height: '300px',
              backgroundColor: '#333333',
              marginBottom: '2rem',
              borderRadius: '4px',
              animation: 'pulse 2s infinite',
            }}
          />
        ))}

        <style>{`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
        `}</style>
      </div>
    </section>
  )
}
