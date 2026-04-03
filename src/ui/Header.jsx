import styled from 'styled-components'
import PropTypes from 'prop-types'
import HeaderMenu from './HeaderMenu'
import HeaderDescription from './HeaderDescription'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'
import Logo from './Logo'
import ContactInfo from './ContactInfo'

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const StyledHeader = styled.header`
  background-color: var(--color-green-100);
  color: var(--color-grey-900);
  padding: 1.5rem 4.8rem; 
  display: flex;
  flex-wrap: wrap; 
  gap: 2rem;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1200px) {
    padding: 1.5rem 2rem;
    justify-content: center; 
  }
`

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
  flex-wrap: wrap;

  @media (max-width: 1200px) {
    width: 100%;
    justify-content: space-between;
  }

  @media (max-width: 950px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
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

function Header ({ openModal }) {
  const location = useLocation()

  const getDescription = () => {
    switch (location.pathname) {
      case '/information':
        return 'Kurumsal'
      case '/works':
        return 'Çalışmalarımız'
      case '/examples':
        return 'Örnekler'
      default:
        return ''
    }
  }

  return (
    <HeaderWrapper>
      <StyledHeader>
        <HeaderLeft>
          <Logo />
          <NavLinks>
            <NavLink to='/information'>Kurumsal</NavLink>
            <NavLink to='/works'>Çalışmalarımız</NavLink>
            <NavLink to='/examples'>Örnekler</NavLink>
            <NavLink as='button' onClick={openModal}>
              <HamburgerWrapper>
                <FiMenu
                  size={20}
                  color='var(--color-grey-900)'
                  style={{ cursor: 'pointer' }}
                />
                <span>Çocuk Parkı Ürünleri</span>
              </HamburgerWrapper>
            </NavLink>
          </NavLinks>
        </HeaderLeft>
        
        <ContactInfo phone='+90 536 636 28 97' email='aksoypark@gmail.com' />
        <NavLinks>
          <HeaderMenu/>
        </NavLinks>
      </StyledHeader>
      
      <HeaderDescription>{getDescription()}</HeaderDescription>
    </HeaderWrapper>
  )
}

export default Header

Header.propTypes = {
  openModal: PropTypes.func.isRequired,
}