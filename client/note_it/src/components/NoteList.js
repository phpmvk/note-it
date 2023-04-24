import React from 'react';
import './noteList.css';
import { useNotes } from '../notesContext';
import { createNote } from '../api.service';

export const NoteList = () => {
  const { notes, refreshNotes, note, setNote } = useNotes();
  console.log('notes', notes);
  const addNote = async () => {
    let note = {
      title: '',
      body: '',
      notebook: [],
      user: '',
      date: new Date(),
    };
    await createNote(note);
    await refreshNotes();
  };
  const changeNote = note => {
    setNote(note);
  };

  return (
    <>
      <div className='noteList  pl-3 '>
        <div className='grid h-20 card bg-blue mt-0 rounded-box place-items-center border-2 border-opacity-50 border-rounded-box shadow-sm rounded-sm'>
          <button className='btn btn-primary ' onClick={addNote}>
            Add Note
          </button>
        </div>
        <div className='divider'></div>
        <div className='noteList__header py-5'>
          <div className='flex flex-col w-full border-opacity-50 '>
            {notes.map(note => {
              return (
                <>
                  <div
                    className='grid h-20 card bg-base-300 mb-3 rounded-box place-items-center border-2 border-opacity-50 border-rounded-box shadow-sm rounded-md overflow-hidden'
                    key={note._id}
                    onClick={() => changeNote(note)}
                  >
                    {note.title}
                  </div>
                  <div className='divider'></div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
