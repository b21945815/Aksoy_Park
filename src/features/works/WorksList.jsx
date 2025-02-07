import { useWorks } from './useWorks'
import Spinner from '../../ui/Spinner'
import styled from 'styled-components'
import WorkInformation from './WorkInformation'

const WorksListWrapper = styled.div`
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

const WorksList = () => {
  const { works, isLoading, error } = useWorks()

  if (isLoading) return <Spinner />

  if (error) {
    return <div>Resimleri yüklerken hata yaşandı</div>
  }
  if (!works || works.length === 0) 
    return <p>Sistemde resim bulunmamaktadır</p>
  return ( 
    <WorksListWrapper>
      <GridWrapper>
        {works.map((work, index) => (
          <WorkInformation key={index} name={work.name} link={work.url} />
        ))}
      </GridWrapper>
    </WorksListWrapper>
  )
}

export default WorksList
