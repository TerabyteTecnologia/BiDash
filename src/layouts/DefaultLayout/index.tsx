import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import Sidebar from '../../components/SideBar';
import { useAuth } from '../../contexts/Auth';

import {
  DefaultLayoutFooter,
  DefaultLayoutHeader,
  DefaultLayoutOutlet,
  DefaultLayoutSection,
  DefaultLayoutSidebar
} from './styles';

export function PrivateRoutes() {

  const { isAuthentication } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthentication)
      navigate("/login");

  }, [isAuthentication]);

  return (

    <DefaultLayoutSection>
      <DefaultLayoutHeader> <Header /></DefaultLayoutHeader>
      <DefaultLayoutSidebar> <Sidebar /></DefaultLayoutSidebar>
      <DefaultLayoutOutlet> <Outlet /></DefaultLayoutOutlet>
      <DefaultLayoutFooter> <Footer /></DefaultLayoutFooter>
    </DefaultLayoutSection>

  );
}