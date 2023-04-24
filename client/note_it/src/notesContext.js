import {
  getNotes,
  createNote,
  deleteNote,
  updateNote,
  getNote,
} from './api.service';

import { createContext, useContext, useEffect, useState } from 'react';

const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState({});

  useEffect(() => {
    refreshNotes();
  }, []);

  const refreshNotes = async () => {
    let allNotes = await getNotes().then(data => {
      console.log('data', data);
      let result = data.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      });
      return result;
    });

    setNotes(allNotes);
    setNote(allNotes[0]);
    console.log('notes', note);
  };
  return (
    <NotesContext.Provider value={{ notes, refreshNotes, note, setNote }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => {
  return useContext(NotesContext);
};
