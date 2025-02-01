import { Outlet } from 'react-router-dom'
import Header from './Header'
import SmallHeader from './SmallHeader'
import React, { useState, useEffect } from 'react'
import Products from '../pages/Products'
import styled from 'styled-components'
import { AnimatePresence } from 'framer-motion';

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100vh;
`

const Main = styled.main`
  background-color: var(--color-grey-0);
  padding: 4rem 4.8rem 6.4rem;
`

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`

function AppLayout () {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showSmallHeader, setShowSmallHeader] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {  
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
      {showSmallHeader && <SmallHeader openModal={openModal}/>}
      <Header openModal={openModal} />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>

      <AnimatePresence>
        {isModalOpen && <Products onClose={closeModal} />}
      </AnimatePresence>
    </StyledAppLayout>
  )
}

export default AppLayout
