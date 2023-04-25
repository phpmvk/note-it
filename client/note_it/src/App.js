// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Notebooks } from './pages/Notebooks';
import { Signup } from './pages/Signup';

import React from 'react';
import { NotesProvider } from './notesContext';

export const NotesContext = React.createContext();

function App() {
  return (
    <div className='App'>
      <header className='App-header h-full'>
        <nav className='App-navbar my-5'>
          <img src='logo.png' className='logo' alt='logo' />
        </nav>
        <NotesProvider>
          <Router>
            <Routes>
              <Route path='/home' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/notebooks' element={<Notebooks />} />
            </Routes>
          </Router>
        </NotesProvider>
        <footer class='footer footer-center p-8 bg-base-300 text-base-content text-sm '>
          <div>
            <p>Copyright © 2023 - All right reserved by Tarik Ltd</p>
          </div>
        </footer>
      </header>
    </div>
  );
}

export default App;
