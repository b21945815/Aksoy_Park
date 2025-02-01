import styled from 'styled-components'
import { FiMenu } from 'react-icons/fi'
import Logo from './Logo'
import ContactInfo from './ContactInfo'
import HeaderMenu from './HeaderMenu'
import { Link } from 'react-router-dom'

const StyledHeader = styled.header`
  background-color: var(--color-grey-100);
  color: var(--color-grey-200);
  padding: 0.1rem 1rem;
  display: flex;
  height: 10vh;
  gap: 0.1rem;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  opacity: 0;  
  transition: opacity 0.3s ease;
`

const SmallHeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`

const NavLink = styled(Link)`
  font-size: 1.6rem;
  color: var(--color-grey-900);
  text-decoration: none;
  position: relative;
  transition: color 0.3s;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: inline-block;

  &:hover {
    color: var(--color-grey-700);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--color-grey-700);
    transition: width 0.3s;
  }

  &:hover::after {
    width: 100%;
  }
`

const HamburgerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`

function SmallHeader ({ openModal }) {

  return (
    <StyledHeader style={{ opacity: 1 }}> 
      <SmallHeaderContent>
        <Logo size="7rem"/>
        <NavLinks>
          <NavLink to='/information'>Kurumsal</NavLink>
          <NavLink to='/works'>Çalışmalarımız</NavLink>
          <NavLink as='button' onClick={openModal}>
            <HamburgerWrapper>
              <FiMenu
                size={20}
                color='var(--color-grey-900)'
                style={{ cursor: 'pointer' }}
              />
              <span>Ürünler</span>
            </HamburgerWrapper>
          </NavLink>
        </NavLinks>
      </SmallHeaderContent>
      <ContactInfo phone='+1 234 567 890' email='info@example.com' />
      <NavLinks>
        <HeaderMenu isAuthenticated={false} />
      </NavLinks>
    </StyledHeader>
  )
}

export default SmallHeader
