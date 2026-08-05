import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import SectionTitle from '@/components/ui/SectionTitle';

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <SectionTitle title="About JCC Kitengela" subtitle="A community of faith, worship, and service." />
        <section className="card">
          <p>
            Jesus Celebration Centre Kitengela is a vibrant community where Christ is central, people are loved, and lives are transformed.
          </p>
          <p style={{ marginTop: '1rem' }}>
            We gather for worship, grow through teaching, and serve the local community in practical ways.
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
