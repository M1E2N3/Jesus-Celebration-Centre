import { render, screen } from '@testing-library/react';
import SiteFooter from '@/components/layout/SiteFooter';

describe('SiteFooter', () => {
  it('renders a contentinfo landmark', () => {
    render(<SiteFooter />);

    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('shows the church name and contact details', () => {
    render(<SiteFooter />);

    expect(screen.getByText('Jesus Celebration Centre Kitengela')).toBeInTheDocument();
    expect(
      screen.getByText('Contact: info@jcckitengela.org | +254 700 000 000'),
    ).toBeInTheDocument();
  });
});
