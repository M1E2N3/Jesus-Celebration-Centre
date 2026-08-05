import { render } from '@testing-library/react';
import RootLayout, { metadata } from '@/app/layout';

describe('RootLayout', () => {
  it('exposes site metadata', () => {
    expect(metadata.title).toBe('JCC Kitengela');
    expect(metadata.description).toContain('Jesus Celebration Centre Kitengela');
  });

  it('renders children inside an English html document body', () => {
    // React rejects <html>/<body> inside document.body, so render detached.
    const container = document.createElement('div');
    render(<RootLayout>page content</RootLayout>, { container });

    const html = container.querySelector('html');

    expect(html).toHaveAttribute('lang', 'en');
    expect(html?.querySelector('body')?.textContent).toBe('page content');
  });
});
