import React from 'react';
import styled from 'styled-components';
import { FaInstagram } from 'react-icons/fa';

const InstagramButtonStyled = styled.a`
  background-color: #E1306C;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 24px;
  margin-bottom: 10px;
  text-decoration: none;
`;

function InstagramButton() {
  return (
    <InstagramButtonStyled
      href="https://www.instagram.com/aksoypark"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaInstagram />
    </InstagramButtonStyled>
  );
}

export default InstagramButton;
