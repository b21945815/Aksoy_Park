import React from 'react'
import styled from 'styled-components'

const SelectBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

const StyledSelect = styled.select`
  padding: 12px;
  border-radius: 8px;
  background-color: var(--color-grey-100);
  color: var(--color-grey-800);
  font-size: 16px;
  cursor: pointer;
  outline: none;
  border: 1px solid var(--color-grey-400);
  transition: all 0.3s ease-in-out;
  appearance: none; 
  font-weight: 500;
  position: relative;
  width: 250px;

  &:hover {
    background-color: var(--color-grey-200);
  }

  &:focus {
    border-color: var(--color-blue-300);
    box-shadow: 0px 0px 8px rgba(35, 140, 197, 0.5);
  }
  
  /* Açılan select'in ok (caret) işareti için */
  background-image: url("data:image/svg+xml;utf8,<svg fill='%23374151' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 18px;

  /* Açılan menüdeki iç seçenekler */
  option {
    background-color: var(--color-grey-100);
    color: var(--color-grey-800);
    font-size: 16px;
    padding: 10px;
  }

  option:hover {
    background-color: var(--color-grey-300);
  }

  option:checked {
    background-color: var(--color-blue-100);
    color: var(--color-blue-700);
    font-weight: bold;
  }
`;


const SelectBox = ({ categories, selectedCategory, onChange }) => (
  <SelectBoxWrapper>
    <StyledSelect value={selectedCategory} onChange={onChange}>
      {categories.map((category, index) => (
        <option key={index} value={category}>
          {category}
        </option>
      ))}
    </StyledSelect>
  </SelectBoxWrapper>
)

export default SelectBox