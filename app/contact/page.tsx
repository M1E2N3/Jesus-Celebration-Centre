import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import SectionTitle from '@/components/ui/SectionTitle';

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <SectionTitle title="Contact Us" subtitle="Reach out for prayer, partnership, or questions." />
        <section className="card">
          <p>Email: info@jcckitengela.org</p>
          <p>Phone: +254 700 000 000</p>
          <p>Location: Kitengela, Kajiado County, Kenya</p>
          <p style={{ marginTop: '1rem' }}>
            Use our contact page for ministry inquiries or to let us know how we can pray for you.
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
