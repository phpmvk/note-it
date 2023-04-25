import React, { useState, useEffect } from 'react';
import './noteView.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNotes } from '../notesContext';
import { updateNote, deleteNote } from '../api.service';
import { useDebouncedCallback } from 'use-debounce';

export const NoteView = () => {
  const { notes, refreshNotes, note, setNote } = useNotes();

  useEffect(() => {
    if (notes.length > 0) {
      setNote(notes[0]);
    } else {
      setNote({
        title: '',
        body: '',
        date: '',
        id: '',
        notebook: [],
        favorite: false,
      });
    }

    console.log('notes', notes);
  }, [notes]);

  const debouncedBody = async value => {
    console.log('value', value);
    await setNote(oldNote => {
      return {
        ...oldNote,
        body: value,
      };
    });
    await updateDb(note);
  };
  const debouncedTitle = async value => {
    await setNote(oldNote => {
      return {
        ...oldNote,
        title: value.target.value,
      };
    });
    await updateDb(note);
  };
  const updateDb = useDebouncedCallback(note => {
    console.log('note', note);
    updateNote(note);
    refreshNotes();
  }, 3000);
  //delete note on click function
  const handleDeleteNote = async () => {
    console.log('note', note);
    console.log('delete note');
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
      <div className='noteView__header '>
        <input
          className='noteView__title mb-4 py-10 px-10 w-full text-2xl font-bold outline-none bg-neutral-100 border-2 border-opacity-30 border-rounded-box shadow-sm'
          type='text'
          value={note.title}
          onChange={debouncedTitle}
        />
      </div>
      <div>
        <ReactQuill
          theme='snow'
          placeholder='Write something amazing...'
          className='h-96 mb-3 '
          value={note.body}
          modules={modules}
          formats={formats}
          onChange={debouncedBody}
        />
      </div>
      <div className='mt-20 ml-30'>
        {/* delete note button */}
        <button
          type='button'
          class='bg-gradient-to-r from-red-600 to-red-650 hover:from-red-650 hover:to-red-700 ... mt-2 px-4 py-2 rounded-md text-black  absolute bottom-6 right-10'
          onClick={handleDeleteNote}
        >
          Delete Note
        </button>
      </div>
    </div>
  );
};
