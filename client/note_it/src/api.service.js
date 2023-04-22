const baseUrl = 'http://localhost:3001';

export const getNotes = () => {
  console.log('hello from getNotes');
  return fetch(baseUrl + '/notes', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => {
    return res.json();
  });
};

export const createNote = note => {
  return fetch(`${baseUrl}/notes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(note),
  }).then(res => res.json());
};

export const deleteNote = id => {
  return fetch(`${baseUrl}/notes/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json());
};

export const updateNote = (id, note) => {
  return fetch(`${baseUrl}/notes/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(note),
  }).then(res => res.json());
};

export const getNote = id => {
  return fetch(`${baseUrl}/notes/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json());
};

// endpoints for notes
// GET /notes(read all notes)
// POST /notes(create a note)
// GET /notes/:id(read a note)
// PUT /notes/:id(update a note)
// DELETE /notes/:id( delete a note)

// Path: client/note_it/src/App.js
// import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import './App.css';
// import {
//   getNotes,
//   createNote,
//   deleteNote,
//   updateNote,
//   getNote,
// } from './api.service';
// import NoteList from './components/NoteList';
// import NoteForm from './components/NoteForm';
// import Note from './components/Note';
