import { render, screen } from '@testing-library/react';
import EventsPage from '@/app/events/page';
import GalleryPage from '@/app/gallery/page';
import MinistriesPage from '@/app/ministries/page';
import SermonsPage from '@/app/sermons/page';

describe('Events page', () => {
  it('lists each recurring event with its schedule', () => {
    render(<EventsPage />);

    const entries: Array<[string, string]> = [
      ['Sunday Worship', 'Sundays • 9:00 AM'],
      ['Youth Night', 'Fridays • 6:30 PM'],
      ['Community Outreach', 'Monthly'],
    ];

    entries.forEach(([name, date]) => {
      expect(screen.getByRole('heading', { level: 3, name })).toBeInTheDocument();
      expect(screen.getByText(date)).toBeInTheDocument();
    });
  });
});

describe('Sermons page', () => {
  it('lists each sermon with its date', () => {
    render(<SermonsPage />);

    const entries: Array<[string, string]> = [
      ['The Heart of Worship', 'June 2026'],
      ['Living Prayerfully', 'July 2026'],
      ['Faith in Action', 'August 2026'],
    ];

    entries.forEach(([title, date]) => {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument();
      expect(screen.getByText(date)).toBeInTheDocument();
    });
  });
});

describe('Ministries page', () => {
  it('lists each ministry with its focus', () => {
    render(<MinistriesPage />);

    const entries: Array<[string, string]> = [
      ['Children', 'Sunday school and family discipleship.'],
      ['Youth', 'Young people building faith and community.'],
      ['Worship', 'Music ministry supporting vibrant worship.'],
      ['Outreach', 'Community care and practical service.'],
    ];

    entries.forEach(([name, focus]) => {
      expect(screen.getByRole('heading', { level: 3, name })).toBeInTheDocument();
      expect(screen.getByText(focus)).toBeInTheDocument();
    });
  });
});

describe('Gallery page', () => {
  it('renders a card per gallery item', () => {
    const { container } = render(<GalleryPage />);

    ['Fellowship', 'Worship', 'Outreach', 'Youth Group', 'Prayer Night'].forEach((item) => {
      expect(screen.getByRole('heading', { level: 3, name: item })).toBeInTheDocument();
    });
    expect(container.querySelectorAll('main .card')).toHaveLength(5);
  });
});
