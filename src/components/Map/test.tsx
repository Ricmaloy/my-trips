import Map from '.';
import { render, screen } from '@testing-library/react';

describe('Map component', () => {
  it('should render without any marker', () => {
    render(<Map />);

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument();
  });

  it('should render with marker in correct place', () => {
    const udia = {
      id: '1',
      name: 'Uberlandia',
      slug: 'Uberlandia',
      location: {
        latitude: 0,
        longitude: 0
      }
    };
    const uberaba = {
      id: '2',
      name: 'uberaba',
      slug: 'uberaba',
      location: {
        latitude: 10,
        longitude: 10
      }
    };
    render(<Map places={[udia, uberaba]} />);

    expect(screen.getByTitle(/Uberlandia/i)).toBeInTheDocument();
    expect(screen.getByTitle(/uberaba/i)).toBeInTheDocument();
  });
});
