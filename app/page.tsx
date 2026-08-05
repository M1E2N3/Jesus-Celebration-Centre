import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import HeroSection from '@/components/home/HeroSection';
import FeatureSection from '@/components/home/FeatureSection';
import QuickLinks from '@/components/home/QuickLinks';

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <FeatureSection />
        <section>
          <div className="card">
            <h2>Welcome to JCC Kitengela</h2>
            <p>
              Jesus Celebration Centre Kitengela is committed to spiritual growth, compassionate service, and creating a place where every person is known and valued.
            </p>
          </div>
        </section>
        <section>
          <h2>Quick Links</h2>
          <QuickLinks />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
