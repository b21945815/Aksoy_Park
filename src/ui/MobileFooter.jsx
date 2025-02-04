import styled from 'styled-components'
import Logo from './Logo'

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 2rem;
  font-size: 1.4rem;
  color: var(--color-grey-900);
`

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  color: #000;
`

const WhoMade = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  color: #111;
`

const MobileFooter = () => {
  return (
    <FooterWrapper>
      <LogoWrapper>
        <Logo size="8rem"/>
      </LogoWrapper>
      <ContactInfo>
        <div>+90 536 636 28 97</div>
        <div>info@example.com</div>
        <div style={{ fontSize: '1.2rem', color: '#888' }}>Fatih AY tarafından yapılmıştır</div>
      </ContactInfo>
    </FooterWrapper>
  )
}

export default MobileFooter
