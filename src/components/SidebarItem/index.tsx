import { SideBarItemProps } from './interface';
import { Container } from './styles';

const SidebarItem = (props: SideBarItemProps) => {

  const { Icon, Text } = props;

  return (
    <Container role="button">
      <Icon />
      {Text}
    </Container>
  );
};

export default SidebarItem;