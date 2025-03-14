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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const buffer = 50; 
      
      if (isMobile && (scrollY + windowHeight >= documentHeight - buffer)) {
        setBottomSpacing(100); 
      } else {
        setBottomSpacing(20); 
      }
    };
    
    // Run initially
    handleResize();
    handleScroll();
    
    // Add event listeners
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
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