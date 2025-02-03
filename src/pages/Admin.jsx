import styled from 'styled-components'
import { useState } from 'react'
import Button from '../ui/Button'
import RetractableWindow from '../ui/RetractableWindow'
import { useWorks } from '../features/works/useWorks'
//import FullscreenImagePage from '../ui/FullscreenImagePage'
import WorkRow from '../features/works/WorkRow'
import Table from '../ui/Table'
import Menus from '../ui/Menus'
import Spinner from '../ui/Spinner'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

function Admin () {
  const { images, isLoading, error, addImage, editImage, deleteImage } =
    useWorks()
  const [selectedImage, setSelectedImage] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isTableVisible, setIsTableVisible] = useState(false)

  const handleAddImage = async () => {
    const newImage = {
      name: 'New Image',
      url: 'https://example.com/new-image.jpg'
    }
    await addImage(newImage)
  }

  const handleEditImage = async imageName => {
    const updatedImage = {
      name: 'Updated Image',
      url: 'https://example.com/updated-image.jpg'
    }
    await editImage(imageName, updatedImage)
  }

  const handleDeleteImage = async imageName => {
    await deleteImage(imageName)
  }

  const handleImageClick = imageUrl => {
    setSelectedImage(imageUrl)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedImage(null)
  }

  const toggleTableVisibility = () => {
    setIsTableVisible(!isTableVisible)
  }

  if (isLoading) return <Spinner />
  if (error) return <div>Veriyi yüklerken hata yaşandı</div>

  return (
    <>
      <Container>
        <RetractableWindow
          text='Çalışmalarımız'
          toggleTableVisibility={toggleTableVisibility}
          isTableVisible={isTableVisible}
        ></RetractableWindow>
        {isTableVisible && <Button onClick={handleAddImage}>Ekle</Button>}
      </Container>
      {isTableVisible && (
        <Menus>
          <Table columns='0.6fr 2fr 2.4fr'>
            <Table.Header>
              <div>İsim</div>
              <div>Fotoğraf</div>
              <div>Aksiyonlar</div>
              <div></div>
            </Table.Header>

            <Table.Body
              data={images}
              render={image => (
                <WorkRow
                  url={image.url}
                  name={image.name}
                  handleImageClick={handleImageClick}
                  handleEditImage={handleEditImage}
                  handleDeleteImage={handleDeleteImage}
                />
              )}
            />
          </Table>
        </Menus>
      )}

      {/* {isModalOpen && (
        <FullscreenImagePage
          closeFullscreen={closeModal}
          link={selectedImage}
          name={'Full Screen'}
        ></FullscreenImagePage>
      )} */}
    </>
  )
}

export default Admin
