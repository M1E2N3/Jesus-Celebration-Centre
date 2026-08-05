import { render, screen } from '@testing-library/react';
import SiteHeader from '@/components/layout/SiteHeader';

const navTargets: Array<[string, string]> = [
  ['Home', '/'],
  ['About', '/about'],
  ['Events', '/events'],
  ['Gallery', '/gallery'],
  ['Giving', '/giving'],
  ['Ministries', '/ministries'],
  ['Sermons', '/sermons'],
  ['Prayer', '/prayer-request'],
  ['Contact', '/contact'],
];

describe('SiteHeader', () => {
  it('renders a banner landmark containing the navigation', () => {
    render(<SiteHeader />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('renders a brand link back to the home page', () => {
    render(<SiteHeader />);

    const brand = screen.getByText('JCC Kitengela').closest('a');

    expect(brand).toHaveAttribute('href', '/');
    expect(brand).toHaveAttribute('aria-label', 'Home');
  });

  it.each(navTargets)('links %s to %s', (name, href) => {
    render(<SiteHeader />);

    const nav = screen.getByRole('navigation');
    const link = Array.from(nav.querySelectorAll('a')).find((anchor) => anchor.textContent === name);

    expect(link).toBeDefined();
    expect(link).toHaveAttribute('href', href);
  });

  it('renders every navigation entry exactly once', () => {
    render(<SiteHeader />);

    const hrefs = Array.from(screen.getByRole('navigation').querySelectorAll('a')).map((anchor) =>
      anchor.getAttribute('href'),
    );

    expect(hrefs).toEqual(navTargets.map(([, href]) => href));
    expect(new Set(hrefs).size).toBe(hrefs.length);
  });
});
