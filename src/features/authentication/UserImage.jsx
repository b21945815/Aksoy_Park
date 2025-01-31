import styled from "styled-components";
import { useUser } from "./useUser";

const StyledUserImage = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
`;

const Image = styled.img`
  display: block;
  width: 4rem;
  width: 3.6rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`;

function UserImage() {
  const { user } = useUser();
  const { fullName, userImage } = user.user_metadata;

  return (
    <StyledUserImage>
      <Image
        src={userImage || "default-user.jpg"}
        alt={`Image of ${fullName}`}
      />
      <span>{fullName}</span>
    </StyledUserImage>
  );
}

export default UserImage;
