import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { Header } from '../../components/Header';
import Sidebar from '../../components/SideBar';
import {
  DefaultLayoutHeader,
  DefaultLayoutOutlet,
  DefaultLayoutSection,
  DefaultLayoutSidebar
} from './styles';

export function PrivateRoutes() {

  // const { isAuthentication } = useAuth();
  const isAuthentication = true;
  const navigate = useNavigate();

  useEffect(() => {
    if (false || !isAuthentication)
      navigate("/login");

  }, [isAuthentication]);

  return (

    <DefaultLayoutSection>
      <DefaultLayoutHeader> <Header /></DefaultLayoutHeader>
      <DefaultLayoutSidebar> <Sidebar /></DefaultLayoutSidebar>
      <DefaultLayoutOutlet> <Outlet /></DefaultLayoutOutlet>
    </DefaultLayoutSection>

  );
}