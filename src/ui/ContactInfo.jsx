import styled from 'styled-components';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  color: var(--color-grey-900);
  font-size: 1.6rem;

  svg {
    margin-right: 0.5rem;
  }
`;

function ContactInfo({ phone, email }) {
  return (
    <ContactContainer>
      <ContactItem>
        <FaPhone />
        {phone}
      </ContactItem>
      <ContactItem>
        <FaEnvelope />
        {email}
      </ContactItem>
    </ContactContainer>
  );
}

export default ContactInfo;
