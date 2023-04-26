import React, { useState, useEffect } from 'react';
import './noteView.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNotes } from '../notesContext';
import { updateNote, deleteNote } from '../api.service';
import { useDebouncedCallback } from 'use-debounce';

export const NoteView = () => {
  const { notes, refreshNotes, note, setNote, setNoteList, noteList } =
    useNotes();

  useEffect(() => {
    if (notes.length > 0) {
      setNote(notes[0]);
    } else {
      setNote({
        title: '',
        body: '',
        date: '',
        id: '',
        notebook: '',
        favorite: false,
      });
    }

    // console.log('notes', notes);
  }, [notes]);

  useEffect(() => {
    console.log('note updatedDB', note);
    updateDb(note);
  }, [note]);

  const debouncedBody = async value => {
    await setNote(oldNote => {
      return {
        ...oldNote,
        body: value,
      };
    });
  };
  const debouncedTitle = event => {
    // console.log('value:', event.target.value);

    setNote(oldNote => {
      const newNote = {
        ...oldNote,
        title: event.target.value,
      };

      return newNote;
    });
    console.log('new note:', note);
    // setNoteList(noteList.unshift(note));
  };
  const updateDb = useDebouncedCallback(note => {
    // console.log('note sent to the db', note);
    updateNote(note);
    // refreshNotes();
  }, 100);
  //delete note on click function
  const handleDeleteNote = async () => {
    // console.log('note', note);
    // console.log('delete note');
    await deleteNote(note);
    refreshNotes();
  };

  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ color: [] }, { background: [] }],
      [{ script: 'sub' }, { script: 'super' }],
      ['blockquote', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ indent: '-1' }, { indent: '+1' }, { align: [] }],
      ['link', 'image', 'video'],
      ['clean'],
    ],
  };
  const formats = [
    'font',
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'color',
    'background',
    'script',
    'blockquote',
    'code-block',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
  ];

  return (
    <div className='noteView relative'>
      <div className='noteView__header flex  '>
        <input
          className='noteView__title mb-4 py-10 px-10 w-full text-2xl font-bold outline-none bg-neutral-100 border-2 border-opacity-30 border-rounded-box shadow-sm'
          type='text'
          value={note.title}
          onChange={debouncedTitle}
        />
        <div className='notebook-dropdown mb-4 py-10 px-10 w-full text-2xl font-bold outline-none bg-neutral-100 border-2 border-opacity-30 border-rounded-box shadow-sm '>
          <select
            className='notebook-dropdown__select  bg-neutral-100'
            onChange={event => {
              setNote(oldNote => {
                return {
                  ...oldNote,
                  notebook: event.target.value,
                };
              });
            }}
          >
            <option value=''>Select Notebook</option>
            <option value='notebook1'>Notebook 1</option>
            <option value='notebook2'>Notebook 2</option>
            <option value='notebook3'>Notebook 3</option>
            <option value='notebook3'>Notebook 4</option>
          </select>
        </div>
      </div>

      <div>
        <ReactQuill
          theme='snow'
          placeholder='Write something amazing...'
          className='h-96 mb-3 overflow-auto'
          value={note.body}
          modules={modules}
          formats={formats}
          onChange={debouncedBody}
        />
      </div>
      <div className='mt-20 ml-30'>
        {/* add to favorites button */}
        <button
          type='button'
          className='bg-gradient-to-r from-blue-600 to-blue-650 hover:from-red-650 hover:to-blue-700 ... mt-2 px-4 py-2 rounded-md text-black  absolute bottom-6 left-10'
          onClick={() => {
            setNote(oldNote => {
              console.log('favorite', oldNote.favorite);
              return {
                ...oldNote,
                favorite: !oldNote.favorite,
              };
            });
          }}
        >
          Add Favorite
        </button>
      </div>
      <div className='mt-20 ml-30'>
        {/* delete note button */}
        <button
          type='button'
          className='bg-gradient-to-r from-red-600 to-red-650 hover:from-red-650 hover:to-red-700 ... mt-2 px-4 py-2 rounded-md text-black  absolute bottom-6 right-10'
          onClick={handleDeleteNote}
        >
          Delete Note
        </button>
      </div>
    </div>
  );
};
