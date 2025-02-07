import React from 'react';
import styled from 'styled-components';

const SelectBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: fixed;
  left: 20px;
  top: 0;
`;

const StyledSelect = styled.select`
  padding: 12px 20px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background-color: #f0f0f0;
  color: #333;
  font-size: 18px;
  cursor: pointer;
  outline: none;
  width: 250px;

  &:focus {
    border-color: #888;
  }
`;

const SelectBox = ({ categories, selectedCategory, onChange }) => {
  return (
    <SelectBoxWrapper>
      <StyledSelect value={selectedCategory} onChange={onChange}>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </StyledSelect>
    </SelectBoxWrapper>
  );
};

export default SelectBox;
