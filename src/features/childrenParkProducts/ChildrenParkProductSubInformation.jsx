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
`;

const ChildrenParkProductSubInformation = ({ item }) => {
  const sizeData = item.sizeData;
  const listData = item.listData;

  return (
    <Container>
      <Title>Özellikler</Title>
      <Text>Oturum Alanı: {sizeData[0]} Metre x {sizeData[1]} Metre</Text>
      <Text>Güvenli Kullanım Alanı: {sizeData[2]} Metre x {sizeData[3]} Metre</Text>

      <Title>Aktiviteler</Title>
      <List>
        {listData.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </List>

      <Text><strong>* Oyun grubu taşıyıcı direkleri Ø114 x 2mm TSE’li borulardan imal edilmektedir.</strong></Text>
    </Container>
  );
};

export default ChildrenParkProductSubInformation;
