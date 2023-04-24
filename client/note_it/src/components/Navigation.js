import React from 'react';
// import { FaChevronDown } from 'react-icons/fa';
import './navigation.css';

export const Navigation = () => {
  return (
    <div className=' navigation border-2 border-opacity-50 border-rounded-box shadow-sm'>
      <div className='flex flex-col w-full nav-items  items-start ml-6'>
        <div className=' grid-h 30 flex flex-row justify-center my-4 '>
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
        <div className='grid-h30 card my-4'>Favorites</div>
        <div className='grid-h30 card my-4'>Notebooks</div>
        <div className='grid-h30 card my-4'>Logout</div>
      </div>
    </div>
  );
};
