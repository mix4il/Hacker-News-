import { render, screen } from '@testing-library/react';
import Header  from './Header';

describe('Test app', () => {
  it('render header', () => {
    render(<Header/>);

    const result = screen.getByText(/Hacker News/i);
    expect(result).toBeInTheDocument();
  });
}); 