import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PrayerRequestPage from '@/app/prayer-request/page';

const originalLocation = window.location;

function stubLocation() {
  const location = { href: '' } as Location;
  Object.defineProperty(window, 'location', {
    configurable: true,
    writable: true,
    value: location,
  });
  return location;
}

afterEach(() => {
  Object.defineProperty(window, 'location', {
    configurable: true,
    writable: true,
    value: originalLocation,
  });
});

const confirmation =
  'Thank you. Your email app should now open with your request ready to send to our prayer team.';

describe('PrayerRequestPage', () => {
  it('renders empty, required form fields', () => {
    stubLocation();
    render(<PrayerRequestPage />);

    const name = screen.getByLabelText(/Name/);
    const request = screen.getByLabelText(/Prayer request/);

    expect(name).toHaveValue('');
    expect(name).toBeRequired();
    expect(request).toHaveValue('');
    expect(request).toBeRequired();
    expect(screen.queryByText(confirmation)).not.toBeInTheDocument();
  });

  it('keeps the inputs in sync with what the user types', async () => {
    stubLocation();
    const user = userEvent.setup();
    render(<PrayerRequestPage />);

    await user.type(screen.getByLabelText(/Name/), 'Daniel');
    await user.type(screen.getByLabelText(/Prayer request/), 'Please pray for my family');

    expect(screen.getByLabelText(/Name/)).toHaveValue('Daniel');
    expect(screen.getByLabelText(/Prayer request/)).toHaveValue('Please pray for my family');
  });

  it('opens a mailto link with the encoded name and request on submit', async () => {
    const location = stubLocation();
    const user = userEvent.setup();
    render(<PrayerRequestPage />);

    await user.type(screen.getByLabelText(/Name/), 'Daniel');
    await user.type(screen.getByLabelText(/Prayer request/), 'Healing & peace');
    await user.click(screen.getByRole('button', { name: 'Submit Request' }));

    expect(location.href).toBe(
      'mailto:prayer@jcckitengela.org?subject=Prayer%20request%20from%20Daniel' +
        '&body=Name%3A%20Daniel%0A%0APrayer%20request%3A%0AHealing%20%26%20peace',
    );
    expect(screen.getByText(confirmation)).toBeInTheDocument();
  });

  it('falls back to a generic subject when the name is blank', async () => {
    const location = stubLocation();
    const user = userEvent.setup();
    render(<PrayerRequestPage />);

    await user.type(screen.getByLabelText(/Prayer request/), 'Pray for rain');
    // Submit directly: required fields would otherwise block a click-driven submit.
    const form = screen.getByRole('button', { name: 'Submit Request' }).closest('form');
    form?.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));

    expect(location.href).toContain('subject=Prayer%20request%20from%20a%20church%20member');
    expect(await screen.findByText(confirmation)).toBeInTheDocument();
  });

  it('prevents the browser default form submission', async () => {
    stubLocation();
    render(<PrayerRequestPage />);

    const form = screen.getByRole('button', { name: 'Submit Request' }).closest('form');
    const submitEvent = new Event('submit', { bubbles: true, cancelable: true });
    form?.dispatchEvent(submitEvent);

    expect(submitEvent.defaultPrevented).toBe(true);
  });
});
