import { useWorks } from './useWorks'
import Spinner from '../../ui/Spinner'
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
  const { images, isLoading, error } = useWorks()

  if (isLoading) return <Spinner />

  if (error) {
    return <div>Resimleri yüklerken hata yaşandı</div>
  }
  if (!images || images.length === 0)
    return <p>Sistemde resim bulunmamaktadır</p>
  return (
    <ExamplesListWrapper>
      <GridWrapper>
        {images.map((image, index) => (
          <ExamplesInformation key={index} name={image.name} link={image.url} />
        ))}
      </GridWrapper>
    </ExamplesListWrapper>
  )
}

export default ExamplesList
