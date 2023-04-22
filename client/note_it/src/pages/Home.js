import React from 'react';
// import { Wrapper } from '../components/Wrapper';
import { Navigation } from '../components/Navigation';
import { NoteView } from '../components/NoteView';
import { NoteList } from '../components/NoteList';
import './home.css';
import { NotesContext } from '../App';

export const Home = () => {
  return (
    <>
      <container className='container'>
        {/* <NotesContext.Consumer> */}
        <NoteView />
        {/* </NotesContext.Consumer> */}
        <NoteList />
        <Navigation />
      </container>
    </>
  );
};
