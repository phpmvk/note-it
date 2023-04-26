import React from 'react';
import { useState } from 'react';
import { useNotes } from '../notesContext';

export const Notebooks = () => {
  const { notes } = useState();
  //  getting the list of notebooks from the notes
  const noteBooks = [];
  const notebooks = notes.map(note => {
    if (!noteBooks.includes(note.notebook)) {
      noteBooks.push(note.noteBook);
    }

    return noteBooks.filter(notebook => notebook.length > 0);
  });

  return (
    <div className='notebook-container flex flex-col w-80 border-2 border-opacity-50 border-rounded-box shadow-sm '>
      Notebooks
      <grid className='grid grid-cols-2 gap-4'>
        {notebooks.map(note => {
          return (
            <>
              <div className='grid h-20 card bg-base-300  hover:bg-gray-300 mb-3 rounded-box place-items-center border-2 border-opacity-50  border-rounded-box shadow-sm rounded-md overflow-hidden'>
                {note.notebook}

                <div className='divider'></div>
              </div>
            </>
          );
        })}
      </grid>
    </div>
  );
};
