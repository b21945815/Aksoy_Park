import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'

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

const DetailsButton = styled(motion.button)`
  position: absolute;
  ${props => (props.$isMobile ? 'bottom: 20px;' : 'right: 30px; bottom: 30px;')}
  padding: 1.2rem 2.4rem;
  background-color: var(--color-green-700);
  color: white;
  font-weight: 600;
  font-size: 1.6rem;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 800px) {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%) !important; 
    width: max-content;
  }
`
export default function FullscreenImagePage({ closeFullscreen, link, name, mainCategory, closeThisPage, onMobileClose, selectedCategory }) {
  const navigate = useNavigate()
  const isMobile = window.innerWidth <= 800

  const goToDetails = (e) => {
    e.stopPropagation();
    if (closeThisPage) closeThisPage()
    if (onMobileClose) onMobileClose()
    navigate(`/${mainCategory}/${selectedCategory}/${name}`)
  }

  return (
    <FullscreenImageWrapper onClick={closeFullscreen}>
      <motion.img 
        initial={{ scale: 0.8, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }} 
        transition={{ type: 'spring', damping: 20 }}
        src={link} 
        alt={name} 
        style={{ maxWidth: '90%', maxHeight: '90%', borderRadius: '8px' }}
      />
      {mainCategory && (
        <DetailsButton 
          $isMobile={isMobile} 
          onClick={goToDetails}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Ayrıntıya Git &rarr;
        </DetailsButton>
      )}
    </FullscreenImageWrapper>
  )
}