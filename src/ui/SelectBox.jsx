import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const SelectContainer = styled.div`
  position: relative;
  width: 280px;
  margin: 0 auto;
`;

const SelectHeader = styled.div`
  padding: 1.2rem 1.6rem;
  background-color: var(--color-grey-0);
  color: var(--color-grey-800);
  font-size: 1.6rem;
  font-weight: 500;
  border: 1px solid ${({ $isOpen }) => ($isOpen ? 'var(--color-green-700)' : 'var(--color-grey-300)')};
  border-radius: 12px;
  box-shadow: ${({ $isOpen }) => ($isOpen ? '0 0 0 3px rgba(34, 221, 100, 0.2)' : 'var(--shadow-sm)')};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--color-green-700);
  }

  svg {
    width: 2rem;
    height: 2rem;
    color: var(--color-grey-500);
    transition: transform 0.3s ease;
    transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0)')};
  }
`;

const SelectList = styled.ul`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  width: 100%;
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  border-radius: 12px;
  box-shadow: var(--shadow-lg);
  overflow: hidden;
  z-index: 100;
  margin: 0;
  padding: 0;
  list-style: none;
  
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transform: ${({ $isOpen }) => ($isOpen ? 'translateY(0)' : 'translateY(-10px)')};
  transition: all 0.3s ease;
`;

const SelectListItem = styled.li`
  padding: 1.2rem 1.6rem;
  font-size: 1.6rem;
  color: var(--color-grey-800);
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: var(--color-green-100); 
    color: var(--color-grey-900);
  }

  ${({ $isSelected }) =>
    $isSelected &&
    `
    background-color: var(--color-green-700);
    color: white;
    font-weight: 600;

    &:hover {
      background-color: var(--color-green-700);
      color: white;
    }
  `}
`;

const SelectBox = ({ categories, selectedCategory, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Menü açıkken dışarı bir yere tıklanırsa menüyü kapat
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const handleSelect = (category) => {
    onChange({ target: { value: category } });
    setIsOpen(false);
  };

  return (
    <SelectContainer ref={containerRef}>
      <SelectHeader $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        {selectedCategory || "Kategori Seçin"}
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </SelectHeader>

      <SelectList $isOpen={isOpen}>
        {categories.map((category, index) => (
          <SelectListItem
            key={index}
            $isSelected={category === selectedCategory}
            onClick={() => handleSelect(category)}
          >
            {category}
          </SelectListItem>
        ))}
      </SelectList>
    </SelectContainer>
  );
};

export default SelectBox;