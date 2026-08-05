import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import SectionTitle from '@/components/ui/SectionTitle';

export default function GivingPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <SectionTitle title="Giving" subtitle="Partner with us to support ministry and outreach." />
        <section className="card">
          <p>
            Your generosity helps us share the gospel, support families, and grow ministry in Kitengela.
          </p>
          <p style={{ marginTop: '1rem' }}>
            You can give online or visit the church office during service hours.
          </p>
          <a className="btn" href="mailto:give@jcckitengela.org">Give Now</a>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
