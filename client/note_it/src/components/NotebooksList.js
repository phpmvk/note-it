import React from 'react';
import { useNotes } from '../notesContext';
import { Fragment } from 'react';
import './noteView.css';
// import { Menu, Transition } from '@headlessui/react';
// import { ChevronDownIcon } from '@heroicons/react/solid';

export const NotebooksList = () => {
  const { notes, setNotes, notebooks } = useNotes();

  return (
    <div className='noteView relative'>
      {
        <div className='noteView__title mb-4 py-10 px-10 w-full text-2xl font-bold outline-none bg-neutral-100 border-2 border-opacity-30 border-rounded-box shadow-sm'>
          <div>Notebooks</div>
          <div className='divider my-5'></div>

          {notes.map(note => {
            return (
              <>
                <div className='grid h-20 card bg-base-300 w-full  hover:bg-gray-300 mb-3 rounded-box place-items-center border-2 border-opacity-50  border-rounded-box shadow-sm rounded-md overflow-hidden'>
                  {note.notebook}

                  <div className='divider'></div>
                </div>
              </>
            );
          })}
        </div>
      }
    </div>
  );
};
