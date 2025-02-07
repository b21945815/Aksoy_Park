import styled from 'styled-components'

const SidebarWrapper = styled.div`
  width: 220px;
  background-color: var(--color-grey-500);
  position: fixed;
  left: 0;
  display: flex;
  flex-direction: column;
`

const CategoryButton = styled.button`
  width: 100%;
  padding: 18px;
  border: none;
  background: var(--color-grey-400);
  color: white;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
  outline: none;
  box-shadow: none;

  &:focus,
  &:focus-visible {
    outline: none;
    box-shadow: none;
  }

  &:hover {
    background: linear-gradient(
      to right,
      var(--color-grey-500),
      var(--color-grey-400)
    );
  }
`

const ModernSidebar = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <SidebarWrapper>
      {categories.map(category => (
        <CategoryButton
          key={category}
          active={selectedCategory === category}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </CategoryButton>
      ))}
    </SidebarWrapper>
  )
}

export default ModernSidebar
