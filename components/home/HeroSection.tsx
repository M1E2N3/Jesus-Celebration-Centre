import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p>Welcome to Jesus Celebration Centre Kitengela</p>
        <h1>Rooted in faith, growing in love, serving our community.</h1>
        <p>
          Join us for worship and fellowship, discover ministries for every age, and participate in our outreach to Kenya and beyond.
        </p>
        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link className="btn" href="/giving">Give Online</Link>
          <Link className="btn" href="/events">Upcoming Events</Link>
        </div>
      </div>
      <div className="card">
        <h2>Our mission</h2>
        <p>
          We exist to share the love of Christ through worship, discipleship, and compassionate service in Kitengela.
        </p>
        <div className="stats">
          <div className="stat-card">
            <strong>7</strong>
            <span>Weekly services</span>
          </div>
          <div className="stat-card">
            <strong>4</strong>
            <span>Active ministries</span>
          </div>
          <div className="stat-card">
            <strong>1.2K</strong>
            <span>Members</span>
          </div>
        </div>
      </div>
    </section>
  );
}
