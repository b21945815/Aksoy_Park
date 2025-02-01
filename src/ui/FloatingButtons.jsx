import React from 'react';
import styled from 'styled-components';
import ScrollToTop from './ScrollToTop';
import InstagramButton from './InstagramButton';
import WhatsappButton from './WhatsappButton';

const ButtonContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function FloatingButtons() {
  return (
    <ButtonContainer>
      <ScrollToTop />
      <InstagramButton />
      <WhatsappButton />
    </ButtonContainer>
  );
}

export default FloatingButtons;
