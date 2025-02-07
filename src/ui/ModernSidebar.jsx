import styled from 'styled-components';

const SidebarWrapper = styled.div`
  width: 200px;
  background-color: #2c2c2c;
  padding: 20px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-right: 2px solid #1f1f1f;
`;

const CategoryButton = styled.button`
  background-color: #3a3a3a;
  color: white;
  border: none;
  padding: 10px 15px;
  text-align: left;
  width: 100%;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background 0.3s ease-in-out;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;

const ModernSidebar = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <SidebarWrapper>
      {categories.map((category) => (
        <CategoryButton
          key={category}
          onClick={() => onSelectCategory(category)}
          style={{ backgroundColor: selectedCategory === category ? '#444' : '#3a3a3a' }}
        >
          {category}
        </CategoryButton>
      ))}
    </SidebarWrapper>
  );
};

export default ModernSidebar;
