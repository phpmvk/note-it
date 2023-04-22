import React, { useState, useEffect } from 'react';
import './noteView.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNotes } from '../notesContext';
import { updateNote } from '../api.service';
import { useDebouncedCallback } from 'use-debounce';

export const NoteView = () => {
  const { notes } = useNotes();
  const [value, setValue] = useState('');
  const [note, setNote] = useState('');
  const [title, setTitle] = useState('');
  // let [debouncedValue] = useDebounce(value, 1000);
  useEffect(() => {
    setNote(notes[0]);
  }, [notes]);

  useEffect(() => {
    setValue(note?.body);
    setTitle(note?.title);
  }, [note]);

  const debounced = async value => {
    await setValue(value);
    console.log(value);
    updateDb(value);
  };
  const updateDb = useDebouncedCallback(value => {
    let note = { ...notes[0], value };
    updateNote(note);
  }, 1000);

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

  // console.log(value);

  // setValue(notevalue);
  // const [date, setDate] = React.useState('');
  // const [id, setId] = React.useState('');
  // console.log('notes', notes);
  return (
    <div className='noteView '>
      <div className='noteView__header'>
        <input
          className='noteView__title'
          type='text'
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>

      <ReactQuill
        theme='snow'
        placeholder='Write something amazing...'
        className='min-h-screen'
        value={value}
        modules={modules}
        formats={formats}
        onChange={debounced}
      />
    </div>
  );
};
