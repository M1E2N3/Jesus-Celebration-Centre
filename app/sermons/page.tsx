import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import SectionTitle from '@/components/ui/SectionTitle';

const sermons = [
  { title: 'The Heart of Worship', date: 'June 2026' },
  { title: 'Living Prayerfully', date: 'July 2026' },
  { title: 'Faith in Action', date: 'August 2026' },
];

export default function SermonsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <SectionTitle title="Sermons" subtitle="Listen, reflect, and grow in your faith." />
        <section className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
          {sermons.map((sermon) => (
            <div key={sermon.title} className="card">
              <h3>{sermon.title}</h3>
              <p style={{ marginTop: '0.75rem' }}>{sermon.date}</p>
            </div>
          ))}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
