import styled from 'styled-components';
import { useState } from 'react';
import { useProducts } from './useProducts';
import Spinner from '../../ui/Spinner';

const PageContainer = styled.div`
  display: flex;
  height: 100vh;
  overflow-y: auto;
`;

const Sidebar = styled.div`
  width: 250px;
  background: var(--color-grey-100);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  position: sticky;
  top: 0;
`;

const CategoryButton = styled.button`
  background: #008cba;
  color: white;
  border: none;
  padding: 10px 15px;
  margin: 5px 0;
  cursor: pointer;
  width: 100%;
  border-radius: 5px;
  transition: background 0.3s;

  &:hover {
    background: #005f73;
  }
`;

const ContentArea = styled.div`
  flex: 1;
  padding: 20px;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ProductCard = styled.div`
  position: relative;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProductImage = styled.img`
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  border: 5px solid var(--color-grey-300);
`;

const ProductName = styled.p`
  margin-top: 10px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`;

const FullscreenImageWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const FullscreenImage = styled.img`
  max-width: 90%;
  max-height: 90%;
`;

export default function ProductsList() {
  const { products, isLoading, error } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState("Elektronikler");
  const [fullscreenImage, setFullscreenImage] = useState(null);

  if (isLoading) return <Spinner />;
  if (error) return <div>Resimleri yüklerken hata oluştu</div>;

  const filteredProducts = selectedCategory
    ? products.find((cat) => cat.category === selectedCategory)?.items || []
    : [];

  return (
    <PageContainer>
      <Sidebar>
        {products.map(({ category }) => (
          <CategoryButton
            key={category}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </CategoryButton>
        ))}
      </Sidebar>

      <ContentArea>
        <ProductsGrid>
          {filteredProducts.map((item) => (
            <ProductCard key={item.name} onClick={() => setFullscreenImage(item.url)}>
              <ProductImage src={item.url} alt={item.name} />
              <ProductName>{item.name}</ProductName>
            </ProductCard>
          ))}
        </ProductsGrid>
      </ContentArea>

      {fullscreenImage && (
        <FullscreenImageWrapper onClick={() => setFullscreenImage(null)}>
          <FullscreenImage src={fullscreenImage} alt="Fullscreen Product" />
        </FullscreenImageWrapper>
      )}
    </PageContainer>
  );
}
