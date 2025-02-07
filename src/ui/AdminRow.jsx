import Table from './Table'
import Button from './Button'

export default function AdminRow ({
  url,
  name,
  handleImageClick,
  handleEditImage,
  handleDeleteImage
}) {
  return (
    <Table.Row>
      <div>{name}</div>
      <div>
        <img
          src={url}
          alt={name}
          style={{
            width: '50px', 
            height: '50px', 
            borderRadius: '50%' 
          }}
          onClick={() => handleImageClick(url)}
        />
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Button onClick={() => handleEditImage(name)}>Düzenle</Button>
        <Button onClick={() => handleDeleteImage(name)}>Sil</Button>
      </div>
    </Table.Row>
  )
}
