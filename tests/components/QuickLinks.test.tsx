import { render, screen } from '@testing-library/react';
import QuickLinks from '@/components/home/QuickLinks';

const links: Array<[string, string]> = [
  ['About Us', '/about'],
  ['Ministries', '/ministries'],
  ['Prayer Request', '/prayer-request'],
  ['Contact', '/contact'],
];

describe('QuickLinks', () => {
  it.each(links)('links %s to %s', (title, href) => {
    render(<QuickLinks />);

    expect(screen.getByRole('link', { name: `${title} Learn more and get connected.` })).toHaveAttribute(
      'href',
      href,
    );
  });

  it('renders exactly one card per quick link', () => {
    const { container } = render(<QuickLinks />);

    expect(container.querySelectorAll('a.card')).toHaveLength(links.length);
  });
});
