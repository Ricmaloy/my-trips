import { render, screen } from '@testing-library/react';
import { LinkWrapper } from '.';

describe('LinkWrapper Component', () => {
  it('should render correctly', () => {
    render(<LinkWrapper href="/my-link">Anything</LinkWrapper>);

    const children = screen.getByText(/anything/i);
    expect(children).toBeInTheDocument();
    expect(children).toHaveAttribute('href', '/my-link');
  });
});
