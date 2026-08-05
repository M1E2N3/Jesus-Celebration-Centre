const features = [
  {
    title: 'Worship & Teaching',
    description: 'Fresh messages, scripture-based sermons, and joyful worship nights for the whole family.',
  },
  {
    title: 'Kids & Youth',
    description: 'Age-appropriate programs that help children and teens grow in faith and community.',
  },
  {
    title: 'Community Outreach',
    description: 'Local food drives, education support, and care for vulnerable families in Kitengela.',
  },
];

export default function FeatureSection() {
  return (
    <section className="container">
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
        {features.map((feature) => (
          <div key={feature.title} className="card">
            <h3>{feature.title}</h3>
            <p style={{ color: '#cbd5e1', marginTop: '0.75rem' }}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
