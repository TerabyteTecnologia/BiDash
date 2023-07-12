import { useNavigate } from 'react-router-dom';
import { SideBarItemProps } from './interface';
import { ContainerSideBarItem } from './styles';

const SidebarItem = (props: SideBarItemProps) => {

  const { Icon, Text, route } = props;

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(route);
  };

  return (
    <ContainerSideBarItem role="button" onClick={handleNavigate}>
      <Icon />
      {Text}
    </ContainerSideBarItem>
  );
};

export default SidebarItem;