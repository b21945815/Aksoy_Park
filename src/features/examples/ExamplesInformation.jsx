import styled from 'styled-components'
import { useState } from 'react'
import FullscreenImagePage from '../../ui/FullscreenImagePage'

const ExamplesInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  position: relative;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`

const StyledImage = styled.img`
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  border: 5px solid var(--color-grey-300);

  @media (max-width: 768px) {
    max-height: 150px; /* Mobilde daha küçük yükseklik */
  }
`

const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px;
  opacity: 0;
  transition: opacity 0.3s ease;
  width: 100%;
  text-align: center;

  ${ExamplesInfoWrapper}:hover & {
    opacity: 1;
  }

  @media (max-width: 768px) {
    font-size: 14px; 
    padding: 3px;
  }
`

export default function ExamplesInformation ({ name, link }) {
  const [fullscreen, setFullscreen] = useState(false)

  const handleImageClick = () => {
    setFullscreen(true)
  }

  const closeFullscreen = () => {
    setFullscreen(false)
  }
  return (
    <>
      <ExamplesInfoWrapper onClick={handleImageClick}>
        <StyledImage src={link} alt={name} />
        <Title>{name}</Title>
      </ExamplesInfoWrapper>
      {fullscreen && (
        <FullscreenImagePage
          closeFullscreen={closeFullscreen}
          link={link}
          name={name}
        />
      )}
    </>
  )
}
