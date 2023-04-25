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
  const [noteBooks, setNoteBooks] = useState(true);

  useEffect(() => {
    refreshNotes();
  }, []);

  const refreshNotes = async () => {
    console.log('refreshing  notes');
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
  const searchNotes = async search => {
    console.log('searchNotes value', search);
    if (search !== '') {
      let notes = await getNotes();
      console.log('searching notes');

      setNotes(
        notes.filter(
          note => note.body.includes(search) || note.title.includes(search)
        )
      );
      setNote(notes[0]);
    } else {
      refreshNotes();
    }
  };
  return (
    <NotesContext.Provider
      value={{
        notes,
        refreshNotes,
        note,
        setNote,
        searchNotes,
        noteBooks,
        setNoteBooks,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => {
  return useContext(NotesContext);
};
