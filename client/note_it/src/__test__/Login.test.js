/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import App from '../App';

describe('Login Page', () => {
  it('renders username & password input', async () => {
    render(<App />);
    const userName = screen.getByTestId('userNameInput');
    const userPassword = screen.getByTestId('userPassword');
    expect(userName).toBeInTheDocument();
    expect(userPassword).toBeInTheDocument();
  });

  it('should redirect users to /home upon login', async () => {
    window.history.pushState({}, 'Login page', '/login');
    render(<App />);
    const button = screen.getByTestId('loginButton');
    expect(button).toBeInTheDocument();
    await act(async () => {
      userEvent.click(button);
    });
    expect(screen.getByTestId('homeDiv')).toBeInTheDocument();
    expect(window.location.pathname).toBe('/home');
  });

  it('should redirect users to /signup upon Register now!', async () => {
    window.history.pushState({}, 'Login page', '/login');
    render(<App />);
    const button = screen.getByTestId('registerButton');
    expect(button).toBeInTheDocument();
    await act(async () => {
      userEvent.click(button);
    });
    expect(screen.getByTestId('signupDiv')).toBeInTheDocument();
    expect(window.location.pathname).toBe('/signup');
  });
});
