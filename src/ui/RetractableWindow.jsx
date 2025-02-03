import styled from 'styled-components'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import Heading from './Heading'

const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
  gap: 3rem;
`

const ToggleButton = styled.button`
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  background-color: var(--color-blue-100);
  color: var(--color-blue-700);
  width: 40px;
  height: 40px;
  border-radius: 50%;
`
function RetractableWindow ({ toggleTableVisibility, isTableVisible, text }) {
  return (
    <HeaderContainer>
      <Heading as='h1'>{text}</Heading>
      <ToggleButton onClick={toggleTableVisibility}>
        {isTableVisible ? <FaChevronUp /> : <FaChevronDown />}
      </ToggleButton>
    </HeaderContainer>
  )
}
export default RetractableWindow
