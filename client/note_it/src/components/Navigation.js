import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import './navigation.css';

export const Navigation = () => {
  return (
    <div className='navigation border-2 border-opacity-50 border-rounded-box shadow-sm'>
      <div className='nav-items'>
        <div className='flex flex-row justify-center'>
          <div className='avatar'>
            <div className='pr-2'>
              <img
                src='profile.jpeg'
                alt='avatar'
                className='w-24 rounded-full shadow-lg'
              />
            </div>
          </div>
          <span>Tarik</span>
        </div>
        <FaChevronDown />
      </div>
    </div>
  );
};
