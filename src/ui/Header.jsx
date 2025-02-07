import styled from 'styled-components'
import HeaderMenu from './HeaderMenu'
import HeaderDescription from './HeaderDescription'
import UserImage from '../features/authentication/UserImage'
import { useUser } from '../features/authentication/useUser'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'
import Logo from './Logo'
import ContactInfo from './ContactInfo'

const StyledHeader = styled.header`
  background-color: var(--color-green-100);
  color: var(--color-grey-900);
  padding: 0.1rem 4.8rem;
  display: flex;
  height: 15vh;
  gap: 0.1rem;
  align-items: center;
  justify-content: space-between;
  position: relative; 
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

function Header ({ openModal }) {
  const { isLoading, isAuthenticated } = useUser()
  const location = useLocation()

  const getDescription = () => {
    switch (location.pathname) {
      case '/admin':
        return 'Admin Sayfası'
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
    <div style={{ height: '21vh' }}>
      <StyledHeader>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2.4rem' }}>
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
                <span>Ürünler</span>
              </HamburgerWrapper>
            </NavLink>
          </NavLinks>
        </div>
        <ContactInfo phone='+90 536 636 28 97' email='aksoypark@gmail.com' />
        <NavLinks>
          {isAuthenticated && <UserImage />}
          <HeaderMenu isAuthenticated={isAuthenticated} />
        </NavLinks>
      </StyledHeader>
      <HeaderDescription>{getDescription()}</HeaderDescription>
    </div>
  )
}

export default Header
