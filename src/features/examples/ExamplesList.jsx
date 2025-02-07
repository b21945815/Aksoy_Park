import { useExamples } from './useExamples'
import { useState, useEffect } from 'react'
import Spinner from '../../ui/Spinner'
import styled from 'styled-components'
import ExamplesInformation from './ExamplesInformation'
import ModernSidebar from '../../ui/ModernSidebar'

const Container = styled.div`
  display: flex;
`

const SidebarWrapper = styled.div`
  width: 220px;
`

const ExamplesListWrapper = styled.div`
  flex: 1;
  padding: 20px;
  overflow-x: hidden;
`

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }
`

const ExamplesList = () => {
  const { examples, isLoading, error } = useExamples()
  const [selectedCategory, setSelectedCategory] = useState(null)

  useEffect(() => {
    if (!isLoading && examples.length > 0) {
      setSelectedCategory(examples[0].category)
    }
  }, [examples, isLoading])

  if (isLoading) return <Spinner />
  if (error) return <div>Resimleri yüklerken hata oluştu</div>

  const filteredProducts = selectedCategory
    ? examples.find(cat => cat.category === selectedCategory)?.items || []
    : []

  return (
    <Container>
      <SidebarWrapper>
        <ModernSidebar
          categories={examples.map(cat => cat.category)}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </SidebarWrapper>

      <ExamplesListWrapper>
        <GridWrapper>
          {filteredProducts.map((example, index) => (
            <ExamplesInformation
              key={index}
              name={example.name}
              link={example.url}
            />
          ))}
        </GridWrapper>
      </ExamplesListWrapper>
    </Container>
  )
}

export default ExamplesList
