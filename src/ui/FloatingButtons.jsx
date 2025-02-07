import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ScrollToTop from './ScrollToTop';
import InstagramButton from './InstagramButton';
import WhatsappButton from './WhatsappButton';

const ButtonContainer = styled.div`
  position: fixed;
  bottom: ${(props) => props.bottom}px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: bottom 0.3s ease-in-out;
`;

function FloatingButtons() {
  const [bottomSpacing, setBottomSpacing] = useState(20); 
  const isMobile = window.innerWidth <= 800
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      if (isMobile & (scrollY + windowHeight >= documentHeight - 40)) {
        setBottomSpacing(100); 
      } else {
        setBottomSpacing(20); 
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  return (
    <ButtonContainer bottom={bottomSpacing}>
      <ScrollToTop />
      <InstagramButton />
      <WhatsappButton />
    </ButtonContainer>
  );
}

export default FloatingButtons;
