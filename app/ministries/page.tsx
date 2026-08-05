import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import SectionTitle from '@/components/ui/SectionTitle';

const ministries = [
  { name: 'Children', focus: 'Sunday school and family discipleship.' },
  { name: 'Youth', focus: 'Young people building faith and community.' },
  { name: 'Worship', focus: 'Music ministry supporting vibrant worship.' },
  { name: 'Outreach', focus: 'Community care and practical service.' },
];

export default function MinistriesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <SectionTitle title="Ministries" subtitle="Serving every generation." />
        <section className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
          {ministries.map((ministry) => (
            <div key={ministry.name} className="card">
              <h3>{ministry.name}</h3>
              <p style={{ marginTop: '0.75rem' }}>{ministry.focus}</p>
            </div>
          ))}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
