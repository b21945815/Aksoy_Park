import styled from "styled-components";

const Container = styled.div`
  background-color: #eef5fc;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: auto;
  font-family: Arial, sans-serif;
`;

const Title = styled.h2`
  color: #2c3e50;
  border-bottom: 2px solid #2980b9;
  padding-bottom: 5px;
  margin-bottom: 15px;
`;

const Text = styled.p`
  color: #34495e;
  line-height: 1.5;
`;

const List = styled.ul`
  color: #34495e;
  line-height: 1.5;
  padding-left: 20px;
`;

const ChildrenParkProductSubInformation = () => {
  return (
    <Container>
      <Title>Özellikler</Title>
      <Text>Oturum Alanı: 3.5mt x 5.5mt</Text>
      <Text>Güvenli Kullanım Alanı: 6mt x 7.5mt</Text>
      
      <Title>Aktiviteler</Title>
      <List>
        <li>Platform: 1 Adet</li>
        <li>Merdiven: 1 Adet</li>
        <li>H:100 Düz Kaydırak: 1 Adet</li>
        <li>Çatı: 1 Adet</li>
        <li>Salıncak: 2 Adet</li>
        <li>Metal Pano: 2 Adet</li>
        <li>Metal Kaydırak Panosu: 1 Adet</li>
      </List>
      
      <Text><strong>* Oyun grubu taşıyıcı direkleri Ø114 x 2mm TSE’li borulardan imal edilmektedir.</strong></Text>
    </Container>
  );
};

export default ChildrenParkProductSubInformation;
