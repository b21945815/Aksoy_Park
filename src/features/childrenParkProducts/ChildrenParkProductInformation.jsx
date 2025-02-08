import styled from "styled-components";
import ChildrenParkProductMainInformation from "./ChildrenParkProductMainInformation";
import ChildrenParkProductSubInformation from "./ChildrenParkProductSubInformation";

const Container = styled.div`
  display: flex;
  flex-direction: ${({ isMobile }) => (isMobile ? 'column' : 'row')};
  align-items: center;
  gap: 20px;
  padding: 20px;
  background-color: var(--color-grey-200);
  border-radius: 12px;
`;

const ChildrenParkProductInformation = ({ isMobile }) => {
  return (
    <Container isMobile={isMobile}>
      <ChildrenParkProductMainInformation />
      <ChildrenParkProductSubInformation />
    </Container>
  );
};

export default ChildrenParkProductInformation;
