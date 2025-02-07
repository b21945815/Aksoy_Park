import { useExamples } from './useExamples'
import Spinner from '../../ui/Spinner'
import styled from 'styled-components'
import ExampleInformation from './ExampleInformation'

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

  if (isLoading) return <Spinner />

  if (error) {
    return <div>Resimleri yüklerken hata oluştu</div>
  }
  if (!examples || examples.length === 0) 
    return <p>Sistemde resim bulunmamaktadır</p>
  return ( 
    <ExamplesListWrapper>
      <GridWrapper>
        {examples.map((example, index) => (
          <ExampleInformation key={index} name={example.name} link={example.url} />
        ))}
      </GridWrapper>
    </ExamplesListWrapper>
  )
}

export default ExamplesList
