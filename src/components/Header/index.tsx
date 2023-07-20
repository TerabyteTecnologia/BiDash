import MenuDropdown from "../Logout";
import { HeaderContainer, HeaderIconMenu } from "./styles";

export function Header() {

  return (
    <HeaderContainer>
      <HeaderIconMenu>
        <MenuDropdown />
      </HeaderIconMenu>
    </HeaderContainer>
  );

}