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

const ContactLink = styled.a`
  color: inherit;
  text-decoration: none;
  margin-bottom: 0.2rem;
`

const MobileFooter = () => {
  return (
    <FooterWrapper>
      <LogoWrapper>
        <Logo size="8rem"/>
      </LogoWrapper>
      <ContactInfo>
        <ContactLink href="tel:+905366362897">+90 536 636 28 97</ContactLink>
        <ContactLink href="mailto:aksoypark@gmail.com">aksoypark@gmail.com</ContactLink>
        <div style={{ fontSize: '1.2rem', color: '#888', marginTop: '0.4rem' }}>Fatih AY tarafından yapılmıştır</div>
      </ContactInfo>
    </FooterWrapper>
  )
}

export default MobileFooter
