import React, { useState } from 'react';
import { useChildrenParkProducts } from '../features/childrenParkProducts/useChildrenParkProducts';
import { useParams } from 'react-router-dom';
import Spinner from '../ui/Spinner';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  left:0;
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
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;

  @media (min-width: 800px) {
    flex-direction: row; 
    align-items: flex-start;
    margin-right: 40px;
    margin-left: 0; 
  }
`;

const MainImage = styled.img`
  max-width: 100%;
  height: auto;
  max-height: 400px;
  margin-right: 20px;

  @media (min-width: 800px) {
    max-width: 70%;
    margin-left: 20px; 
  }
`;

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
`;

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
`;

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
`;

function ChildrenParkProduct() {
  const { categoryName, itemName } = useParams(); 
  const { products, isLoading, error } = useChildrenParkProducts();
  const [selectedImage, setSelectedImage] = useState('');

  const categoryData = products?.find(product => product.category === categoryName);
  const itemData = categoryData?.items.find(item => item.name === itemName);
  
  const mainImage = selectedImage || itemData?.url;

  const handleThumbnailClick = (url) => {
    setSelectedImage(url);
  };

  if (isLoading) return <Spinner />;
  if (error) return <div>Resimleri yüklerken hata oluştu</div>;

  return (
    <Container>
      {itemData ? (
        <Content>
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
          <Text>{itemData.name}</Text>
        </Content>
      ) : (
        <Text>Ürün bulunamadı.</Text>
      )}
    </Container>
  );
}

export default ChildrenParkProduct;