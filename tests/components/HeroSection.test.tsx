import { render, screen } from '@testing-library/react';
import HeroSection from '@/components/home/HeroSection';

describe('HeroSection', () => {
  it('renders the single top-level headline', () => {
    render(<HeroSection />);

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Rooted in faith, growing in love, serving our community.',
      }),
    ).toBeInTheDocument();
  });

  it('renders call-to-action links for giving and events', () => {
    render(<HeroSection />);

    expect(screen.getByRole('link', { name: 'Give Online' })).toHaveAttribute('href', '/giving');
    expect(screen.getByRole('link', { name: 'Upcoming Events' })).toHaveAttribute('href', '/events');
  });

  it('renders the mission card with its statistics', () => {
    render(<HeroSection />);

    expect(screen.getByRole('heading', { level: 2, name: 'Our mission' })).toBeInTheDocument();

    const stats: Array<[string, string]> = [
      ['7', 'Weekly services'],
      ['4', 'Active ministries'],
      ['1.2K', 'Members'],
    ];

    stats.forEach(([value, label]) => {
      expect(screen.getByText(value)).toBeInTheDocument();
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });
});
