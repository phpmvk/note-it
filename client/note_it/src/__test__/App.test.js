import { render, screen } from '@testing-library/react';
import App from '../App';


test('renders Tarik', () => {
  render(<App />);
  const linkElement = screen.getByText(/Tarik/i);
  expect(linkElement).toBeInTheDocument();
});
