import React from 'react';
import styled from 'styled-components';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsappButtonStyled = styled.a`
  background-color: #25D366;
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

function WhatsappButton() {
  return (
    <WhatsappButtonStyled
      href="https://wa.me/905366362897"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp />
    </WhatsappButtonStyled>
  );
}

export default WhatsappButton;
