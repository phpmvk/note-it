import React from 'react';
import './navigation.css';
import { useNavigate } from 'react-router-dom';
import { useNotes } from '../notesContext';
// import { NotebooksList } from './NotebooksList';

export const Navigation = () => {
  const navigate = useNavigate();
  const {
    searchNotes,
    noteBooks,
    setNoteBooks,
    refreshNotes,
    setNoteList,
    notes,
    setNote,
  } = useNotes();
  const handleSearch = value => {
    console.log(value.target.value);
    searchNotes(value.target.value);
    console.log('search');
  };
  const showAllNotes = () => {
    setNoteBooks(false);
    // setNoteList(notes);
    refreshNotes();
  };
  const showFavoriteNotes = async () => {
    await refreshNotes();
    setNoteBooks(false);

    let favoriteNotes = notes.filter(note => note.favorite === true);

    console.log('favoriteNotes', favoriteNotes);
    setNote(favoriteNotes[0]);
    setNoteList(favoriteNotes);
  };
  return (
    <div className=' navigation border-2 border-opacity-50 border-rounded-box shadow-sm'>
      <div className='flex flex-col w-full '>
        <input
          className='grid-h30 card mb-4 mt-0 '
          type='text'
          placeholder='Search'
          onKeyUp={e => handleSearch(e)}
        />
        <div className=' grid-h 40 flex flex-row justify-center justify-items-start my-7 '>
          <div className='avatar'>
            <div className=' pr-4'>
              <img
                src='profile.jpeg'
                alt='avatar'
                className=' avatar-pic w-24 rounded-full shadow-lg'
              />
            </div>
          </div>
          <span>Tarik</span>
        </div>
        <button
          className='grid-h40 w-full card pb-2   hover:bg-gray-300    rounded-box place-items-center  border-1 border-opacity-50  border-rounded-box shadow-sm rounded-md overflow-hidden '
          onClick={showFavoriteNotes}
        >
          Favorites
        </button>

        <button
          className='grid-h40 w-full card pb-2  hover:bg-gray-300    rounded-box place-items-center border-1 border-opacity-50  border-rounded-box shadow-sm rounded-md overflow-hidden '
          onClick={() => setNoteBooks(showAllNotes)}
        >
          Show all notes
        </button>
        <button
          className='grid-h40 w-full card pb-2  hover:bg-gray-300    rounded-box place-items-center border-1 border-opacity-50  border-rounded-box shadow-sm rounded-md overflow-hidden '
          onClick={() => setNoteBooks(!noteBooks)}
        >
          Notebooks
        </button>
        <button
          className='grid-h40 w-full card pb-2 hover:bg-gray-300     rounded-box place-items-center border-1 border-opacity-50  border-rounded-box shadow-sm rounded-md overflow-hidden '
          onClick={() => navigate('/login')}
        >
          Logout
        </button>
      </div>
    </div>
  );
};
