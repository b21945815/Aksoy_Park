import { useWorks } from './useWorks'
import Spinner from '../../ui/Spinner'
import styled from 'styled-components'
import WorkInformation from './WorkInformation'

const WorksListWrapper = styled.div`
  padding: 20px;
`

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

const WorksList = () => {
  const { images, isLoading, error } = useWorks()

  if (isLoading) return <Spinner />

  if (error) {
    return <div>Resimleri yüklerken hata yaşandı</div>
  }
  if (!images || images.length === 0)
    return <p>Sistemde resim bulunmamaktadır</p>
  return (
    <WorksListWrapper>
      <GridWrapper>
        {images.map((image, index) => (
          <WorkInformation key={index} name={image.name} link={image.url} />
        ))}
      </GridWrapper>
    </WorksListWrapper>
  )
}

export default WorksList
