import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import SectionTitle from '@/components/ui/SectionTitle';

export default function AdminPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <SectionTitle title="Admin" subtitle="Tools for church leadership and content updates." />
        <section className="card">
          <p>
            This area is reserved for ministry administrators to update events, announcements, and resources.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Connect with the church office for credentials and secure access.
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
