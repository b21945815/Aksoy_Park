import styled from "styled-components";
import Logout from "../features/authentication/Logout";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineUser } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;

function HeaderMenu({ isAuthenticated }) {
  const navigate = useNavigate();
  if (isAuthenticated) {
    return (
      <StyledHeaderMenu>
        <li>
          <ButtonIcon onClick={() => navigate("/admin")}>
            <HiOutlineUser />
          </ButtonIcon>
        </li>
        <li>
          <DarkModeToggle />
        </li>
        <li>
          <Logout />
        </li>
      </StyledHeaderMenu>
    );
  }
  return (
    <StyledHeaderMenu>
      <li>
        <DarkModeToggle />
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
