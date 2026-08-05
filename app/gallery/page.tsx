import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import SectionTitle from '@/components/ui/SectionTitle';

const galleryItems = [
  'Fellowship',
  'Worship',
  'Outreach',
  'Youth Group',
  'Prayer Night',
];

export default function GalleryPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <SectionTitle title="Gallery" subtitle="Moments from our life together." />
        <section className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
          {galleryItems.map((item) => (
            <div key={item} className="card">
              <h3>{item}</h3>
              <p style={{ color: '#cbd5e1', marginTop: '0.75rem' }}>
                A glimpse at our gatherings, outreach, and celebrations.
              </p>
            </div>
          ))}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
