import styled from 'styled-components';
import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FiMenu, FiChevronLeft } from 'react-icons/fi';
import Logo from './Logo';
import HeaderMenu from './HeaderMenu';
import Products from '../pages/Products';

const StyledHeader = styled.header`
  background-color: var(--color-green-100);
  color: var(--color-grey-900);
  padding: 0.1rem 1.6rem;
  display: flex;
  height: 12vh;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-between;
  position: relative;
  @media (max-width: 768px) {
    padding: 0.1rem 1.6rem;
    justify-content: space-between;
    height: 10vh;
  }
`;

const LogoContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background-color: var(--color-green-100);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--color-grey-900);
`;

const HamburgerMenu = styled.div`
    display: block;
    position: absolute;
    top: 15px;
    background-color: var(--color-green-100);
    left: 10px;
    cursor: pointer;
`;

const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-green-100);
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  padding-left: 2rem;
  transition: transform 0.3s ease-in-out;
  transform: ${(props) => (props.isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  z-index: 1000;
`;

const MenuLink = styled(Link)`
  font-size: 2rem;
  color: var(--color-grey-900);
  text-decoration: none;
  background-color: var(--color-green-100);
  margin-bottom: 2rem;
  transition: color 0.3s;
  &:hover {
    color: var(--color-grey-700);
  }
`;

const HeaderDescription = styled.div`
  font-size: 1.8rem;
  text-align: center;
  margin-top: 1rem;
  background-color: var(--color-green-100);
  color: var(--color-grey-900);
`;

const HeaderMenuContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: var(--color-green-100);
  flex-grow: 1;
`;

const BackButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

const Container = styled.div`
    background-color: var(--color-green-100);
`;

function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const location = useLocation();

  const getDescription = () => {
    switch (location.pathname) {
      case '/admin':
        return 'Admin Sayfası';
      case '/information':
        return 'Kurumsal';
      case '/works':
        return 'Çalışmalarımız';
      case '/examples':
        return 'Örnekler';
      default:
        return '';
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const openProducts = () => {
    setIsProductsOpen(true);
  };

  const closeProducts = () => {
    setIsProductsOpen(false);
  };

  return (
    <Container>
      <StyledHeader>
        <HamburgerMenu onClick={toggleMenu}>
          <FiMenu size={30} color="var(--color-grey-900)" />
        </HamburgerMenu>
        <LogoContainer>
          <Logo size="4rem" />
        </LogoContainer>
        <HeaderMenuContainer>
          <HeaderMenu isAuthenticated={false} />
        </HeaderMenuContainer>
      </StyledHeader>

      <MenuContainer isOpen={isMenuOpen}>
        <BackButton onClick={toggleMenu}>
          <FiChevronLeft size={30} color="var(--color-grey-900)" />
        </BackButton>
        <MenuLink to="/works" onClick={toggleMenu}>Çalışmalarımız</MenuLink>
        <MenuLink to="/examples" onClick={toggleMenu}>Örnekler</MenuLink>
        <MenuLink to="/information" onClick={toggleMenu}>Kurumsal</MenuLink>
        <MenuLink to="#" onClick={openProducts}>Ürünler</MenuLink>
      </MenuContainer>

      {isProductsOpen && <Products onClose={closeProducts} />}

      <HeaderDescription>{getDescription()}</HeaderDescription>
    </Container>
  );
}

export default MobileHeader;
