import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const FullscreenImageWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`

const FullscreenImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  
  @media (max-width: 1400px) and (min-width: 768px) {
    max-width: 75%; 
    max-height: 80%;
  }
`

const DetailsButton = styled.button`
  position: absolute;
  ${props => (props.isMobile ? 'bottom: 10px;' : 'right: 10px; top: 50%; transform: translateY(-50%);')}
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }

  @media (max-width: 768px) {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
`

export default function FullscreenImagePage({ closeFullscreen, link, name, mainCategory, closeThisPage }) {
  const navigate = useNavigate()
  const isMobile = window.innerWidth <= 768
  const goToDetails = () => {
    closeThisPage()
    navigate(`/${mainCategory}/${name}`)
  }

  return (
    <FullscreenImageWrapper onClick={closeFullscreen}>
      <FullscreenImage src={link} alt={name} />
      {mainCategory && <DetailsButton isMobile={isMobile} onClick={goToDetails}>
        Ayrıntıya Git
      </DetailsButton>}
    </FullscreenImageWrapper>
  )
}
