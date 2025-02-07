import styled from 'styled-components'
import { useState } from 'react'
import FullscreenImagePage from '../../ui/FullscreenImagePage'

const WorkInfoWrapper = styled.div`
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

  @media (max-width: 800px) {
    max-height: 200px; 
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

  ${WorkInfoWrapper}:hover & {
    opacity: 1;
  }

  @media (max-width: 800px) {
    font-size: 14px; 
    padding: 3px;
  }
`

export default function WorkInformation ({ name, link }) {
  const [fullscreen, setFullscreen] = useState(false)

  const handleImageClick = () => {
    setFullscreen(true)
  }

  const closeFullscreen = () => {
    setFullscreen(false)
  }
  return (
    <>
      <WorkInfoWrapper onClick={handleImageClick}>
        <StyledImage src={link} alt={name} />
        <Title>{name}</Title>
      </WorkInfoWrapper>
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
