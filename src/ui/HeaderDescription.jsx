import styled from 'styled-components';

const StyledHeaderDescription = styled.div`
  background-color: var(--color-green-100);
  padding: 0.1rem 4.8rem 4rem;
  height: 6vh;
  font-size: 3rem;
  text-align: center;
  color: var(--color-grey-900);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: 5px; 
    background: linear-gradient(
      90deg,
      transparent,
      var(--color-green-700),
      transparent
    ); 
    border-radius: 2px;
  }
`;

function HeaderDescription({ children }) {
  return <StyledHeaderDescription>{children}</StyledHeaderDescription>;
}

export default HeaderDescription;