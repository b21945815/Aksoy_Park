import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useProducts } from './useProducts';
import Spinner from '../../ui/Spinner';
import FullscreenImagePage from '../../ui/FullscreenImagePage';

const PageContainer = styled.div`
  display: flex;
  height: 100vh;
  overflow-y: auto;
  @media (max-width: 768px) {
    flex-direction: column;
  }
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

  @media (max-width: 768px) {
    display: ${props => (props.isOpen ? 'flex' : 'none')};
    position: fixed;
    width: 100%;
    height: auto;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    background: var(--color-grey-100);
    padding: 10px;
  }
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
  margin-top: 50px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
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
  color: var(--color-grey-400);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: var(--color-grey-900);
  color: var(--color-grey-000);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #005f73;
  }
`;

const BackButton = styled.button`
  position: absolute;
  top: 15px;
  left: 15px;
  background: none;
  color: var(--color-grey-800);
  border: none;
  width: 40px; 
  height: 40px;
  border-radius: 50%; 
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px; 
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;

  &:hover {
    background-color:  #005f73; 
    transform: scale(1.1); 
  }

  @media (min-width: 769px) {
    display: none; 
  }
`;

export default function ProductsList() {
  const { products, isLoading, error } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    if (window.innerWidth >= 769) {
      setSelectedCategory(products.length > 0 ? products[0].category : null);
    }
  }, [products]);

  if (isLoading) return <Spinner />;
  if (error) return <div>Resimleri yüklerken hata oluştu</div>;

  const filteredProducts = selectedCategory
    ? products.find(cat => cat.category === selectedCategory)?.items || []
    : [];

  return (
    <PageContainer>
      <Sidebar isOpen={window.innerWidth >= 769 || !selectedCategory}>
        {products.map(({ category }) => (
          <CategoryButton
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              setSidebarOpen(false);
            }}
          >
            {category}
          </CategoryButton>
        ))}
      </Sidebar>

      {selectedCategory && (
        <ContentArea>
          <BackButton onClick={() => setSelectedCategory(null)}>{"<-"}</BackButton>
          <ProductsGrid>
            {filteredProducts.map(item => (
              <ProductCard
                key={item.name}
                onClick={() => setFullscreenImage(item.url)}
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
          name={'Fullscreen Product'}
        >
          <CloseButton onClick={() => setFullscreenImage(null)}>&times;</CloseButton>
        </FullscreenImagePage>
      )}
    </PageContainer>
  );
}
