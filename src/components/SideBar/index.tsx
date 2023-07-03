import {
  FaHome,
  FaEnvelope,
  FaRegSun,
  FaUserAlt,
  FaIdCardAlt,
  FaRegFileAlt,
  FaRegCalendarAlt,
  FaChartBar
} from 'react-icons/fa';

import { LuLayoutDashboard } from "react-icons/lu";

import logo from '../../assets/icons/logoTeraByte.svg';
import SidebarItem from '../SidebarItem';

import { SideBarContainer, SideBarContent } from './styles';

const Sidebar = () => {


  return (
    <SideBarContainer>
      <img src={logo} />
      <SideBarContent>
        <SidebarItem Icon={LuLayoutDashboard} Text="Dashboard" />
        <p>JOGADORES</p>
        <SidebarItem Icon={FaHome} Text="Home" />
        <p>PAGAMENTOS</p>
        <SidebarItem Icon={FaChartBar} Text="Statistics" />
        <p>LIVROS DE ESPORTES</p>
        <SidebarItem Icon={FaUserAlt} Text="Users" />
        <p>CASSINO</p>
        <SidebarItem Icon={FaEnvelope} Text="Mail" />
        <p>CONFIGURAÇÕES</p>
        <SidebarItem Icon={FaRegSun} Text="Settings" />
      </SideBarContent>
    </SideBarContainer>
  );
};

export default Sidebar;