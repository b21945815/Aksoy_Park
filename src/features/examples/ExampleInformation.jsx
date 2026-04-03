import styled from 'styled-components'
import { useState } from 'react'
import FullscreenImagePage from '../../ui/FullscreenImagePage'

const ExampleInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: var(--shadow-md);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
`

const StyledImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${ExampleInfoWrapper}:hover & {
    transform: scale(1.05);
  }

  @media (max-width: 800px) {
    height: 200px; 
  }
`

const TitleContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%);
  padding: 3rem 1.5rem 1.5rem;
  transform: translateY(20px);
  opacity: 0;
  transition: all 0.3s ease;

  ${ExampleInfoWrapper}:hover & {
    transform: translateY(0);
    opacity: 1;
  }
`

const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 600;
  color: white;
  text-align: center;
  margin: 0;
`

export default function ExampleInformation ({ name, link }) {
  const [fullscreen, setFullscreen] = useState(false)

  return (
    <>
      <ExampleInfoWrapper onClick={() => setFullscreen(true)}>
        <StyledImage src={link} alt={name} />
        <TitleContainer>
          <Title>{name}</Title>
        </TitleContainer>
      </ExampleInfoWrapper>
      {fullscreen && (
        <FullscreenImagePage
          closeFullscreen={() => setFullscreen(false)}
          link={link}
          name={name}
        />
      )}
    </>
  )
}