import React from 'react';
// import { Wrapper } from '../components/Wrapper';
import { Navigation } from '../components/Navigation';
import { NoteView } from '../components/NoteView';
import { NoteList } from '../components/NoteList';
import { NotebooksList } from '../components/NotebooksList';
import './home.css';
import { NotesContext } from '../App';
import { useNotes } from '../notesContext';

export const Home = () => {
  const { noteBooks } = useNotes();
  return (
    <>
      <div className='container h-4/5 pt-10'>
        {/* <NotesContext.Consumer> */}
        {noteBooks ? <NotebooksList /> : <NoteView />}
        {/* </NotesContext.Consumer> */}
        <NoteList />
        <Navigation />
      </div>
    </>
  );
};
