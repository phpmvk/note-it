import React from 'react';
import styled from 'styled-components';
import { FaChevronDown } from 'react-icons/fa';
import './navigation.css';

export const Navigation = () => {
  return (
    <NavigationStyled>
      <h1>Navigation</h1>
      <div className='nav-items'>
        <div>
          <img src='' alt='' />
          <span>Tarik</span>

          <FaChevronDown />
        </div>
      </div>
    </NavigationStyled>
  );
};

const NavigationStyled = styled.div`
  background-color: hsla(196, 62%, 58%, 1);
  color: #fff;
  flex: 2;
  height: 100%;
  max-width: 300px;
  border-radius: 0 0 0 10px;
  border: 1px solid #000;
  border-color: red;
`;
