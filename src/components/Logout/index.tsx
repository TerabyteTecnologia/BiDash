import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';

import { Visibility } from '../Visibility';
import { useAuth } from '../../contexts/Auth';

import {
  DropdownContainer,
  DropdownMenu,
  DropdownItem,
  IconWrapper
} from './styles';

const MenuDropdown = () => {

  const { handleLogout } = useAuth();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownContainer>
      <IconWrapper onClick={handleMenuClick}>
        <FaUserCircle size={24} color="#FFF" />
      </IconWrapper>

      <Visibility visible={isOpen}>
        <DropdownMenu>
          <DropdownItem onClick={handleLogout}>
            <FiLogOut /> Sair
          </DropdownItem>
        </DropdownMenu>
      </Visibility>
    </DropdownContainer>
  );
};

export default MenuDropdown;
