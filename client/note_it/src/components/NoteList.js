import React, { useEffect } from 'react';
import './noteList.css';
import { useNotes } from '../notesContext';
import { createNote } from '../api.service';

export const NoteList = () => {
  const { noteList, setNoteList, note, setNote, setNoteBooks, refreshNotes } =
    useNotes();
  console.log('notesList:', noteList);
  const addNote = async () => {
    let newNote = {
      title: 'Title',
      body: '',
      notebook: '',
      user: '',
      date: new Date(),
      favorite: false,
    };
    let note = await createNote(newNote);
    console.log('returned note:', note);
    setNote(note);

    // noteList.unshift(newNote);
    setNoteList(noteList);
  };
  // useEffect(() => {}, []);
  const changeNote = note => {
    // setNoteBooks(false);
    setNoteBooks(false);

    setNoteList(oldNoteList => {
      return oldNoteList.map(oldNote => {
        if (oldNote._id === note._id) {
          return note;
        } else {
          return oldNote;
        }
      });
    });
    setNote(note);
  };

  const ellipsify = str => {
    if (str && str.length > 10) {
      return str.substring(0, 10) + '...';
    } else {
      return str;
    }
  };

  return (
    <>
      <div className='noteList  ml-3 pt-12 border-2 border-opacity-50 border-rounded-box shadow-sm overflow-auto'>
        <div className='grid h-20 card mt-0 mb-0 rounded-box place-items-center border-2 border-opacity-50 border-rounded-box shadow-sm rounded-sm bg-gradient-to-r from-blue-500 to-blue-550 hover:from-blue-600 hover:to-blue-700'>
          <button className='btn btn-primary ' onClick={addNote}>
            Add Note
          </button>
        </div>
        <div className='divider'></div>
        <div className='noteList__header py-3 '>
          <div className='flex flex-col w-full border-opacity-50 '>
            <div
              className='grid h-20 card bg-base-300  hover:bg-gray-300 mb-3 rounded-box place-items-center border-2 border-opacity-50  border-rounded-box shadow-sm rounded-md overflow-hidden'
              key={note._id}
              onClick={() => changeNote(note)}
            >
              {ellipsify(note.title)}
              {/* {note.title} */}
            </div>
            <div className='divider'></div>

            {noteList
              .filter(element => element._id !== note._id)
              .map(note => {
                return (
                  <>
                    <div
                      className='grid h-20 card bg-base-300  hover:bg-gray-300 mb-3 rounded-box place-items-center border-2 border-opacity-50  border-rounded-box shadow-sm rounded-md overflow-hidden'
                      key={note._id}
                      onClick={() => changeNote(note)}
                    >
                      {ellipsify(note.title)}
                      {/* {note.title} */}
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
