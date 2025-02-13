import styled from "styled-components";

const Container = styled.div`
  background-color: var(--color-grey-100);
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: auto;
  font-family: Arial, sans-serif;
`;

const Title = styled.h2`
  color: var(--color-grey-800);
  border-bottom: 2px solid var(color-grey-100); 
  padding-bottom: 5px;
  margin-bottom: 15px;
`;

const Text = styled.p`
  color: var(--color-grey-700);
  line-height: 1.5;
`;

const BoldText = styled.span`
  font-weight: bold;
`;

const ChildrenParkProductMainInformation = ({otherMessage}) => {
  return (
    <Container>
      {!otherMessage && <Text>-Oyun grubu taşıyıcı direkleri Ø114 x 2,5 mm TSE’li borulardan
      imal edilmektedir.</Text>}
      {otherMessage && <Text>- Tüm Ahşap Aksamlar 1. Sınıf Emprenyeli Sarı Çamdan İmal Edilmektedir.</Text>}
      <Text>
        Tüm metal aksama elektrostatik toz boya öncesi <BoldText>kumlama</BoldText> yapılmaktadır.
      </Text>
      <Title>Kumlama Nedir?</Title>
      <Text>
        Tüm metal aksamlarda imalat bittikten sonra kaynak bölgelerindeki gerilmeyi
        almak, yüzeyde boyanın daha iyi tutunmasını sağlamak, boyamaya engel olacak
        yağ, kir tabakası ile paslardan arındırmak amacıyla yapılan işleme{" "}
        <BoldText>kumlama</BoldText> denir. <BoldText>Kumlama</BoldText>, ürün ömrünü
        uzatarak metal yüzeyde oluşabilecek korozyon riskini azaltır.
      </Text>
    </Container>
  );
};

export default ChildrenParkProductMainInformation;
