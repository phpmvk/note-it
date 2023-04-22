import {
  getNotes,
  // createNote,
  // deleteNote,
  updateNote,
  // getNote,
} from './api.service';

import { createContext, useContext, useEffect, useState } from 'react';

const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
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
    console.log('notes', allNotes);
  };
  return (
    <NotesContext.Provider value={{ notes, refreshNotes }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => {
  return useContext(NotesContext);
};
