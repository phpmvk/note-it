// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
// import { getNotes } from './api.service';
// import { useEffect } from 'react';
// import { useState } from 'react';
import React from 'react';
import { NotesProvider } from './notesContext';

export const NotesContext = React.createContext();

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <nav className='App-navbar my-5'>
          <h1 className='text-3xl font-bold underline'>Notes App</h1>
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

// StyleSheet.create({
//   * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   },

export default App;
