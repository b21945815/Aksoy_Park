import styled from "styled-components";

const StyledUserImage = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.2rem;
  color: var(--color-grey-900);

  @media (max-width: 800px) {
    gap: 0.8rem;
    font-size: 1rem;
  }
`;

const Image = styled.img`
  display: block;
  width: 3.6rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-700);

  @media (max-width: 800px) {
    width: 2.8rem;
  }
`;

function UserImage() {
  return (
    <StyledUserImage>
      <Image src={"default-user.jpg"} />
      <span>{"Admin"}</span>
    </StyledUserImage>
  );
}

export default UserImage;
