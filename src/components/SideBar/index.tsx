import {
  FaBalanceScale,
  FaUserCheck,
  FaChartBar
} from 'react-icons/fa';

import { RiFileUserFill } from "react-icons/ri";
import { LuLayoutDashboard } from "react-icons/lu";

import logo from '../../assets/icons/logoTeraByte.svg';

import SidebarItem from '../SidebarItem';

import { SideBarContainer, SideBarContent } from './styles';

const Sidebar = () => {

  return (
    <SideBarContainer>
      <img src={logo} alt="Logo" />
      <SideBarContent>
        <SidebarItem Icon={LuLayoutDashboard} Text="Dashboard" route="/" isActive={location.pathname === '/'} />
        <p>JOGADORES</p>
        <SidebarItem Icon={FaUserCheck} Text="Registros" route="/jogadores" isActive={location.pathname === '/jogadores'} />
        <SidebarItem Icon={RiFileUserFill} Text="Histórico" route="/historico-jogador" isActive={location.pathname === '/historico-jogador'} />
        <p>PAGAMENTOS</p>
        <SidebarItem Icon={FaBalanceScale} Text="Registros" route="/pagamentos" isActive={location.pathname === '/pagamentos'} />
        <p>CASSINO</p>
        <SidebarItem Icon={FaChartBar} Text="Registros" route="/cassino" isActive={location.pathname === '/cassino'} />
        <p>LIVROS DE ESPORTES</p>
        <SidebarItem Icon={FaChartBar} Text="Registros" route="/livros-esportes" isActive={location.pathname === '/livros-esportes'} />
        {/* <p>CONFIGURAÇÕES</p>
        <SidebarItem Icon={FaUserCog} Text="Usuários" route="/" /> */}
      </SideBarContent>
    </SideBarContainer>
  );
};

export default Sidebar;