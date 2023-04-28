import { render, screen } from '@testing-library/react';
import { Login } from '../pages/Login';
import { MemoryRouter, BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import App from '../App';

describe('Login Page', () => { 
  it('renders username & password input', async () => {
    render(<App/>)
    const userName = await screen.getByTestId('userNameInput');
    const userPassword = await screen.getByTestId('userPassword')
    expect(userName).toBeInTheDocument();
    expect(userPassword).toBeInTheDocument();
  });
  
  it('should redirect users to /home upon login', async () => {
    window.history.pushState({}, 'Login page', '/login');
    render(<App/>)
    const button = screen.getByTestId('loginButton')
    expect(button).toBeInTheDocument() 
    await act(async () => {
      userEvent.click(button);
    })
    expect(screen.getByTestId('homeDiv')).toBeInTheDocument();
    expect(window.location.pathname).toBe('/home');
  });

  it('should redirect users to /signup upon Register now!', async () => {
    window.history.pushState({}, 'Login page', '/login');
    render(<App />)
    const button = screen.getByTestId('registerButton')
    expect(button).toBeInTheDocument() 
    await act(async () => {
      userEvent.click(button);
    })
    expect(screen.getByTestId('signupDiv')).toBeInTheDocument();
    expect(window.location.pathname).toBe('/signup');
  });

 })
