import { render, screen } from '@testing-library/react';
import HomePage from '@/app/page';

describe('HomePage', () => {
  it('renders the hero headline', () => {
    render(<HomePage />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Rooted in faith, growing in love, serving our community.',
    );
  });

  it('renders the welcome and quick links sections', () => {
    render(<HomePage />);

    expect(
      screen.getByRole('heading', { level: 2, name: 'Welcome to JCC Kitengela' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'Quick Links' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /^About Us/ })).toHaveAttribute('href', '/about');
  });

  it('renders the feature highlights', () => {
    render(<HomePage />);

    ['Worship & Teaching', 'Kids & Youth', 'Community Outreach'].forEach((title) => {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument();
    });
  });
});
