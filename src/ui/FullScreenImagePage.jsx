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
`
export default function FullscreenImagePage ({closeFullscreen, link, name}) {
  return (
    <FullscreenImageWrapper onClick={closeFullscreen}>
      <FullscreenImage src={link} alt={name} />
    </FullscreenImageWrapper>
  )
}
