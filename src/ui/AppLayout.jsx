import { Outlet } from 'react-router-dom'
import Header from './Header'
import MobileFooter from './MobileFooter'
import MobileHeader from './MobileHeader'
import SmallHeader from './SmallHeader'
import React, { useState, useEffect } from 'react'
import Products from '../pages/ChildrenParkProducts'
import styled from 'styled-components'
import { AnimatePresence } from 'framer-motion'
import FloatingButtons from './FloatingButtons'

const StyledAppLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
`

const Main = styled.main`
  background-color: var(--color-grey-0);
  padding: 4rem 4.8rem 6.4rem;
  flex-grow: 1;

  @media (max-width: 800px) {
    padding: 2rem 1.6rem 3rem;
  }
`

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media (max-width: 800px) {
    padding: 0 1rem;
  }
`

const FooterContainer = styled.div`
  display: none;

  @media (max-width: 800px) {
    bottom: 0;
    display: block;
    width: 100%;
    z-index: 1000;
    background-color: var(--color-grey-000);
    padding: 1rem 1.6rem;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
  }
`

const CreditText = styled.div`
  position: fixed;
  left: 1rem;
  bottom: 1rem;
  font-size: 0.9rem;
  color: var(--color-grey-500);
  z-index: 1000;

  @media (max-width: 800px) {
    display: none;
  }
`

function AppLayout () {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showSmallHeader, setShowSmallHeader] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setShowSmallHeader(true)
      } else {
        setShowSmallHeader(false)
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <StyledAppLayout>
      {isMobile ? (
        <MobileHeader />
      ) : showSmallHeader ? (
        <SmallHeader openModal={openModal} />
      ) : (
        <></>
      )}
      {isMobile ? <></> : <Header openModal={openModal} />}
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>

      <AnimatePresence>
        {isModalOpen && <Products onClose={closeModal} />}
      </AnimatePresence>
      <FloatingButtons />

      <FooterContainer>
        <MobileFooter />
      </FooterContainer>

      {!isMobile && <CreditText>Fatih AY tarafından yapılmıştır</CreditText>}
    </StyledAppLayout>
  )
}

export default AppLayout