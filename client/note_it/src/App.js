// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';

import React from 'react';
import { NotesProvider } from './notesContext';

export const NotesContext = React.createContext();

function App() {
  return (
    <div className='App'>
      <header className='App-header h-full'>
        <nav className='App-navbar my-5'>
          <img src='logo.png' className='h-24 w-24' alt='logo' />
        </nav>
        <NotesProvider>
          <Router>
            <Routes>
              <Route path='/home' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
            </Routes>
          </Router>
        </NotesProvider>
      </header>
    </div>
  );
}

export default App;
