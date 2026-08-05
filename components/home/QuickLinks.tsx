import Link from 'next/link';

const pages = [
  { title: 'About Us', href: '/about' },
  { title: 'Ministries', href: '/ministries' },
  { title: 'Prayer Request', href: '/prayer-request' },
  { title: 'Contact', href: '/contact' },
];

export default function QuickLinks() {
  return (
    <section className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
      {pages.map((page) => (
        <Link key={page.href} href={page.href} className="card">
          <h3>{page.title}</h3>
          <p>Learn more and get connected.</p>
        </Link>
      ))}
    </section>
  );
}
