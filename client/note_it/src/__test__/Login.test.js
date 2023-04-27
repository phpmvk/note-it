import { render, screen } from '@testing-library/react';
import Login from '../pages/Login';

test('renders username input', () => {
  render(<Login />);
  const form = screen.getByTestId('userNameInput')
  expect(form).toBeInTheDocument();
});