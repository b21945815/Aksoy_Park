import React, { useState, useEffect } from 'react'
import { useChildrenParkProducts } from '../features/childrenParkProducts/useChildrenParkProducts'
import ChildrenParkProductInformation from '../features/childrenParkProducts/ChildrenParkProductInformation'
import { useParams } from 'react-router-dom'
import Spinner from '../ui/Spinner'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  width: 100%;
  margin: 0;
`

const RowContainer = styled.div`
  display: flex;
  flex-direction: column; /* Change to column to stack children vertically */
  height: 100%;
  width: 100%;
  margin: 0;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;

  @media (min-width: 800px) {
    /* Adjustments for larger screens if necessary */
    flex-direction: column; /* Ensure it remains column on larger screens */
    align-items: center;
    justify-content: flex-start;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;

  @media (min-width: 800px) {
    flex-direction: row;
    align-items: flex-start;
    margin-right: 40px;
    margin-left: 0;
  }
`

const MainImage = styled.img`
  max-width: 100%;
  max-height: 500px;
  align-items: center;
  margin-right: 20px;

  @media (min-width: 800px) {
    max-width: 70%;
    margin-left: 20px;
  }
`

const ThumbnailsContainer = styled.div`
  display: flex;
  overflow-x: auto;
  margin-top: 10px;
  width: 100%;
  max-height: 400px;
  padding-top: 10px;

  @media (min-width: 800px) {
    flex-direction: column;
    margin-top: 0;
    overflow-y: auto;
    width: 100px;
  }
`

const Thumbnail = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  margin-right: 10px;
  cursor: pointer;
  border: 2px solid ${props => (props.isSelected ? '#007bff' : 'transparent')};
  border-radius: 5px;

  &:hover {
    opacity: 0.7;
  }

  @media (min-width: 800px) {
    width: 60px;
    height: 60px;
    margin-right: 0;
    margin-bottom: 10px;
  }
`

const Text = styled.p`
  font-size: 1.2rem;
  margin-top: 10px;
  text-align: left;
  max-width: 100%;

  @media (min-width: 800px) {
    text-align: left;
    margin-left: 40px;
    margin-top: 0;
    max-width: 600px;
  }
`

function ChildrenParkProduct () {
  const { categoryName, itemName } = useParams()
  const [isMobile, setIsMobile] = useState(false)
  const { products, isLoading, error } = useChildrenParkProducts()
  const [selectedImage, setSelectedImage] = useState('')

  const categoryData = products?.find(
    product => product.category === categoryName
  )
  const itemData = categoryData?.items.find(item => item.name === itemName)

  const mainImage = selectedImage || itemData?.url

  const handleThumbnailClick = url => {
    setSelectedImage(url)
  }

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

  if (isLoading) return <Spinner />
  if (error) return <div>Resimleri yüklerken hata oluştu</div>

  return (
    <Container>
      {itemData ? (
        <Content>
          <RowContainer>
            <ImageContainer>
              <ThumbnailsContainer>
                {itemData.subUrls?.map((url, index) => (
                  <Thumbnail
                    key={index}
                    src={url}
                    alt={`Thumbnail ${index + 1}`}
                    isSelected={mainImage === url}
                    onClick={() => handleThumbnailClick(url)}
                  />
                ))}
              </ThumbnailsContainer>
              <MainImage src={mainImage} alt={itemData.name} />
            </ImageContainer>
            <ChildrenParkProductInformation></ChildrenParkProductInformation>
          </RowContainer>
        </Content>
      ) : (
        <Text>Ürün bulunamadı.</Text>
      )}
    </Container>
  )
}

export default ChildrenParkProduct
