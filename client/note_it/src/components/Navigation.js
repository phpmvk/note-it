import React from 'react';
import styled from 'styled-components';
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

const NavigationStyled = styled.div`
  color: black;
  flex: 2;
  height: 100%;
  max-width: 300px;
  border-radius: 0 0 0 10px;
  shadow: 0 0 10px 0 gray;

  // border: 1px solid #000;
  // border-color: red;
  padding-top: 55px;
  padding-left: 20px;
  margin-left: 15px;
  background-color: #f5f5f5;
`;
