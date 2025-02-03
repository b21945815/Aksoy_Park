import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ProductsList from '../features/products/ProductsList' 
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
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 5rem;
  color: var(--color-grey-700);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem; 
  border-radius: 50%;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--color-grey-800);
  }

  &:focus {
    outline: none;
  }

  &::before {
    content: '×';
    font-size: 5rem; 
    color: inherit;
  }
`;

const Products = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <ModalOverlay onClick={onClose} />
      <ModalContent>
        <CloseButton onClick={onClose}></CloseButton>
        <ProductsList>
        </ProductsList>
      </ModalContent>
    </motion.div>
  );
};

export default Products;
