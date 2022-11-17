import { render, screen } from '@testing-library/react';
import  BackButton  from './BackButton';

describe('BackButton render', () => {
  it('render BackButton', () => {
    render(<BackButton />);

    const result = screen.getByText(/back to main/i);
    expect(result).toBeInTheDocument();
  });
});