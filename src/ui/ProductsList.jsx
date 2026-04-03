import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import Spinner from './Spinner'
import FullscreenImagePage from './FullscreenImagePage'

const PageContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  overflow-y: auto;
  
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: stretch;
  }
`

const Sidebar = styled.div`
  width: 250px;
  background: var(--color-grey-50);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 1rem; 
  border-right: 1px solid var(--color-grey-200);
  position: sticky;
  top: 0;
  height: 100vh;

  @media (max-width: 800px) {
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
    width: 100%;
    height: 100%;
    position: relative;
    background: transparent;
    padding: 60px 15px 20px; 
    border-right: none;
  }
`

const CategoryButton = styled.button`
  background: transparent;
  color: var(--color-grey-700);
  border: 1px solid var(--color-grey-200);
  padding: 1.4rem 2rem;
  cursor: pointer;
  width: 100%;
  border-radius: 8px;
  transition: all 0.2s ease;
  font-size: 1.6rem;
  font-weight: 500;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover, &:focus {
    background: var(--color-green-100);
    color: var(--color-grey-900);
    border-color: var(--color-green-700);
  }

  &::after {
    content: '›';
    color: var(--color-grey-400);
    font-size: 2.2rem;
  }

  @media (max-width: 800px) {
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);
    box-shadow: var(--shadow-sm);
    padding: 1.8rem 2rem; 
    border-radius: 12px;
  }
`

const ContentArea = styled.div`
  flex: 1;
  padding: 20px;
`

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`


const ProductCard = styled.div`
  position: relative;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`

const ProductImage = styled.img`
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  border: 5px solid var(--color-grey-300);
`

const ProductName = styled.p`
  margin-top: 10px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  color: var(--color-grey-600);
`

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--color-grey-200);
  color: var(--color-grey-800);
  border: none;
  padding: 0.8rem 1.6rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.6rem;
  cursor: pointer;
  margin-bottom: 20px;
  transition: all 0.3s;

  &:hover {
    background-color: var(--color-green-100);
    color: var(--color-grey-900);
  }

  @media (min-width: 769px) {
    display: none;
  }
`
export default function ProductsList ({ useProducts, mainCategory, closeThisPage, onMobileClose }) {
  const { products, isLoading, error } = useProducts()
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [fullscreenImage, setFullscreenImage] = useState(null)
  const [fullscreenImageName, setFullscreenImageName] = useState(null)
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    if (!isLoading && products.length > 0) {
      const categoryFromURL = searchParams.get('category')

      if (
        categoryFromURL &&
        products.some(p => p.category === categoryFromURL)
      ) {
        setSelectedCategory(categoryFromURL)
      } else if (window.innerWidth >= 769) {
        setSelectedCategory(products[0].category)
      }
    }
  }, [products, isLoading, searchParams])

  if (isLoading) return <Spinner />
  if (error) return <div>Resimleri yüklerken hata oluştu</div>

  const filteredProducts = selectedCategory
    ? products.find(cat => cat.category === selectedCategory)?.items || []
    : []

  const handleCategoryChange = category => {
    setSelectedCategory(category)
    setSearchParams({ category })
  }
  return (
    <PageContainer>
      <Sidebar $isOpen={window.innerWidth >= 769 || !selectedCategory}>
        {products.map(({ category }) => (
          <CategoryButton
            key={category}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </CategoryButton>
        ))}
      </Sidebar>

      {selectedCategory && (
        <ContentArea>
          <BackButton onClick={() => setSelectedCategory(null)}>
            {'<-'}
          </BackButton>
          <ProductsGrid>
            {filteredProducts.map(item => (
              <ProductCard
                key={item.name}
                onClick={() => {
                  setFullscreenImage(item.url)
                  setFullscreenImageName(item.name)
                }}
              >
                <ProductImage src={item.url} alt={item.name} />
                <ProductName>{item.name}</ProductName>
              </ProductCard>
            ))}
          </ProductsGrid>
        </ContentArea>
      )}
      
      {fullscreenImage && (
        <FullscreenImagePage
          closeFullscreen={() => setFullscreenImage(null)}
          link={fullscreenImage}
          selectedCategory={selectedCategory}
          name={fullscreenImageName}
          mainCategory={mainCategory}
          closeThisPage={closeThisPage}
          onMobileClose={onMobileClose}
        >
        </FullscreenImagePage>
      )}
    </PageContainer>
  )
}
