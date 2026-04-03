import styled from 'styled-components';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const ContactLink = styled.a`
  display: flex;
  align-items: center;
  color: var(--color-grey-900);
  font-size: 1.6rem;
  text-decoration: none;
  transition: color 0.3s ease;

  svg {
    margin-right: 0.8rem;
    color: var(--color-green-900); 
  }

  &:hover {
    color: var(--color-green-900);
    transform: translateY(-2px);
  }
`;

function ContactInfo({ phone, email }) {
  const phoneLink = phone.replace(/\s+/g, '');

  return (
    <ContactContainer>
      <ContactLink href={`tel:${phoneLink}`}>
        <FaPhone />
        {phone}
      </ContactLink>
      <ContactLink href={`mailto:${email}`}>
        <FaEnvelope />
        {email}
      </ContactLink>
    </ContactContainer>
  );
}

export default ContactInfo;