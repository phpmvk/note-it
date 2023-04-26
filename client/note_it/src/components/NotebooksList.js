import React from 'react';
import { useNotes } from '../notesContext';
import { Fragment } from 'react';
import './noteView.css';

export const NotebooksList = () => {
  const { notes, setNoteList, setNoteBooks } = useNotes();
  // getting the notebooks in sorted order
  function getNotebooks() {
    const notebooksArray = [];
    for (let i = 0; i < notes.length; i++) {
      if (!notebooksArray.includes(notes[i].notebook)) {
        notebooksArray.push(notes[i].notebook);
      }
    }
    return notebooksArray;
  }

  let notebooks = getNotebooks().sort();

  //filtering the notes by notebook

  const filterNotes = async notebook => {
    setNoteBooks(false);
    console.log('notebook', notebook);

    const filteredNotes = await notes.filter(note => {
      return note.notebook === notebook;
    });
    console.log('filteredNotes', filteredNotes);
    setNoteList(filteredNotes);
  };

  return (
    <div className='noteView relative'>
      {
        <div className='noteView__title mb-4 py-10 px-10 w-full text-2xl font-bold outline-none bg-neutral-100 border-2 border-opacity-30 border-rounded-box shadow-sm'>
          <div>Notebooks</div>
          <div className='divider my-5'></div>

          {notebooks.map(notebook => {
            return (
              <>
                <button
                  key={notebook.id}
                  className='grid h-20 card bg-base-300 w-full pt-2  hover:bg-gray-300 mb-3 rounded-box place-items-center border-2 border-opacity-50  border-rounded-box shadow-sm rounded-md overflow-hidden'
                  onClick={() => filterNotes(notebook)}
                >
                  {notebook}

                  <div className='divider'></div>
                </button>
              </>
            );
          })}
        </div>
      }
    </div>
  );
};
