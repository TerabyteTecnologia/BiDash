import {
  FaUserCog,
  FaBalanceScale,
  FaUserCheck,
  FaChartBar
} from 'react-icons/fa';

import { LuLayoutDashboard } from "react-icons/lu";

import logo from '../../assets/icons/logoTeraByte.svg';

import SidebarItem from '../SidebarItem';

import { SideBarContainer, SideBarContent } from './styles';

const Sidebar = () => {

  return (
    <SideBarContainer>
      <img src={logo} alt="Logo" />
      <SideBarContent>
        <SidebarItem Icon={LuLayoutDashboard} Text="Dashboard" route="/" />
        <p>JOGADORES</p>
        <SidebarItem Icon={FaUserCheck} Text="Registros" route="/" />
        <p>PAGAMENTOS</p>
        <SidebarItem Icon={FaBalanceScale} Text="Registros" route="/pagamentos" />
        <p>CASSINO</p>
        <SidebarItem Icon={FaChartBar} Text="Registros" route="/cassino" />
        <p>LIVROS DE ESPORTES</p>
        <SidebarItem Icon={FaChartBar} Text="Registros" route="/livros-esportes" />
        <p>CONFIGURAÇÕES</p>
        <SidebarItem Icon={FaUserCog} Text="Usuários" route="/" />
      </SideBarContent>
    </SideBarContainer>
  );
};

export default Sidebar;