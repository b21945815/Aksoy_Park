import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi'; 

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-grey-100);
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey-100);
  padding: 2rem;
  z-index: 1001;
  height: 100dvh;
  overscroll-behavior: none;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: var(--color-grey-0); /* Butonu hafif belirginleştirir */
  border: none;
  cursor: pointer;
  color: var(--color-grey-700);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.5rem;
  height: 4.5rem; 
  border-radius: 50%;
  transition: all 0.3s;
  z-index: 9999; 
  box-shadow: var(--shadow-sm); 

  &:hover, &:active {
    background-color: var(--color-grey-200);
  }

  & svg {
    width: 2.8rem;
    height: 2.8rem;
  }

  &:focus {
    outline: none;
  }
`;

const ProductPage = ({ onClose, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <ModalOverlay onClick={onClose} />
      <ModalContent>
        <CloseButton onClick={onClose}>
          <FiX />
        </CloseButton>
        {children}
      </ModalContent>
    </motion.div>
  );
};

export default ProductPage;