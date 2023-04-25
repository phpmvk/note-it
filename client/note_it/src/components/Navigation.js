import React from 'react';
// import { FaChevronDown } from 'react-icons/fa';
import './navigation.css';
import { useNavigate } from 'react-router-dom';
import { useNotes } from '../notesContext';
import { NotebooksList } from './NotebooksList';

export const Navigation = () => {
  const navigate = useNavigate();
  const { searchNotes, noteBooks, setNoteBooks } = useNotes();
  const handleSearch = value => {
    console.log(value.target.value);
    searchNotes(value.target.value);
    console.log('search');
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
        <div className=' grid-h 30 flex flex-row justify-center justify-items-start my-4 '>
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
        <button className='grid-h30 w-full card my-š  hover:bg-gray-300   mb-4 rounded-box place-items-center  border-1 border-opacity-50  border-rounded-box shadow-sm rounded-md overflow-hidden '>
          Favorites
        </button>

        <button
          className='grid-h30 w-full card my-š  hover:bg-gray-300   mb-4 rounded-box place-items-center border-1 border-opacity-50  border-rounded-box shadow-sm rounded-md overflow-hidden '
          onClick={() => setNoteBooks(!noteBooks)}
        >
          Notebooks
        </button>
        <button
          className='grid-h30 w-full card my-š  hover:bg-gray-300   mb-4 rounded-box place-items-center border-1 border-opacity-50  border-rounded-box shadow-sm rounded-md overflow-hidden '
          onClick={() => navigate('/login')}
        >
          Logout
        </button>
      </div>
    </div>
  );
};
