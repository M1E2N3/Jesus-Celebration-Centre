import Link from 'next/link';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Events', href: '/events' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Giving', href: '/giving' },
  { name: 'Ministries', href: '/ministries' },
  { name: 'Sermons', href: '/sermons' },
  { name: 'Prayer', href: '/prayer-request' },
  { name: 'Contact', href: '/contact' },
];

export default function SiteHeader() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link href="/" className="nav-link" aria-label="Home">
          <strong>JCC Kitengela</strong>
        </Link>
        <nav className="nav-links">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
