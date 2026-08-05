import { render, screen } from '@testing-library/react';
import SectionTitle from '@/components/ui/SectionTitle';

describe('SectionTitle', () => {
  it('renders the title as a level 2 heading', () => {
    render(<SectionTitle title="Ministries" />);

    expect(screen.getByRole('heading', { level: 2, name: 'Ministries' })).toBeInTheDocument();
  });

  it('renders the subtitle when provided', () => {
    render(<SectionTitle title="Sermons" subtitle="Listen and grow." />);

    expect(screen.getByText('Listen and grow.')).toBeInTheDocument();
  });

  it('omits the subtitle paragraph when no subtitle is given', () => {
    const { container } = render(<SectionTitle title="Gallery" />);

    expect(container.querySelectorAll('p')).toHaveLength(0);
  });
});
