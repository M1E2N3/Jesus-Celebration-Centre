import { render, screen } from '@testing-library/react';
import type { ComponentType } from 'react';
import AboutPage from '@/app/about/page';
import AdminPage from '@/app/admin/page';
import ContactPage from '@/app/contact/page';
import GivingPage from '@/app/giving/page';

const staticPages: Array<[string, ComponentType, string]> = [
  ['About', AboutPage, 'About JCC Kitengela'],
  ['Admin', AdminPage, 'Admin'],
  ['Contact', ContactPage, 'Contact Us'],
  ['Giving', GivingPage, 'Giving'],
];

describe.each(staticPages)('%s page', (_name, Page, title) => {
  it('renders its section title', () => {
    render(<Page />);

    expect(screen.getByRole('heading', { level: 2, name: title })).toBeInTheDocument();
  });

  it('renders the shared header and footer around a main landmark', () => {
    render(<Page />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});

describe('Contact page', () => {
  it('lists the church email, phone, and location', () => {
    render(<ContactPage />);

    expect(screen.getByText('Email: info@jcckitengela.org')).toBeInTheDocument();
    expect(screen.getByText('Phone: +254 700 000 000')).toBeInTheDocument();
    expect(screen.getByText('Location: Kitengela, Kajiado County, Kenya')).toBeInTheDocument();
  });
});

describe('Giving page', () => {
  it('offers a mailto giving link', () => {
    render(<GivingPage />);

    expect(screen.getByRole('link', { name: 'Give Now' })).toHaveAttribute(
      'href',
      'mailto:give@jcckitengela.org',
    );
  });
});
