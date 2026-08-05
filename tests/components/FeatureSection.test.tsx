import { render, screen } from '@testing-library/react';
import FeatureSection from '@/components/home/FeatureSection';

const featureTitles = ['Worship & Teaching', 'Kids & Youth', 'Community Outreach'];

describe('FeatureSection', () => {
  it('renders one card per feature', () => {
    const { container } = render(<FeatureSection />);

    expect(container.querySelectorAll('.card')).toHaveLength(featureTitles.length);
  });

  it.each(featureTitles)('renders a heading for %s', (title) => {
    render(<FeatureSection />);

    expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument();
  });

  it('renders a description alongside every feature heading', () => {
    const { container } = render(<FeatureSection />);

    container.querySelectorAll('.card').forEach((card) => {
      expect(card.querySelector('h3')?.textContent).toBeTruthy();
      expect(card.querySelector('p')?.textContent).toBeTruthy();
    });
  });
});
