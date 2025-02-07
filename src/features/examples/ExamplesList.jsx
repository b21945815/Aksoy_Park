import { useExamples } from './useExamples'
import { useState, useEffect } from 'react'
import Spinner from '../../ui/Spinner'
import SelectBox from '../../ui/SelectBox'
import styled from 'styled-components'
import ExamplesInformation from './ExamplesInformation'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const SelectBoxWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`

const ExamplesListWrapper = styled.div`
  flex: 1;
  padding: 20px;
  overflow-x: hidden;
  width: 100%;
  max-width: 1200px;
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

  const categories = examples.map(example => example.category)
  const filteredProducts = selectedCategory
    ? examples.find(cat => cat.category === selectedCategory)?.items || []
    : []

  return (
    <Container>
      <SelectBoxWrapper>
        <SelectBox
          categories={categories}
          selectedCategory={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
        />
      </SelectBoxWrapper>
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