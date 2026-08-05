import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import SectionTitle from '@/components/ui/SectionTitle';

const events = [
  { name: 'Sunday Worship', date: 'Sundays • 9:00 AM' },
  { name: 'Youth Night', date: 'Fridays • 6:30 PM' },
  { name: 'Community Outreach', date: 'Monthly' },
];

export default function EventsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <SectionTitle title="Upcoming Events" subtitle="Join us in worship, study, and service." />
        <section className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
          {events.map((event) => (
            <div key={event.name} className="card">
              <h3>{event.name}</h3>
              <p style={{ marginTop: '0.75rem' }}>{event.date}</p>
            </div>
          ))}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
