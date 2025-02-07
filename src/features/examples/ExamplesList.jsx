import { useExamples } from './useExamples'
import { useState, useEffect } from 'react';
import Spinner from '../../ui/Spinner'
import ModernSidebar from '../../ui/ModernSidebar'
import styled from 'styled-components'
import ExamplesInformation from './ExamplesInformation'

const ExamplesListWrapper = styled.div`
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
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    if (!isLoading && window.innerWidth >= 769) {
      setSelectedCategory(examples.length > 0 ? examples[0].category : null);
    }
  }, [examples, isLoading]);

  if (isLoading) return <Spinner />

  if (error) {
    return <div>Resimleri yüklerken hata oluştu</div>
  }

  const filteredProducts = selectedCategory
    ? examples.find(cat => cat.category === selectedCategory)?.items || []
    : [];

  return (
    <ExamplesListWrapper>
      <GridWrapper>
        {filteredProducts.map((example, index) => (
          <ExamplesInformation key={index} name={example.name} link={example.url} />
        ))}
      </GridWrapper>
    </ExamplesListWrapper>
  )
}

export default ExamplesList
