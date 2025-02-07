import { useWorks } from './useWorks'
import { useState, useEffect } from 'react'
import Spinner from '../../ui/Spinner'
import SelectBox from '../../ui/SelectBox'
import styled from 'styled-components'
import WorkInformation from './WorkInformation'

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

const WorksListWrapper = styled.div`
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

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }
`

const WorksList = () => {
  const { works, isLoading, error } = useWorks()
  const [selectedCategory, setSelectedCategory] = useState(null)

  useEffect(() => {
    if (!isLoading && works.length > 0) {
      setSelectedCategory(works[0].category)
    }
  }, [works, isLoading])

  if (isLoading) return <Spinner />
  if (error) return <div>Resimleri yüklerken hata oluştu</div>

  const categories = works.map(work => work.category)
  const filteredProducts = selectedCategory
    ? works.find(cat => cat.category === selectedCategory)?.items || []
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
      <WorksListWrapper>
        <GridWrapper>
          {filteredProducts.map((work, index) => (
            <WorkInformation
              key={index}
              name={work.name}
              link={work.url}
            />
          ))}
        </GridWrapper>
      </WorksListWrapper>
    </Container>
  )
}

export default WorksList