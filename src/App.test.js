import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders footer text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Sylvain Afonso Developer Test/i);
  expect(linkElement).toBeInTheDocument();
});
