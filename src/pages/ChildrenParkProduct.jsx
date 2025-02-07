import React, { useState } from 'react';
import { useChildrenParkProducts } from '../features/childrenParkProducts/useChildrenParkProducts';
import { useParams } from 'react-router-dom';
import Spinner from '../ui/Spinner';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
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

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px; /* Resim için daha geniş bir alan */
  margin-right: 20px;

  @media (min-width: 768px) {
    flex-direction: row; /* Resim ve thumbnail'lar yan yana */
    align-items: flex-start;
    margin-right: 40px;
    margin-left: 0; /* Resmi sola yasla */
  }
`;

const MainImage = styled.img`
  max-width: 100%;
  height: auto;
  max-height: 700px; /* Resim daha büyük */
  margin-right: 20px; /* Thumbnail'lar ile arasında boşluk */

  @media (min-width: 768px) {
    max-width: 80%; /* Resim daha geniş */
    margin-left: 20px; /* Sola biraz boşluk */
  }
`;

const ThumbnailsContainer = styled.div`
  display: flex;
  overflow-x: auto;
  margin-top: 10px;
  width: 100%;
  padding-top: 10px; 

  @media (min-width: 768px) {
    flex-direction: column; 
    margin-top: 0; /* Thumbnail'lar ana resmin yanında */
    overflow-y: auto;
    max-height: 700px; /* Ana resimle aynı yükseklik */
    width: 100px; /* Thumbnail'lar için sabit genişlik */
  }
`;

const Thumbnail = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 10px;
  cursor: pointer;
  border: 2px solid ${props => (props.isSelected ? '#007bff' : 'transparent')};
  border-radius: 5px;

  &:hover {
    opacity: 0.7;
  }

  @media (min-width: 768px) {
    width: 60px;
    height: 60px;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

const Text = styled.p`
  font-size: 1.2rem;
  margin-top: 10px;
  text-align: center;
  max-width: 500px; 

  @media (min-width: 768px) {
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
  
  // Fallback to the first URL if there's no selected image
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
            <MainImage src={mainImage} alt={itemData.name} />
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